import React from "react"
import Header from "../components/header"
import styled, { createGlobalStyle } from "styled-components"
import backgroundImage from "../images/bg.jpg"
import Layout from "../layout/layout"
import Cart from "../components/cart"
import Container from "../components/container"
import FoodScene from "../components/food-scene"
import SearchSection from "../template/search-section"

const GlobalStyle = createGlobalStyle`
  *::-webkit-scrollbar {
    display: none;
  }
`
const StyledContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: -2; 
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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 3em;
`

const Menu = () => (
  <Layout>
    <GlobalStyle />
    {/* <Header /> */}

    <StyledContainer>
      <StyledBackground />
      <Container style={{ marginTop: "50px" }}>
        <StyledGrid>
          <FoodScene />
          <Cart />
        </StyledGrid>
      </Container>
      <SearchSection />
    </StyledContainer>
  </Layout>
)

export default Menu
