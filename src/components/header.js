import React from "react"
import Navbar from "./navbar"
import StyledLink from "./styledLink"
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import PhoneLink from "./phoneLink"
const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  position: sticky;
  top: 0;
  z-index: 2;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 1.45rem 1.0875rem;
`
const LogoContainer = styled.div`
  margin: 0;
  flex: 1;
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Row>
        <LogoContainer>
          <StyledLink to="/">
            <Logo />
          </StyledLink>
        </LogoContainer>
        <PhoneLink />
      </Row>
      <Navbar />
    </Container>
  </StyledHeader>
)

export default Header
