import styled from "styled-components"

const primary = ({ theme }) => theme.colors.primary;

const StyledButton = styled.button`
  border: 2px solid ${primary};
  border-radius: 2rem;
  background: ${({ isFilled }) => (isFilled ? primary : "transparent")};
  padding: .6rem 2.5rem;
  color: ${({ isFilled }) => (isFilled ? "black" : primary)};
  font-weight: ${({ isFilled }) => (isFilled ? "bold" : "regular")};
  cursor: pointer;
`

export default StyledButton
