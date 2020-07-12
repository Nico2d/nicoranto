import styled from "styled-components"
import React from "React"
import StyledButton from "../components/button"

const StyledContainer = styled.div`
  position: relative;
`
const StyledImage = styled.img`
  position: absolute;
  left: -50%;
  z-index: -1;
`

const StyledName = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.75);
  font-size: 5vw;
`

const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.85);
  font-size: 22px;
`

const handlerClick = () => {
  console.log("Dodaj element")
}

const StyledContentWrapper = styled.div`
  margin-top: 5rem;
`

const FoodScene = () => (
  <StyledContainer>
    <StyledImage src="http://localhost:1337/uploads/burgers_spicy_avocado_burger_7ae907abf9.png" />

    <StyledContentWrapper>
      <StyledName>Gatsby burger</StyledName>
      <StyledDescription>
        Klasyk z polskiej wołowiny w bułce opiekanej na złoto, z chrupiącą
        sałatą lodową i naszym wyjątkowym sosem Oryginalnym. Czasem mniej
        składników znaczy więcej smaku
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

export default FoodScene
