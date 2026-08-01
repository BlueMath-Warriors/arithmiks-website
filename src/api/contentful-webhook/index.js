import { dump as dumpYaml } from "js-yaml";
import { slugify } from "../util/index.js";
import { commitFile } from "../util/github.js";
import {
  verifyContentfulWebhook,
  getEntryId,
  fetchResolvedEntry,
  readField,
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

/**
 * A stand-in excerpt taken from the opening prose of the post, used only when
 * no excerpt field is found. A missing excerpt is a card-preview nicety — it
 * should never be the thing that blocks a finished post from publishing.
 */
const deriveExcerpt = (markdown) => {
  const firstProse = (markdown || "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .find((block) => block && !/^(#|>|```|[-*+]\s|\d+\.\s)/.test(block));
  if (!firstProse) return null;

  const plain = firstProse
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links/images -> their text
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!plain) return null;

  return plain.length > 200 ? `${plain.slice(0, 197).trimEnd()}…` : plain;
};

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
    const { fields, includes, unresolvableLinkErrors } = entry;
    // Seeded from Contentful's own `errors` array rather than only inferred
    // after the fact — see fetchResolvedEntry for why this is the reliable
    // signal (an unresolvable link is silent otherwise: 200 OK, value absent).
    const warnings = [...unresolvableLinkErrors];

    const title = readField(fields, ["title"], { asString: true });
    const rawCategory = readField(fields, ["category"], { asString: true });
    const body = readField(fields, ["body", "bodyText", "markdownBody", "content"], {
      asString: true,
    });
    const excerpt =
      readField(fields, ["subtitle", "shortDescription", "excerpt", "description"], {
        asString: true,
      }) || deriveExcerpt(body);
    const dateRaw = readField(fields, ["publishedDate", "date", "publicationDate"], {
      asString: true,
    });
    const slug = readField(fields, ["slug"], { asString: true }) || slugify(title);
    const category = (rawCategory || "").toLowerCase();

    const featuredImageLink = readField(fields, ["featuredImage", "coverImage", "image"]);
    const coverImage = resolveAssetUrl(resolveLink(featuredImageLink, includes));

    const errors = [];
    if (!title) errors.push("Title is missing.");
    if (!slug) errors.push("Slug is missing.");
    if (!excerpt) errors.push("Subtitle (excerpt) is missing.");
    if (!VALID_CATEGORY_SLUGS.includes(category)) {
      errors.push(`Category "${rawCategory}" is not one of: ${VALID_CATEGORY_SLUGS.join(", ")}.`);
    }
    if (!body || body.trim().length < 50) errors.push("Body is missing or too short.");
    // A post without a cover image is incomplete, not just cosmetically bare
    // — every published post is required to carry one.
    if (!coverImage) {
      errors.push(
        featuredImageLink
          ? "Featured image is set but couldn't be resolved — check that the image asset itself is Published, not just the post."
          : "Featured image is required."
      );
    }

    if (errors.length > 0) {
      // `availableFields` makes any remaining field-id mismatch a one-glance
      // fix rather than another round of guessing.
      return res.status(400).json({
        success: false,
        error: "Validation failed.",
        details: errors,
        availableFields: Object.keys(fields || {}),
      });
    }

    const date = dateRaw ? dateRaw.slice(0, 10) : new Date().toISOString().slice(0, 10);

    const authorEntry = resolveLink(readField(fields, ["author"]), includes);
    if (readField(fields, ["author"]) && !authorEntry) {
      warnings.push("Author is set but couldn't be resolved — check that the author entry itself is Published.");
    }
    const authorFields = authorEntry?.fields;
    const authorName =
      readField(authorFields, ["name", "fullName"], { asString: true }) || "Arithmiks Team";
    const authorBio =
      readField(authorFields, ["bio", "biography", "description"], { asString: true }) ||
      "Written by the Arithmiks team.";
    const authorAvatarLink = readField(authorFields, ["avatar", "image", "photo"]);
    const authorAvatarUrl = resolveAssetUrl(resolveLink(authorAvatarLink, includes));
    if (authorAvatarLink && !authorAvatarUrl) {
      warnings.push(
        "Author avatar is set but couldn't be resolved — check that the avatar image asset itself is Published."
      );
    }

    const frontmatter = {
      title,
      slug,
      excerpt,
      date,
      category,
      coverGradient: "blue",
      coverImage,
      author: {
        name: authorName,
        avatar: authorAvatarUrl || initials(authorName),
        bio: authorBio,
      },
      // Not read by the site — kept for traceability back to the source
      // entry when debugging a specific post's file.
      contentfulId: entryId,
    };

    const mdxContent = `---\n${dumpYaml(frontmatter)}---\n\n${body.trim()}\n`;
    // Keyed by entry id, not slug: the id is the only identifier Contentful
    // guarantees on every event type, including Unpublish/Delete (see
    // contentful-webhook-remove) — and it stays stable even if the slug is
    // edited later, so an edited post always overwrites the same file
    // instead of leaving the old slug-named file behind as an orphan.
    const mdxPath = `content/blog/${entryId}.mdx`;

    await commitFile({
      path: mdxPath,
      content: Buffer.from(mdxContent, "utf-8").toString("base64"),
      message: `Publish blog post via Contentful: "${title}"`,
      author: { name: authorName, email: "cms@arithmiks.com" },
    });

    return res.status(200).json({
      success: true,
      message: `Published "${title}".`,
      ...(warnings.length > 0 ? { warnings } : {}),
    });
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
