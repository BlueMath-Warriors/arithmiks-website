const SITEMAP_NAMESPACE = "http://www.sitemaps.org/schemas/sitemap/0.9";

const XML_ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" };

const escapeXml = (value) => value.replace(/[&<>"']/g, (character) => XML_ESCAPES[character]);

/**
 * A sitemap of the careers URLs that only exist at request time. The build-time
 * sitemap cannot list them, because the jobs are no longer known at build time.
 *
 * @param {import("../../constants/jobs").Job[]} jobs
 * @param {string} siteUrl Origin with no trailing slash, e.g. "https://arithmiks.com".
 */
export const buildJobsSitemapXml = (jobs, siteUrl) => {
  const entries = jobs
    .map(
      (job) =>
        `  <url><loc>${escapeXml(`${siteUrl}/careers/jobs/${job.slug}`)}</loc><lastmod>${escapeXml(job.datePosted)}</lastmod></url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${SITEMAP_NAMESPACE}">\n${entries}\n</urlset>\n`;
};
