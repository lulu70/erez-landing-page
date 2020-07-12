import React from "react"
import styled from "styled-components"
import { FaPhoneAlt } from "react-icons/fa"

const PhoneLinkContainer = styled.div`
  display: flex;
  align-items: center;
`
const A = styled.a`
  margin-left: 0.5rem;
  color: black;
  text-decoration: black;
`
const SocialLink = () => {
  return (
    <PhoneLinkContainer>
      <A href="tel:03-67911516">טלפון: 03-6791151</A>
      <FaPhoneAlt />
    </PhoneLinkContainer>
  )
}

export default SocialLink
