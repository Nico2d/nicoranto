import styled from "styled-components"

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.container}px;
  margin: 0 auto;
  margin-top: ${({ withMenu }) => (withMenu ? "100px" : "0px")};
`

export default StyledContainer;