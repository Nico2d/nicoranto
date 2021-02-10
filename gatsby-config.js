module.exports = {
  siteMetadata: {
    title: `Nicoranto`,
    description: `super uper description on Gatsby and Strapi`,
    author: `Nico Wätzig`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     contentTypes: [`menu`],
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://co-tam-profesorku-backend.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [`menu`],
        queryLimit: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
