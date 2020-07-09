import React from "react"
import StyledLink from "./styledLink"
import styled from "styled-components"

const Nav = styled.nav`
  background-color: #292927;
`
const Ul = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
`
const Li = styled.li`
  margin: 0 0 0 1rem;
`
const NavLink = styled(StyledLink)`
  color: #b4983b;
`
const Navbar = () => {
  const linkActiveStyle = {
    color: "white",
  }
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink activeStyle={linkActiveStyle} to="/">
            ראשי
          </NavLink>
        </Li>
        <Li>
          <NavLink activeStyle={linkActiveStyle} to="/gallery">
            גלריה
          </NavLink>
        </Li>
        <Li>
          <NavLink activeStyle={linkActiveStyle} to="/contact">
            צור קשר
          </NavLink>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navbar
