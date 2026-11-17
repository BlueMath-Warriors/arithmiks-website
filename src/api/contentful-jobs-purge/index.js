import { verifyContentfulWebhook } from "../util/contentful.js";
import { purgeJobsCache } from "../../server/jobs/purgeJobsCache.js";

/**
 * Called by a Contentful webhook (publish / unpublish / delete of a Job
 * entry). The body is never read: any job change just means "forget the
 * cached careers pages", so nothing in it needs trusting or parsing.
 */
export default async function contentfulJobsPurgeHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  if (!verifyContentfulWebhook(req)) {
    return res.status(401).json({ success: false, error: "Invalid webhook secret." });
  }

  try {
    await purgeJobsCache();
    return res.status(200).json({ success: true, message: "Careers cache purged." });
  } catch (error) {
    console.error("Failed to purge the careers cache", error);
    return res.status(500).json({
      success: false,
      error: "Failed to purge the careers cache.",
      detail: error.message,
    });
  }
}
