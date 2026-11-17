import { listJobs } from "../../server/jobs/jobsRepository.js";
import { buildJobsSitemapXml } from "../../server/jobs/jobsSitemap.js";
import { jobsPageCacheHeaders, uncachedHeaders } from "../../server/jobs/jobsCacheHeaders.js";

const DEFAULT_SITE_URL = "https://arithmiks.com";

const withoutTrailingSlash = (url) => url.replace(/\/+$/, "");

/** Careers URLs for search engines; referenced from robots.txt next to the build-time sitemap. */
export default async function sitemapJobsHandler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  const sendHeaders = (headers) => Object.entries(headers).forEach(([name, value]) => res.setHeader(name, value));

  try {
    const jobs = await listJobs();
    const siteUrl = withoutTrailingSlash(process.env.URL || DEFAULT_SITE_URL);

    sendHeaders(jobsPageCacheHeaders());
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    return res.status(200).send(buildJobsSitemapXml(jobs, siteUrl));
  } catch (error) {
    console.error("Failed to build the jobs sitemap", error);
    sendHeaders(uncachedHeaders());
    return res.status(503).json({ success: false, error: "Jobs are temporarily unavailable." });
  }
}
