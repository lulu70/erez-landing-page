import React from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import PhoneLink from "../components/phoneLink"
import { FaEnvelope } from "react-icons/fa"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const StyledImage = styled(GatsbyImage)`
  border-radius: 1rem;
  flex: 1;
`
const MainSection = styled.section`
  display: flex;
  margin-top: 1rem;
`
const LinksSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 1rem;
`
const H1 = styled.h1`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 1rem;
`
const Description = styled.div`
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
const IndexPage = ({ data }) => {
  const page = data.page
  return (
    <Layout>
      <SEO title="Home" />
      <H1>{page.title}</H1>
      <StyledImage fluid={page.featuredImage.fluid} />
      <MainSection>
        <Description>
          {documentToReactComponents(page.description.json)}
        </Description>
        <StyledImage fluid={page.smallImage.fluid} />
      </MainSection>
      <LinksSection>
        <PhoneLink />
        <EmailContainer>
          <A href={`mailto: ${page.email}`}>{page.email}</A>
          <FaEnvelope />
        </EmailContainer>
      </LinksSection>
    </Layout>
  )
}
export const indexPageQuery = graphql`
  query {
    page: contentfulPage {
      title
      description {
        json
      }
      email
      featuredImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      smallImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
