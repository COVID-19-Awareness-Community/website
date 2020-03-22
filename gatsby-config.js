module.exports = {
  siteMetadata: {
    title: `COVID-19 Resources in Toronto`,
    description: `A site where Torontonians can share COVID-19 resources.`,
    author: `@monarchwadia`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/website`,
        background_color: `#EEF4F8`,
        theme_color: `#c30000`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          require('path').resolve(__dirname, 'node_modules')
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sheet`,
        path: `${__dirname}/src/data/sheet`,
      },
    },
    // `gatsby-transformer-csv`,
  ],
}
