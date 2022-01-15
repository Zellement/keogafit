require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Keogafit`,
    description: `The perfect balance of mindfulness & body conditioning`,
    author: `@zellement`,
    siteUrl: "https://www.keogafit.co.uk"
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
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
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
