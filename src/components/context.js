import React from "react"
import Cookies from "js-cookie"
const AppContext = React.createContext()

class AppProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      total: null,
    }
  }
  componentDidMount() {
    const cart = Cookies.getJSON("cart")
    console.log(cart)
    let total
    if (cart) {
      cart.forEach(item => {
        total = item.price * item.quantity
        this.setState({ items: cart, total: total })
      })
    }
  }

  addItem = item => {
    let { items } = this.state

    const newItem = items.find(i => i.id === item.id)

    if (!newItem) {
      item.quantity = 1
      this.setState(
        {
          items: this.state.items.concat(item),
          total: this.state.total + item.price,
        },
        () => Cookies.set("cart", this.state.items)
      )
    } else {
      this.setState(
        {
          items: this.state.items.map(item =>
            item.id === newItem.id
              ? Object.assign({}, item, { quantity: item.quantity + 1 })
              : item
          ),
          total: this.state.total + item.price,
        },
        () => Cookies.set("cart", this.state.items)
      )
    }
  }
  removeItem = item => {
    let { items } = this.state
    const newItem = items.find(i => i.id === item.id)
    if (newItem.quantity > 1) {
      this.setState(
        {
          items: this.state.items.map(item =>
            item.id === newItem.id
              ? Object.assign({}, item, { quantity: item.quantity - 1 })
              : item
          ),
          total: this.state.total - item.price,
        },
        () => Cookies.set("cart", this.state.items)
      )
    } else {
      const items = [...this.state.items]
      const index = items.findIndex(i => i.id === newItem.id)

      items.splice(index, 1)
      this.setState(
        { items: items, total: this.state.total - item.price },
        () => Cookies.set("cart", this.state.items)
      )
    }
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
          total: this.state.total,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    )
  }
}

export default AppProvider
