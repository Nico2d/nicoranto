import React from "react"
import styled from "styled-components"
import Button from "../components/button"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"
import { connect } from "react-redux"
import { addQuantity, subtractQuantity } from "../actions/cartActions"
import Price from "../components/price"

const StyledCart = styled.div`
  position: relative;
  overflow: hidden;
  color: white;
  width: 350px;
  min-height: 250px;
  flex-shrink: 0;
  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 1.5rem;

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
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

const StyledListWrapper = styled.div`
  margin: 0;
  padding-right: 7px;
  overflow: scroll;
  width: 100%;
  overflow-x: hidden;
  flex-grow: 1;
  text-align: left;

  ::-webkit-scrollbar {
    all: unset;
    width: 3px;
    border-radius: 3px;
    color: red;
  }

  ::-webkit-scrollbar-thumb {
    left: 3px;
    background: rgba(255, 255, 0, 0.8);
    border-radius: 4px;
  }

  table {
    width: 100%;
  }

  th {
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 8px;
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
  width: 25px;
`

const StyledPrice = styled.th`
  text-align: right;
`
const StyledQuantityWrapper = styled.th`
  white-space: nowrap;

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

const Cart = props => {
  return (
    <StyledCart>
      <StyledWrapper>
        <StyledHeader>Koszyk:</StyledHeader>
        <StyledListWrapper>
          <table>
            <tbody>
              {props.items.length ? (
                props.items.map(item => (
                  <tr key={item.id}>
                    <th style={{ width: "140px" }}>{item.name}</th>
                    <StyledQuantityWrapper>
                      <FiMinusCircle
                        className="StyledIcon"
                        onClick={() => {
                          props.subtractQuantity(item.id)
                        }}
                      />
                      <StyledQuantity>x{item.quantity}</StyledQuantity>
                      <FiPlusCircle
                        className="StyledIcon"
                        onClick={() => {
                          props.addQuantity(item.id)
                        }}
                      />
                    </StyledQuantityWrapper>
                    <StyledPrice>
                      <Price price={item.price * item.quantity} />
                      zł
                    </StyledPrice>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>-</th>
                </tr>
              )}
            </tbody>
          </table>
        </StyledListWrapper>

        <StyledFoot>
          <p style={{ display: "flex" }}>
            Suma:
            <StyledEmphasis style={{ flexGrow: 1, textAlign: "right" }}>
              <Price price={props.totalPrice} />
            </StyledEmphasis>
            <StyledEmphasis>zł</StyledEmphasis>
          </p>

          <Button isFilled style={{ width: "100%" }}>
            Przejdź do płatności
          </Button>
        </StyledFoot>
      </StyledWrapper>
    </StyledCart>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    totalPrice: state.totalPrice,
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
