import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data, location }) => {
  const page = data.page
  const otherPages = data.otherPages.nodes
  return (
    <Layout page={page} otherPages={otherPages} location={location}></Layout>
  )
}
export const indexPageQuery = graphql`
  query {
    otherPages: allContentfulPage(
      filter: { slug: { ne: "/" } }
      sort: { fields: order, order: ASC }
    ) {
      nodes {
        id
        slug
        title
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          title
        }
        smallImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
          title
        }
        description {
          json
        }
      }
    }
    page: contentfulPage(slug: { eq: "/" }) {
      title
      slug
      id
      description {
        json
      }
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
    contactDetails: contentfulContactDetails {
      email
    }
  }
`

export default IndexPage
