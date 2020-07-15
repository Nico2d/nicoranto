import styled from "styled-components"
import React from "React"
import { connect } from "react-redux"
import StyledButton from "../components/button"
import { addToCart } from "../actions/cartActions"

const StyledContainer = styled.div`
  position: relative;
  flex-grow: 1;
  margin-right: 3rem;
`
const StyledImage = styled.img`
  position: absolute;
  left: -50%;
  z-index: -1;
`

const StyledName = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.75);
  font-size: 70px;
`

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.85);
  font-size: 22px;
`

const StyledContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
`

const FoodScene = props => {
  const handlerClick = () => {
    props.addToCart(props.selectedProduct)
  }

  return (
    <StyledContainer>
      <StyledImage
        src={`http://localhost:1337${props.selectedProduct.image[0].url}`}
      />

      <StyledContentWrapper>
        <StyledName>{props.selectedProduct.name}</StyledName>
        <StyledDescription>
          {props.selectedProduct.description}
        </StyledDescription>
      </StyledContentWrapper>
      <StyledButton
        style={{ position: "absolute", bottom: "0", right: "0" }}
        onClick={handlerClick}
      >
        Dodaj
      </StyledButton>
    </StyledContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product))
    },
  }
}

export default connect(null, mapDispatchToProps)(FoodScene)
