import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions"

const initState = {
  items: [],
  totalPrice: 0,
}

const CartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    const addedItem = action.product
    const newItem = state.items.find(i => i.id === addedItem.id)

    if (!newItem) {
      addedItem.quantity = 1
      let newTotal = state.totalPrice + addedItem.price

      return {
        ...state,
        items: [...state.items, addedItem],
        totalPrice: newTotal,
      }
    } else {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === newItem.id
            ? Object.assign({}, item, { quantity: item.quantity + 1 })
            : item
        ),
        totalPrice: state.totalPrice + addedItem.price,
      }
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.items.find(item => action.id === item.id)
    let new_items = state.items.filter(item => action.id !== item.id)

    let newTotal = state.totalPrice - itemToRemove.price * itemToRemove.quantity
    console.log(itemToRemove)
    return {
      ...state,
      items: new_items,
      totalPrice: newTotal,
    }
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.totalPrice + addedItem.price
    return {
      ...state,
      totalPrice: newTotal,
    }
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    if (addedItem.quantity === 1) {
      let new_items = state.items.filter(item => item.id !== action.id)
      let newTotal = state.totalPrice - addedItem.price
      return {
        ...state,
        items: new_items,
        totalPrice: newTotal,
      }
    } else {
      addedItem.quantity -= 1
      let newTotal = state.totalPrice - addedItem.price
      return {
        ...state,
        totalPrice: newTotal,
      }
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      totalPrice: state.totalPrice + 6,
    }
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      totalPrice: state.totalPrice - 6,
    }
  } else {
    return state
  }
}

export default CartReducer
