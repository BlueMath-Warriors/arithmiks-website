/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.URL || `https://arithmiks.com`

module.exports = {
  siteMetadata: {
    title: `Arithmiks - Software Development Company`,
    siteUrl: `https://arithmiks.com`,
    description: `We are a custom software development company that assists you in converting your ideas into wonderful software solutions. With our customer centeric approch we build products that matters to users.`,
    image: `/arithmiks-home-meta.png`,
    twitterUsername: 'arithmiks',
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ site, allSitePage }) => {
          let pages = []
          allSitePage.edges.map(edge => {
            pages.push({
              url: site.siteMetadata.siteUrlNoSlash + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            })
          })

          return pages
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
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
  ],
};
