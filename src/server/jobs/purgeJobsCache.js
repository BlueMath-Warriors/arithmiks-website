import { purgeCache } from "@netlify/cache";
import { JOBS_CACHE_TAG } from "./jobsCacheHeaders.js";

/** Drops every cached careers response from Netlify's CDN. */
export const purgeJobsCache = () => purgeCache({ tags: [JOBS_CACHE_TAG] });
