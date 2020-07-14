import React from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import StyledLink from "./styledLink"
const StyledImage = styled(GatsbyImage)`
  border-radius: 1rem;
  flex: 1;
`
const MainSection = styled.section`
  display: flex;
  margin-top: 1rem;
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
const PageLink = styled(StyledLink)`
  padding: 0;
`
const PageContent = ({ page }) => {
  const to = page.slug === "/" ? "/" : `/${page.slug}/`

  return (
    <>
      <PageLink to={to}>
        <H1>{page.title}</H1>
      </PageLink>
      <StyledImage fluid={page.featuredImage.fluid} />
      <MainSection>
        <Description>
          {documentToReactComponents(page.description.json)}
        </Description>
        <StyledImage fluid={page.smallImage.fluid} />
      </MainSection>
    </>
  )
}

export default PageContent
