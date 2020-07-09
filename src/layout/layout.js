import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;  
    margin:0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledContainer = styled.div`
  font-size: 22px;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledContainer>{children}</StyledContainer>
    </>
  </ThemeProvider>
)

export default Layout
