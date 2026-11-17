// How long Netlify's CDN may reuse a rendered careers page. This is the whole
// freshness story: a role edited, added or unpublished in Contentful shows up
// once it elapses, because there is no purge. Gatsby's functions are not given
// Netlify's purge token, so a purge would need a personal access token stored
// on the site. Kept short for that reason; the cost is at most one Contentful
// call per page per window under steady traffic.
const CDN_FRESH_SECONDS = 30;

/**
 * Headers for a successfully rendered careers page. Browsers always
 * revalidate; Netlify's CDN keeps the response, shared across its nodes, for
 * the short window above.
 */
export const jobsPageCacheHeaders = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate",
  "Netlify-CDN-Cache-Control": `public, durable, s-maxage=${CDN_FRESH_SECONDS}`,
});

/** A Contentful outage must never be cached, or it would outlive the outage. */
export const uncachedHeaders = () => ({ "Cache-Control": "no-store" });
