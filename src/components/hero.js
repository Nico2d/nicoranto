import React from "react"
import styled from "styled-components"
import Background from "../images/7.jpg"    // 2 i 7 - best

const StyledHero = styled.h1`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  background-image: url(${Background});
  background-size: cover;
  background-position-y: 75%;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
`
const StyledHeroText = styled.h1`
  font-size: 100px;
  margin-bottom: 0.4rem;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
`

const StyledHeroDescription = styled.h3`
  font-size: 35px;
  font-weight: 300;
  text-shadow: 3px 4px 3px rgba(0, 0, 0, 0.3);
`

const Hero = () => (
  <StyledHero>
    <StyledHeroText>Daj się skusić</StyledHeroText>
    <StyledHeroDescription>
      Pomsył, Realizacja, Dopracowanie
    </StyledHeroDescription>
    <StyledHeroDescription style={{fontWeight: 400, fontSize: "38px",marginTop: "27px"}}>
      Zamów do stołu!
    </StyledHeroDescription>
  </StyledHero>
)

export default Hero
