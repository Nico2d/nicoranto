import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledLink = styled.button`
  color: white;
  margin-left: 1.7em;
  text-decoration: none;
`

const StyledHeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: inline-flex;
  width: 100vw;
  max-width: ${({ theme }) => theme.container}px;
  height: 100px;
  z-index: 999;
  align-items: center;
  justify-content: space-between;
`

const StyledLogo = styled(StyledLink)`
  font-size: 35px;
  margin: 0;
`

const StyledLinkWrapper = styled.nav`
  float: right;
  display: inline-flex;
`

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeaderWrapper>
    <StyledHeaderContainer>
      <StyledLogo isLogo as={Link} to="/">
        nicoRANTO
      </StyledLogo>

      <StyledLinkWrapper>
        <StyledLink as={Link} to="/menu">
          Menu
        </StyledLink>
        <StyledLink as={Link} to="/gallery">
          Galeria
        </StyledLink>
        <StyledLink as={Link} to="/about-us">
          Poznaj nas
        </StyledLink>
        <StyledLink as={Link} to="/contact">
          Kontakt
        </StyledLink>
      </StyledLinkWrapper>
    </StyledHeaderContainer>
  </StyledHeaderWrapper>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
