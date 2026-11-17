# Arithmiks Website

## Careers jobs (Contentful)

Open roles are published in Contentful and read by the site on every request, so adding, editing or
unpublishing a role needs no code change, no build and no deploy.

**How it works**

1. `/careers`, `/careers/jobs` and `/careers/jobs/<slug>` are server-rendered (`getServerData`).
   They ask Contentful's Content Delivery API for the published `page - Job` entries
   (`src/server/jobs`). The access token stays on the server.
2. Netlify's CDN caches each rendered page for 30 seconds (`src/server/jobs/jobsCacheHeaders.js`), so
   a role added, edited or unpublished in Contentful shows up within about 30 seconds. There is no
   webhook to set up: Gatsby's functions are not given Netlify's purge token, so purging would need a
   personal access token stored on the site.
3. If Contentful cannot be reached the pages show an error with a retry button and are not cached.
4. `/api/sitemap-jobs` lists the job URLs for search engines (referenced from robots.txt).

**Environment variables** (see `.env.sample`): `CONTENTFUL_SPACE_ID` and `CONTENTFUL_ACCESS_TOKEN`
(Content Delivery API token), read at runtime by the Netlify function.

**Content type `page - Job`** (id `pageJob`). Field ids matter, the code reads them by id:

| Field | Id | Type |
|---|---|---|
| Internal name | `internalName` | Short text (entry title) |
| Slug | `slug` | Short text, unique, lowercase letters/digits/single hyphens |
| Title, Department, Location | `title`, `department`, `location` | Short text |
| Employment type | `employmentType` | Short text (Full-time, Part-time, Contract, Internship) |
| Summary | `summary` | Short text (shown on role cards) |
| Date posted | `datePosted` | Date |
| Industry, Salary, Work experience | `industry`, `salary`, `workExperience` | Short text |
| State/Province, Country, Zip/Postal code | `stateprovince`, `country`, `zippostalCode` | Short text |
| About us | `aboutUs` | Long text, optional (empty uses the shared company paragraph) |
| Job description, Requirements | `jobDescription`, `requirements` | Long text, one paragraph per line |

A job missing a required field, or with an invalid or duplicate slug, is skipped and logged
(`Skipping job entry ...` in the Netlify function logs) instead of breaking the page.

**Publishing**: only *published* entries are visible on the site. Unpublish a role to take it down.

**Tests**: `npm test` (run from PowerShell on Windows).
