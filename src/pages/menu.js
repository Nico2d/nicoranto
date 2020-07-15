import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import backgroundImage from "../images/bg.jpg"
import Layout from "../layout/layout"
import Cart from "../components/cart"
import FoodScene from "../components/food-scene"
import SearchSection from "../template/search-section"
import { graphql } from "gatsby"

const GlobalStyle = createGlobalStyle`
  *::-webkit-scrollbar {
    display: none;
  }
`
const StyledConatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
`

const StyledBackground = styled.div`
  position: fixed;
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(3px) grayscale(10%);
  transform: scale(1.1);
`

const FlexWrapper = styled.div`
  width: 100vw;
  max-width: ${({ theme }) => theme.container}px;
  margin: 0 auto;
  display: flex;
`

const Menu = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(
    data.allStrapiMenu.edges[0].node
  )

  const changeFocus = product => {
    setSelectedProduct(product)
  }

  return (
    <Layout>
      <GlobalStyle />
      <StyledConatiner>
        <StyledBackground />

        <FlexWrapper>
          <FoodScene
            style={{ flexGrow: 1 }}
            selectedProduct={selectedProduct}
          />
          <Cart />
        </FlexWrapper>

        <SearchSection callBack={changeFocus} />
      </StyledConatiner>
    </Layout>
  )
}

export default Menu

export const query = graphql`
  query {
    allStrapiMenu {
      edges {
        node {
          id
          name
          price
          strapiId
          description
          image {
            url
          }
        }
      }
    }
  }
`
