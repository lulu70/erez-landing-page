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
  margin-top: 1rem;
`
const LinksSection = styled.section`
  display: flex;
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
  const page = data.page.data
  React.useEffect(() => {
    window.prismic = {
      endpoint: "https://erez.cdn.prismic.io/api/v2",
    }
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <StyledImage fluid={page.featured_image.fluid} />
      <H1>{page.title.text}</H1>
      <MainSection>
        <Description
          dangerouslySetInnerHTML={{ __html: page.description.html }}
        />
        <StyledImage fluid={page.small_image.fluid} />
      </MainSection>
      <LinksSection>
        <PhoneLink />
        <EmailContainer>
          <A href="mailto: erezraymond@gmail.com">erezraymond@gmail.com</A>
          <FaEnvelope />
        </EmailContainer>
      </LinksSection>
    </Layout>
  )
}
export const indexPageQuery = graphql`
  query {
    page: prismicPage {
      data {
        title {
          text
        }
        description {
          html
        }
        featured_image {
          fluid {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }
        small_image {
          fluid {
            ...GatsbyPrismicImageFluid_noBase64
          }
        }
      }
    }
  }
`

export default IndexPage
