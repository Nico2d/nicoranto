import React, { Component } from "react"
import styled from "styled-components"
import Button from "../components/button"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"
import { connect } from "react-redux"
import { addQuantity, subtractQuantity } from "../actions/cartActions"

const StyledCart = styled.div`
  position: relative;
  overflow: hidden;
  color: white;
  width: 350px;
  min-height: 250px;
  flex-shrink: 0;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 1.5rem;
  margin-top: 2rem;

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    backdrop-filter: blur(6px);
    z-index: -1;
  }
`

const StyledHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`

const StyledWrapper = styled.div`
  padding: 1.3rem;
  font-size: 16px;
`

const StyledListWrapper = styled.table`
  margin: 0;
  overflow: scroll;
  max-height: 200px;
  width: 100%;

  th {
    padding: 0;
    font-weight: 400;
    font-size: 16px;
  }
`

const StyledFoot = styled.div`
  position: relative;
  margin-top: 3rem;

  ::before {
    position: absolute;
    height: 1px;
    width: 100%;
    top: -0.7rem;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    content: "";
  }
`

const StyledQuantity = styled.span`
  margin: 0 10px;
`

const Price = styled.th`
  text-align: right;
`
const StyledQuantityWrapper = styled.th`
  .StyledIcon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
    }
  }
`

const StyledEmphasis = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  font-weight: bold;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
`

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = { sum: 0 }
  }

  handleAddQuantity = id => {
    this.props.addQuantity(id)
    this.countFinalePrice()
  }

  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id)
    this.countFinalePrice()
  }

  countFinalePrice = () => {
    let sumProducts = 0
    this.props.items.map(item => (sumProducts += item.price * item.quantity))
    this.setState({ sum: sumProducts })
  }

  render() {
    return (
      <StyledCart>
        <StyledWrapper>
          <StyledHeader>Koszyk:</StyledHeader>

          <StyledListWrapper>
            <tbody>
              {this.props.items.length ? (
                this.props.items.map(item => (
                  <tr key={item.id}>
                    <th>{item.title}</th>
                    <StyledQuantityWrapper>
                      <FiMinusCircle
                        className="StyledIcon"
                        onClick={() => {
                          this.handleSubtractQuantity(item.id)
                        }}
                      />
                      <StyledQuantity>x{item.quantity}</StyledQuantity>
                      <FiPlusCircle
                        className="StyledIcon"
                        onClick={() => {
                          this.handleAddQuantity(item.id)
                        }}
                      />
                    </StyledQuantityWrapper>
                    <Price>{item.price * item.quantity}zł</Price>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>-</th>
                </tr>
              )}
            </tbody>
          </StyledListWrapper>

          <StyledFoot>
            <p>
              Suma:
              <StyledEmphasis style={{ float: "right" }}>
                {this.state.sum}zł
              </StyledEmphasis>
            </p>
            <Button isFilled style={{ width: "100%" }}>
              Przejdź do płatności
            </Button>
          </StyledFoot>
        </StyledWrapper>
      </StyledCart>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addQuantity: id => {
      dispatch(addQuantity(id))
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
