import styled from "styled-components"
import React from "react"
import { connect } from "react-redux"
import StyledButton from "../components/button"
import { addToCart } from "../actions/cartActions"
import { motion, AnimatePresence } from "framer-motion"

const StyledContainer = styled.div`
  position: relative;
  flex-grow: 1;
  margin-right: 3rem;
  height: 100%;
`
const StyledImage = styled.img`
  position: absolute;
  left: -50%;
  top: 0;
  z-index: -1;
`

const StyledName = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.75);
  font-size: 60px;
`

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.85);
  font-size: 20px;
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
    <AnimatePresence>
      <StyledContainer>
        <StyledContentWrapper
          as={motion.div}
          key={props.selectedProduct.id}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
        >
          <StyledImage src={`${props.selectedProduct.image.publicURL}`} />
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
    </AnimatePresence>
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
