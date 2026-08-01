import { verifyContentfulWebhook, readField } from "../util/contentful.js";
import { deleteFile } from "../util/github.js";

/**
 * Widen the accepted body content type, same reason as the publish webhook:
 * Contentful posts as `application/vnd.contentful.management.v1+json`, which
 * the default parser doesn't recognize as JSON.
 */
export const config = {
  bodyParser: {
    json: {
      type: ["application/json", "application/vnd.contentful.management.v1+json"],
    },
  },
};

export default async function contentfulRemoveHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  if (!process.env.GITHUB_TOKEN) {
    return res.status(500).json({ success: false, error: "Server configuration error." });
  }

  if (!verifyContentfulWebhook(req)) {
    return res.status(401).json({ success: false, error: "Invalid webhook secret." });
  }

  // Read straight from the webhook payload, not a fresh API fetch — an
  // unpublished or deleted entry may no longer be resolvable via the
  // Delivery API at all, so this can't depend on re-fetching it. The
  // payload carries the entry's field snapshot at the time of the action
  // regardless of what happens to the entry afterward.
  const fields = req.body?.fields;
  const slug = readField(fields, ["slug"], { asString: true });
  const title = readField(fields, ["title"], { asString: true }) || "(untitled)";

  if (!slug) {
    return res.status(400).json({ success: false, error: "Could not determine the post's slug." });
  }

  try {
    const result = await deleteFile({
      path: `content/blog/${slug}.mdx`,
      message: `Remove blog post via Contentful: "${title}"`,
      author: { name: "Arithmiks CMS", email: "cms@arithmiks.com" },
    });

    return res.status(200).json({
      success: true,
      message: result.deleted
        ? `Removed "${title}" from the site.`
        : `No live file found for "${title}" — nothing to remove.`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to remove the post.",
      detail: error.message,
    });
  }
}
