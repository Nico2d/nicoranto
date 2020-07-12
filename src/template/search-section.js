import styled from "styled-components"
import React from "react"
import Searchbar from "../components/searchbar"
import Container from "../components/container"
import CardList from "../components/card-list"

const StyledSearchSection = styled.section`
  width: 100vw;
  height: 250px;
  position: absolute;
  bottom: 0;
  border-top: solid 2px ${({ theme }) => theme.colors.primary};
  backdrop-filter: blur(10px);
`

const StyledTip = styled.span`
  color: white;
  font-size: 16px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 11px);
`

const SearchSection = () => (
  <StyledSearchSection>
    <Container style={{overflow: "scroll"}}>
      <Searchbar />
      <StyledTip>*Użyj podwójnego kliknięcia aby dodać posiłek</StyledTip>
      <CardList />
    </Container>
  </StyledSearchSection>
)

export default SearchSection
