require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Keogafit`,
    description: `Kettle bells meets yoga`,
    author: `@zellement`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `keogafit`,
        short_name: `keogafit`,
        start_url: `/`,
        background_color: `#d85c29`,
        theme_color: `#d85c29`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}


