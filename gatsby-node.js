exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query PageQuery {
      allDatoCmsPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  data.allDatoCmsPage.edges.forEach((edge) => {
    actions.createPage({
      path: edge.node.slug,
      component: require.resolve(`./src/templates/page-standard.js`),
      context: { slug: edge.node.slug },
    })
  })
}
