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
const MenuLine = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
`
const MenuButton = styled.button`
  :active,
  :focus {
    border-color: #b4983b;
    box-shadow: 0 0 0 0.05rem #b4983b;
  }
`
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isSmallScreen, setIsSmallScreen] = React.useState(false)

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
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    opacity: isMenuOpen ? 1 : 0,
    height:
      isMenuOpen && isSmallScreen ? 150 : !isSmallScreen && isMenuOpen ? 54 : 0,
  })
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
  const AnimatedUl = animated(Ul)
  return (
    <Nav>
      {isSmallScreen && (
        <MenuButton
          type="button"
          className="btn"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <MenuLine />
          <MenuLine />
          <MenuLine />
        </MenuButton>
      )}
      <AnimatedUl style={spring}>
        {data.allContentfulPageOrder.nodes[0].pages.map(page => {
          const isInDevelopment = process.env.NODE_ENV === "development"
          const to =
            page.slug === "/"
              ? "/"
              : `/${page.slug}${isInDevelopment ? "/" : ""}`
          return (
            isMenuOpen && (
              <Li key={page.id}>
                <NavLink activeStyle={linkActiveStyle} to={to}>
                  {page.slug === "/" ? "ראשי" : page.title}
                </NavLink>
              </Li>
            )
          )
        })}
      </AnimatedUl>
    </Nav>
  )
}

export default Navbar
