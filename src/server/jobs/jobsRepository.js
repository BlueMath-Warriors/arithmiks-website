import { fetchEntries } from "../contentful/deliveryClient.js";
import { mapJobEntry, SLUG_PATTERN } from "./mapJobEntry.js";

export const JOB_CONTENT_TYPE_ID = "pageJob";

// Contentful's own default page size. A site with more open roles than this
// would need pagination; the careers list is nowhere near it.
const MAX_JOBS = 100;
const NEWEST_FIRST = "-fields.datePosted";

const toJobs = (entries) => {
  const seenSlugs = new Set();

  return entries.flatMap((entry) => {
    const entryId = entry?.sys?.id ?? "unknown";
    const { job, problems } = mapJobEntry(entry);

    if (!job) {
      console.warn(`Skipping job entry ${entryId}: ${problems.join(" ")}`);
      return [];
    }
    // Entries arrive newest first, so a repeated slug is the older job.
    if (seenSlugs.has(job.slug)) {
      console.warn(`Skipping job entry ${entryId}: slug "${job.slug}" is already used by a newer job.`);
      return [];
    }
    seenSlugs.add(job.slug);
    return [job];
  });
};

/**
 * Every published job, newest first. Entries that cannot be shown are skipped
 * and logged, so one badly filled-in entry cannot blank the careers pages.
 *
 * @returns {Promise<import("../../constants/jobs").Job[]>}
 * @throws {import("../contentful/deliveryClient").ContentfulDeliveryError}
 */
export const listJobs = async () => {
  const { items } = await fetchEntries({
    contentType: JOB_CONTENT_TYPE_ID,
    query: { order: NEWEST_FIRST, limit: MAX_JOBS, include: 0 },
  });
  return toJobs(items);
};

/**
 * One published job, or null when no such job exists. Looked up in the same
 * list the careers pages use, so every request shares one query shape and a
 * made-up slug costs no extra Contentful call (an invalid one costs none).
 *
 * @param {unknown} slug Untrusted: comes straight from the URL.
 * @returns {Promise<import("../../constants/jobs").Job | null>}
 * @throws {import("../contentful/deliveryClient").ContentfulDeliveryError}
 */
export const getJobBySlug = async (slug) => {
  if (typeof slug !== "string" || !SLUG_PATTERN.test(slug)) return null;

  const jobs = await listJobs();
  return jobs.find((job) => job.slug === slug) ?? null;
};
