import React from "react"
import styled from "styled-components"
import backgroundImage from "../images/bg.jpg"
import Button from "../components/button"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"

const StyledCart = styled.div`
  position: relative;
  overflow: hidden;
  color: white;
  width: 350px;
  height: 100%;
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
  padding-top: 15px;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
`

const StyledWrapper = styled.div`
  padding: 1rem;
  font-size: 16px;
`

const StyledList = styled.li`
  list-style-type: none;
  font-size: 14px;
  margin: 0;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
`

const StyledListWrapper = styled.ul`
  margin: 0;
  overflow: scroll;
  max-height: 200px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`

const StyledFoot = styled.div`
  position: relative;
  margin-top: 1rem;

  ::before {
    position: absolute;
    height: 2px;
    width: 80%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    content: "";
  }
`

const StyledQuantity = styled.span`
  margin: 0 10px;
`

const Price = styled.span`
  text-align: right;
`
const StyledQuantityWrapper = styled.div`
  justify-self: center;

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
  text-shadow: 2px 2px 3px rgba(0,0,0,0.7);
`

const Cart = () => (
  <StyledCart>
    <StyledWrapper>
      <StyledHeader>Koszyk:</StyledHeader>

      <StyledListWrapper>
        {/* <StyledList> */}
        <div>Menu burger</div>
        <StyledQuantityWrapper>
          <FiMinusCircle className="StyledIcon" onClick={decrease} />
          <StyledQuantity>2</StyledQuantity>
          <FiPlusCircle className="StyledIcon" onClick={increase} />
        </StyledQuantityWrapper>
        <Price>14zł</Price>
        {/* </StyledList> */}

        {/* <StyledList> */}
        <div>Gatsby burger</div>
        <StyledQuantityWrapper>
          <FiMinusCircle className="StyledIcon" onClick={decrease} />
          <StyledQuantity>1</StyledQuantity>
          <FiPlusCircle className="StyledIcon" onClick={increase} />
        </StyledQuantityWrapper>
        <Price>22.95zł</Price>
        {/* </StyledList> */}

        {/* <StyledList> */}
        <div>Strapi fries</div>
        <StyledQuantityWrapper>
          <FiMinusCircle className="StyledIcon" onClick={decrease} />
          <StyledQuantity>4</StyledQuantity>
          <FiPlusCircle className="StyledIcon" onClick={increase} />
        </StyledQuantityWrapper>
        <Price>20.00zł</Price>
        {/* </StyledList> */}
      </StyledListWrapper>

      <StyledFoot>
        <p>
          Suma:
          <StyledEmphasis style={{ float: "right" }}>56,95zł</StyledEmphasis>
        </p>
        <div style={{ textAlign: "center" }}>
          <Button isFilled>Przejdź do płatności</Button>
        </div>
      </StyledFoot>
    </StyledWrapper>
  </StyledCart>
)

export default Cart

const increase = () => {
  console.log("add one")
}

const decrease = () => {
  console.log("zmniejsz")
}
