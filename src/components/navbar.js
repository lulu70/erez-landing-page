import React from "react"
import StyledLink from "./styledLink"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
const Nav = styled.nav`
  background-color: #292927;
`
const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0;
  list-style: none;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Li = styled.li`
  margin: 0 0 0 1rem;
`
const NavLink = styled(StyledLink)`
  color: #b4983b;
`
const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPageOrder {
        nodes {
          pages {
            slug
            title
            id
          }
        }
      }
    }
  `)
  const linkActiveStyle = {
    color: "white",
  }
  return (
    <Nav>
      <Ul>
        {data.allContentfulPageOrder.nodes[0].pages.map(page => {
          const isInDevelopment = process.env.NODE_ENV === "development"
          const to =
            page.slug === "/"
              ? "/"
              : `/${page.slug}${isInDevelopment ? "/" : ""}`
          return (
            <Li key={page.id}>
              <NavLink activeStyle={linkActiveStyle} to={to}>
                {page.slug === "/" ? "ראשי" : page.title}
              </NavLink>
            </Li>
          )
        })}
      </Ul>
    </Nav>
  )
}

export default Navbar
