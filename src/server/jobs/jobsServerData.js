import { getJobBySlug, listJobs } from "./jobsRepository.js";
import { jobsPageCacheHeaders, uncachedHeaders } from "./jobsCacheHeaders.js";

const HTTP_NOT_FOUND = 404;
const HTTP_SERVICE_UNAVAILABLE = 503;

const unavailable = (props) => {
  return { props: { ...props, loadFailed: true }, status: HTTP_SERVICE_UNAVAILABLE, headers: uncachedHeaders() };
};

/**
 * `getServerData` result for the pages that list jobs. A Contentful failure
 * becomes an uncached 503 with `loadFailed` so the page can say so and offer
 * a retry, instead of a blank page or a stack trace.
 */
export const getJobsServerData = async () => {
  try {
    const jobs = await listJobs();
    return { props: { jobs, loadFailed: false }, headers: jobsPageCacheHeaders() };
  } catch (error) {
    console.error("Failed to load jobs from Contentful", error);
    return unavailable({ jobs: [] });
  }
};

/**
 * `getServerData` result for one job page. An unknown slug is a cacheable
 * 404 (publishing that job purges it); an outage is an uncached 503.
 *
 * @param {unknown} slug Untrusted: straight from the URL.
 */
export const getJobServerData = async (slug) => {
  try {
    const job = await getJobBySlug(slug);
    if (!job) {
      return {
        props: { job: null, loadFailed: false },
        status: HTTP_NOT_FOUND,
        headers: jobsPageCacheHeaders(),
      };
    }
    return { props: { job, loadFailed: false }, headers: jobsPageCacheHeaders() };
  } catch (error) {
    console.error("Failed to load a job from Contentful", error);
    return unavailable({ job: null });
  }
};
