import React from "react"
import PhoneSVG from "../../content/assets/phone.svg"
import Navbar from "./navbar"
import StyledLink from "./styledLink"
import styled from "styled-components"

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  text-align: right;
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
  flex-direction: row-reverse;
  align-items: center;
  padding: 1.45rem 1.0875rem;
`
const H1 = styled.h1`
  margin: 0;
  flex: 1;
`
const PhoneLinkContainer = styled.div`
  display: flex;
  align-items: center;
`
const A = styled.a`
  margin-left: 0.5rem;
  color: black;
  text-decoration: black;
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Row>
        <H1>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </H1>
        <PhoneLinkContainer>
          <PhoneSVG />
          <A href="tel:03-67911516">טלפון: 03-6791151</A>
        </PhoneLinkContainer>
      </Row>
      <Navbar />
    </Container>
  </StyledHeader>
)

export default Header
