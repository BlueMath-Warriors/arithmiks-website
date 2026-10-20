/**
 * @type {import('gatsby').GatsbyConfig}
 */

const fs = require("fs")
const path = require("path")

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

const ONE_DAY_SECONDS = 86400
const ONE_WEEK_SECONDS = 604800
const CACHEABLE_STATIC_FILE = /\.(svg|png|jpe?g|webp|woff2)$/i

// Files copied as-is from /static keep their names when they change, so they
// can't be cached "forever" like Gatsby's hashed bundles. A day plus a week of
// stale-while-revalidate still removes the revalidation round-trip on repeat
// visits. Built from the folder so new assets are covered automatically (the
// Netlify adapter regenerates _headers, so a static/_headers file is ignored).
const staticAssetHeaders = fs
  .readdirSync(path.join(__dirname, "static"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() || CACHEABLE_STATIC_FILE.test(entry.name))
  .map((entry) => ({
    source: entry.isDirectory() ? `/${entry.name}/*` : `/${entry.name}`,
    headers: [
      {
        key: "cache-control",
        value: `public, max-age=${ONE_DAY_SECONDS}, stale-while-revalidate=${ONE_WEEK_SECONDS}`,
      },
    ],
  }))

module.exports = {
  siteMetadata: {
    title: `Arithmiks - Software Development Company`,
    siteUrl: siteUrl,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-plugin-mdx`,

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
        excludes: ['/404', '/404.html', '/search'],
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
          { userAgent: '*', allow: '/', disallow: ['/404'] },
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

  headers: staticAssetHeaders,
};


