import React from "react"
import styled from "styled-components"
import { FaEnvelope } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
const A = styled.a`
  color: black;
  margin-left: 1rem;
`

const EmailLink = () => {
  const data = useStaticQuery(graphql`
    {
      contactDetails: contentfulContactDetails {
        email
      }
    }
  `)
  return (
    <EmailContainer>
      <A href={`mailto: ${data.contactDetails.email}`}>
        {data.contactDetails.email}
      </A>
      <FaEnvelope />
    </EmailContainer>
  )
}

export default EmailLink
