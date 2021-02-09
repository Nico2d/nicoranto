import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import cartReducer from "../reducers/cartReducer"
import { Provider } from "react-redux"
import { createStore } from "redux"

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

const store = createStore(cartReducer)

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <GlobalStyle />
      <StyledContainer>{children}</StyledContainer>
    </Provider>
  </ThemeProvider>
)

export default Layout
