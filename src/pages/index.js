import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import PhoneLink from "../components/phoneLink"
import { FaEnvelope } from "react-icons/fa"

const StyledImage = styled(GatsbyImage)`
  border-radius: 1rem;
  flex: 1;
`
const MainSection = styled.section`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 1rem;
`
const LinksSection = styled.section`
  display: flex;
  /* flex-direction: row-reverse; */
  margin-top: 1rem;
  align-items: center;
  border-radius: 1rem;
  /* background-color: lightgray; */
  padding: 1rem;
`
const H1 = styled.h1`
  /* background-color: lightgray; */
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
`
const P = styled.p`
  /* background-color: lightgray; */
  border-radius: 1rem;
  padding: 1rem;
  margin: 0 0 0 1rem;
  flex: 3;
`
const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
const A = styled.a`
  color: black;
  margin-left: 1rem;
`
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledImage fluid={data.images.nodes[0].fluid} />
    <H1>ארז אירועים</H1>
    <MainSection>
      <P>
        אוכל כשר מהדרין בהשגחת הרב לנדאו
        <br /> באולם ניתן לחגוג אירועים ושמחות כגון: חתונה, בר מצווה, בת מצווה ,
        בריתות, אירוסין ועוד
      </P>
      <StyledImage fluid={data.images.nodes[1].fluid} />
    </MainSection>
    <LinksSection>
      <PhoneLink />
      <EmailContainer>
        <FaEnvelope />
        <A href="mailto: erezraymond@gmail.com">erezraymond@gmail.com</A>
      </EmailContainer>
    </LinksSection>
  </Layout>
)

export const indexPageQuery = graphql`
  query {
    images: allImageSharp {
      nodes {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
