/** Every cached careers response carries this tag so one purge refreshes them all. */
export const JOBS_CACHE_TAG = "contentful-jobs";

// The purge webhook makes edits visible within seconds. These windows only
// bound how stale a page can be if that purge ever fails, so they are short.
const CDN_FRESH_SECONDS = 600;
const CDN_STALE_SECONDS = 600;

/**
 * Headers for a successfully rendered careers page. Browsers always
 * revalidate; Netlify's CDN keeps the response and is told to forget it
 * whenever the jobs tag is purged.
 */
export const jobsPageCacheHeaders = () => ({
  "Cache-Control": "public, max-age=0, must-revalidate",
  "Netlify-CDN-Cache-Control": `public, durable, s-maxage=${CDN_FRESH_SECONDS}, stale-while-revalidate=${CDN_STALE_SECONDS}`,
  "Netlify-Cache-Tag": JOBS_CACHE_TAG,
});

/** A Contentful outage must never be cached, or it would outlive the outage. */
export const uncachedHeaders = () => ({ "Cache-Control": "no-store" });
