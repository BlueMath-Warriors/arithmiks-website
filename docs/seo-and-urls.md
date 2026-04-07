# SEO, URLs, and routing

This site is a Gatsby 5 app using **file-based routes** under `src/pages/`. Public URLs come from file paths (see route map below).

## Trailing slashes

[`gatsby-config.js`](../gatsby-config.js) sets `trailingSlash: 'never'`. Internal links and every `SEO` `pathname` prop must use paths **without** a trailing `/` (except the bare homepage path `"/"`).

## Canonical URLs and `SEO`

The [`SEO` component](../src/components/seo.jsx) sets:

- `<title>`, meta description, Open Graph, Twitter cards  
- `<link rel="canonical">` to **`siteMetadata.siteUrl` + `pathname`**  
- JSON-LD: Organization, WebSite, WebPage, and optional `BreadcrumbList`

**Rule:** The `pathname` passed to `SEO` in each page’s `Head` export must match the real browser path for that page. If they diverge, canonicals and structured data will be wrong.

`breadcrumbItems` is optional. When set, it defines the full `BreadcrumbList` (each entry: `name` + `pathname`). When omitted, non-home pages get a two-level crumb: Home → current page title.

### Site URL and sitemap

- **`siteMetadata.siteUrl`** in `gatsby-config.js` is the production origin (e.g. `https://arithmiks.com`).
- **`URL` environment variable** is used in `gatsby-config.js` when building absolute sitemap URLs (`toAbsoluteUrl`). For accurate staging sitemaps, set `URL` to the deployment origin during build.

`gatsby-plugin-robots-txt` uses a fixed `host` and `sitemap`; if the production domain changes, update that plugin block to match.

## Single sources of truth

| Concern | Location |
|--------|----------|
| Service slugs, labels, page copy, service SEO title/description | [`src/constants/serviceRoutes.js`](../src/constants/serviceRoutes.js) |
| Case study SEO (title, description, breadcrumb label) | [`src/constants/caseStudySeo.js`](../src/constants/caseStudySeo.js) |

Changing a **published** service slug or removing a page requires **301 redirects** from old URLs (see below) and stakeholder sign-off, as noted in `serviceRoutes.js`.

## Route map (main pages)

| URL path | File |
|----------|------|
| `/` | `src/pages/index.js` |
| `/about` | `src/pages/about.js` |
| `/contact` | `src/pages/contact.js` |
| `/case-studies` | `src/pages/case-studies.js` |
| `/case-studies/<slug>` | `src/pages/case-studies/<slug>.js` |
| `/services` | `src/pages/services/index.js` |
| `/services/<slug>` | `src/pages/services/<slug>.js` (one file per service) |
| `/dedicated-team` | `src/pages/dedicated-team.js` |
| `/fixed-price` | `src/pages/fixed-price.js` |

Legacy URLs **`/company`** and **`/contact-us`** redirect (301) to **`/about`** and **`/contact`** via [`static/_redirects`](../static/_redirects) (Netlify-style; copied to `public/` on build).

## Redirects on other hosts

`static/_redirects` is ideal for **Netlify** and **Cloudflare Pages** (same format). If you deploy elsewhere, mirror these rules:

### Vercel (`vercel.json`)

```json
{
  "redirects": [
    { "source": "/contact-us", "destination": "/contact", "permanent": true },
    { "source": "/contact-us/", "destination": "/contact", "permanent": true },
    { "source": "/company", "destination": "/about", "permanent": true },
    { "source": "/company/", "destination": "/about", "permanent": true }
  ]
}
```

### Cloudflare Pages

Add the same paths in **Pages → project → Custom domains / Redirects**, or rely on `_redirects` in the published output if supported.

### GitHub Pages / plain static hosting

Neither `_redirects` nor `vercel.json` applies. Configure redirects on a reverse proxy (e.g. Cloudflare), use a host that supports redirects, or accept that only pretty URLs on the new paths will be canonical.

## Checklist: new page

1. Add `src/pages/...` so the URL matches the file path.  
2. Export `Head` with `SEO` and set **`title`**, **`description`**, **`pathname`**.  
3. For nested sections (e.g. under `/services` or `/case-studies`), pass **`breadcrumbItems`**.  
4. If the page replaces an old URL, add a **301** in `static/_redirects` (and any other host config).  
5. For a new **service**, add an entry to `serviceRoutes.js` and a new file under `src/pages/services/`.  
6. For a new **case study**, add `src/pages/case-studies/<slug>.js` and a matching entry in `caseStudySeo.js`.
