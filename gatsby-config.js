/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.URL || `https://arithmiks.com`

const toAbsoluteUrl = (path) => {
  if (!path) return siteUrl;
  if (path === "/") return siteUrl;
  const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;
  return new URL(normalizedPath, siteUrl).toString();
};

module.exports = {
  siteMetadata: {
    title: `Arithmiks - Software Development Company`,
    siteUrl: `https://arithmiks.com`,
    description: `We are a custom software development company that assists you in converting your ideas into wonderful software solutions. With our customer centric approach we build products that matter to users.`,
    image: `/arithmiks-home-meta.png`,
    twitterUsername: 'arithmiks',
  },
  plugins: [
    "gatsby-plugin-styled-components",
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    
    "gatsby-plugin-react-svg",
    
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Arithmiks - Software Development Company',
        short_name: 'Arithmiks',
        description: 'Custom software development company building innovative solutions',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1355FF',
        display: 'standalone',
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        cache_busting_mode: 'query',
      },
    },
    
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/',
        excludes: ['/404', '/404.html'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        serialize: ({ path }) => ({
          url: toAbsoluteUrl(path),
          changefreq: 'weekly',
          priority: path === '/' ? 1.0 : 0.7,
        }),
      },
    },
    
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://arithmiks.com',
        sitemap: 'https://arithmiks.com/sitemap-index.xml',
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: ['/404'] },
        ],
      },
    },
    
    ...(process.env.GA_ID && process.env.GA_ID.trim() !== '' ? [{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_ID],
        pluginConfig: {
          head: false,
          respectDNT: true,
          delayOnRouteUpdate: 0,
        },
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    }] : []),
  ],
  
  flags: {
    DEV_SSR: false,
  },
  
  trailingSlash: 'never',
};


