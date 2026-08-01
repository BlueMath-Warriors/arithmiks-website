import { dump as dumpYaml } from "js-yaml";
import { slugify } from "../util/index.js";
import { commitFile } from "../util/github.js";
import {
  verifyContentfulWebhook,
  getEntryId,
  fetchResolvedEntry,
  resolveLink,
  resolveAssetUrl,
} from "../util/contentful.js";
import { CATEGORIES } from "../../utils/blog.js";

const VALID_CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug).filter((slug) => slug !== "all");

/**
 * Contentful posts with its own vendor content type
 * (`application/vnd.contentful.management.v1+json`), which the default JSON
 * body parser ignores — leaving `req.body` empty. Widening the accepted types
 * makes the payload parse normally. The entry id is read from a header
 * regardless (see `getEntryId`), so this is a convenience, not a dependency.
 */
export const config = {
  bodyParser: {
    json: {
      type: ["application/json", "application/vnd.contentful.management.v1+json"],
    },
  },
};

const initials = (name) =>
  (name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "AT";

export default async function contentfulWebhookHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  if (!process.env.GITHUB_TOKEN || !process.env.CONTENTFUL_ACCESS_TOKEN || !process.env.CONTENTFUL_SPACE_ID) {
    return res.status(500).json({ success: false, error: "Server configuration error." });
  }

  if (!verifyContentfulWebhook(req)) {
    return res.status(401).json({ success: false, error: "Invalid webhook secret." });
  }

  const entryId = getEntryId(req);
  if (!entryId) {
    return res.status(400).json({ success: false, error: "Could not determine the entry id." });
  }

  try {
    const entry = await fetchResolvedEntry(entryId);
    const { fields, includes } = entry;

    const title = fields.title;
    const slug = fields.slug || slugify(title);
    const excerpt = fields.subtitle;
    const category = (fields.category || "").toLowerCase();
    const body = fields.body;
    const dateRaw = fields.publishedDate;

    const errors = [];
    if (!title) errors.push("Title is missing.");
    if (!slug) errors.push("Slug is missing.");
    if (!excerpt) errors.push("Subtitle (excerpt) is missing.");
    if (!VALID_CATEGORY_SLUGS.includes(category)) errors.push(`Category "${fields.category}" is not a recognized value.`);
    if (!body || body.trim().length < 50) errors.push("Body is missing or too short.");

    if (errors.length > 0) {
      return res.status(400).json({ success: false, error: "Validation failed.", details: errors });
    }

    const date = dateRaw ? dateRaw.slice(0, 10) : new Date().toISOString().slice(0, 10);

    const featuredImageAsset = resolveLink(fields.featuredImage, includes);
    const coverImage = resolveAssetUrl(featuredImageAsset);

    const authorEntry = resolveLink(fields.author, includes);
    const authorName = authorEntry?.fields?.name || "Arithmiks Team";
    const authorBio = authorEntry?.fields?.bio || "Written by the Arithmiks team.";
    const authorAvatarAsset = resolveLink(authorEntry?.fields?.avatar, includes);
    const authorAvatarUrl = resolveAssetUrl(authorAvatarAsset);

    const frontmatter = {
      title,
      slug,
      excerpt,
      date,
      category,
      coverGradient: "blue",
      ...(coverImage ? { coverImage } : {}),
      author: {
        name: authorName,
        avatar: authorAvatarUrl || initials(authorName),
        bio: authorBio,
      },
    };

    const mdxContent = `---\n${dumpYaml(frontmatter)}---\n\n${body.trim()}\n`;
    const mdxPath = `content/blog/${slug}.mdx`;

    await commitFile({
      path: mdxPath,
      content: Buffer.from(mdxContent, "utf-8").toString("base64"),
      message: `Publish blog post via Contentful: "${title}"`,
      author: { name: authorName, email: "cms@arithmiks.com" },
    });

    return res.status(200).json({ success: true, message: `Published "${title}".` });
  } catch (error) {
    // Surfaced deliberately: this endpoint is secret-protected and only ever
    // called by Contentful, and the message is what makes a failed publish
    // diagnosable from the webhook activity log.
    return res.status(500).json({
      success: false,
      error: "Failed to process the published entry.",
      detail: error.message,
    });
  }
}
