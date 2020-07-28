import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data, location }) => {
  const page = data.page
  const pages = data.allContentfulPageOrder.nodes[0].pages
  return <Layout page={page} pages={pages} location={location}></Layout>
}
export const indexPageQuery = graphql`
  query {
    allContentfulPageOrder {
      nodes {
        pages {
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
