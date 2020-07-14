import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PageTemplate = ({ data, location }) => {
  const page = data.page
  return <Layout page={page} location={location}></Layout>
}

export default PageTemplate

export const indexPageQuery = graphql`
  query($slug: String!) {
    page: contentfulPage(slug: { eq: $slug }) {
      title
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
