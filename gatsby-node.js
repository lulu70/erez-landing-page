const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page-template.js`)
  const result = await graphql(`
    query {
      pages: allContentfulPage {
        nodes {
          slug
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  result.data.pages.nodes.forEach(page => {
    createPage({
      path: page.slug,
      component: pageTemplate,
      context: {
        slug: page.slug,
      },
    })
  })
}
