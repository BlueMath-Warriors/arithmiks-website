/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `arithmiks`,
    siteUrl: `https://arithmiks.com`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_ID],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    // {
    //   resolve: `gatsby-omni-font-loader`,
    //   options: {
    //     enableListener: true,
    //     preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    //     web: [
    //       {
    //         name: `Poppins`,
    //         file: `https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap`,
    //       },
    //       {
    //         name: `Roboto`,
    //         file: `https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap`,
    //       },
    //     ],
    //   },
    // },
  ],
};
