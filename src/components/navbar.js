import React from "react"
import StyledLink from "./styledLink"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"
const Nav = styled.nav`
  background-color: #292927;
`
const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0;
  }
`
const Li = styled.li`
  margin: 0 0 0 1rem;
`
const NavLink = styled(StyledLink)`
  color: #b4983b;
  :hover {
    color: white;
  }
`
const MenuLine = styled.div`
  width: 35px;
  height: 2px;
  background-color: white;
  margin: 9px 0;
`
const MenuButton = styled.button`
  background-color: transparent;
  border: 0;
  margin: 0.1rem;
  :active,
  :focus {
    outline: none;
    box-shadow: 0 0 0.2rem 0.1rem #b4983b;
  }
  :hover {
    div {
      background-color: #b4983b;
    }
  }
`
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(
    typeof window !== `undefined`
      ? !window.matchMedia("(max-width: 576px)").matches
      : ""
  )
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    typeof window !== `undefined`
      ? window.matchMedia("(max-width: 576px)").matches
      : ""
  )

  // adds media query listeners
  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 576px)")
    const listener = () => {
      if (window.matchMedia("(max-width: 576px)").matches) {
        setIsMenuOpen(false)
        setIsSmallScreen(true)
      } else {
        setIsMenuOpen(true)
        setIsSmallScreen(false)
      }
    }
    listener()
    mediaQueryList.addListener(listener)
    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])
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

  const spring = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    maxHeight: isMenuOpen ? 100 : 0,
  })
  const linkActiveStyle = {
    color: "white",
  }
  const AnimatedLi = animated(Li)
  return (
    <Nav>
      {isSmallScreen && (
        <MenuButton
          type="button"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </MenuButton>
      )}
      <Ul>
        {data.allContentfulPageOrder.nodes[0].pages.map(page => {
          const isInDevelopment = process.env.NODE_ENV === "development"
          const to =
            page.slug === "/"
              ? "/"
              : `/${page.slug}${isInDevelopment ? "/" : ""}`
          return (
            <AnimatedLi key={page.id} style={spring}>
              <NavLink activeStyle={linkActiveStyle} to={to}>
                {page.slug === "/" ? "ראשי" : page.title}
              </NavLink>
            </AnimatedLi>
          )
        })}
      </Ul>
    </Nav>
  )
}

export default Navbar
