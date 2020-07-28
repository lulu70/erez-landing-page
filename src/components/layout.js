import React from "react"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import SEO from "./seo"
import PageContent from "./PageContent"
import PhoneLink from "./phoneLink"
import EmailLink from "./EmailLink"

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
`
const LinksSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 1rem;
`
const Layout = ({ children, page, pages, location }) => {
  const ishomePage = location.pathname === "/"
  return (
    <>
      <SEO title={ishomePage ? "ראשי" : page.title} />
      <Header />
      <Main>
        {ishomePage ? (
          <>
            {pages.map(page => (
              <PageContent page={page} key={page.id} />
            ))}
          </>
        ) : (
          <PageContent page={page} />
        )}
        <LinksSection>
          <PhoneLink />
          <EmailLink />
        </LinksSection>
      </Main>
    </>
  )
}

export default Layout
