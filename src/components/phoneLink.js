import React from "react"
import styled from "styled-components"
import { FaPhoneAlt } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const PhoneLinkContainer = styled.div`
  display: flex;
  align-items: center;
`
const A = styled.a`
  margin-left: 0.5rem;
  color: black;
  text-decoration: black;
`
const PhoneLink = () => {
  const data = useStaticQuery(graphql`
    {
      page: contentfulPage {
        phoneNumber
      }
    }
  `)
  return (
    <PhoneLinkContainer>
      <A
        href={`tel:${data.page.phoneNumber}`}
      >{`טלפון: ${data.page.phoneNumber}`}</A>
      <FaPhoneAlt />
    </PhoneLinkContainer>
  )
}

export default PhoneLink
