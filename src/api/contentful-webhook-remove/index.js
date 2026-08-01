import { verifyContentfulWebhook, getEntryId } from "../util/contentful.js";
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

  // Contentful sends a stripped payload for Unpublish/Delete events —
  // `sys.type: "DeletedEntry"` with no `fields` object at all — so slug or
  // title can't be read from the body here (confirmed against production:
  // the body genuinely has no fields on these two event types). The entry
  // id, read from the X-Contentful-CRN header regardless of body shape, is
  // the only identifier every event type carries. Posts are committed to
  // GitHub keyed by entry id (see contentful-webhook), specifically so this
  // lookup never depends on data this payload doesn't have.
  const entryId = getEntryId(req);

  if (!entryId) {
    return res.status(400).json({ success: false, error: "Could not determine the entry id." });
  }

  try {
    const result = await deleteFile({
      path: `content/blog/${entryId}.mdx`,
      message: `Remove blog post via Contentful (entry ${entryId})`,
      author: { name: "Arithmiks CMS", email: "cms@arithmiks.com" },
    });

    return res.status(200).json({
      success: true,
      message: result.deleted
        ? `Removed post ${entryId} from the site.`
        : `No live file found for entry ${entryId} — nothing to remove.`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Failed to remove the post.",
      detail: error.message,
    });
  }
}
