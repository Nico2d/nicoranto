import React from "react"
import Header from "../components/header"
import { StaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import backgroundImage from "../images/c1.jpg"
import Layout from "../layout/layout"
import Cart from "../components/cart"

const GlobalStyle = createGlobalStyle`
    *::-webkit-scrollbar {
        display: none;
    }
`

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`
const StyledWrapper = styled.div`
  position: relative;
  /* width: 100vw !important; */
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark};
  z-index: -2;
`

const StyledBackground = styled.div`
  
  position: absolute;
  top: -1px;
  left: -1px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: bottom;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(3px) grayscale(10%);
`

const Menu = () => (
  <Layout>
    <GlobalStyle />
    <Header />

    <StyledWrapper>
      <StyledBackground />
      <Cart />
      {/* <StaticQuery
      query={graphql`
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
      `}
      render={({ allStrapiMenu: { edges } }) => (
        <div>
          {edges.map(dish => (
            <div key={dish.node.id}>
              {/* <StyledImage
                src={`http://localhost:1337${dish.node.image[0].url}`}
                alt={dish.node.name}
              />
              <h3>{dish.node.name}</h3>
              <h5>{dish.node.description}</h5>
              <p>Price: {dish.node.price}</p> */}
      {/* </div>
          ))}
        </div>
      )}
            />*/}
    </StyledWrapper>
  </Layout>
)

export default Menu
