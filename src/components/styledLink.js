import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.3rem;
  border-radius: 5px;
  :hover {
    text-decoration: none;
    color: black;
    padding: 0.3rem;
    border-radius: 5px;
    list-style: none;
  }
`
export default props => {
  return <StyledLink {...props} />
}
