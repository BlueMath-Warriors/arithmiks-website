import { dump as dumpYaml } from "js-yaml";
import { sanitizeInput, slugify, verifyIdentity } from "../util/index.js";
import { OWNER, REPO, BASE_BRANCH, githubRequest, submissionMarker } from "../util/github.js";
import { CATEGORIES } from "../../utils/blog.js";

const VALID_CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug).filter((slug) => slug !== "all");
const MAX_COVER_IMAGE_BYTES = 4 * 1024 * 1024; // 4MB
const ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "A";

export default async function blogSubmitHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  try {
    if (!process.env.GITHUB_TOKEN) {
      return res.status(500).json({ success: false, error: "Server configuration error." });
    }

    const user = await verifyIdentity(req);
    if (!user) {
      return res.status(401).json({ success: false, error: "You must be logged in to submit a post." });
    }

    const title = sanitizeInput(req.body.title).slice(0, 150);
    const excerpt = sanitizeInput(req.body.excerpt).slice(0, 300);
    const category = sanitizeInput(req.body.category);
    const body = typeof req.body.body === "string" ? req.body.body.trim() : "";
    const coverImageBase64 = typeof req.body.coverImageBase64 === "string" ? req.body.coverImageBase64 : null;

    const errors = [];
    if (!title) errors.push("Title is required.");
    if (!excerpt) errors.push("Excerpt is required.");
    if (!VALID_CATEGORY_SLUGS.includes(category)) errors.push("A valid category is required.");
    if (!body || body.length < 100) errors.push("Post body must be at least 100 characters.");

    let imageExt = null;
    if (coverImageBase64) {
      const match = /^data:image\/(\w+);base64,(.+)$/.exec(coverImageBase64);
      if (!match) {
        errors.push("Cover image is not a valid image file.");
      } else {
        imageExt = match[1].toLowerCase() === "jpeg" ? "jpg" : match[1].toLowerCase();
        if (!ALLOWED_IMAGE_EXTENSIONS.includes(imageExt)) {
          errors.push("Cover image must be a JPG, PNG, or WebP file.");
        }
        const approxBytes = (match[2].length * 3) / 4;
        if (approxBytes > MAX_COVER_IMAGE_BYTES) {
          errors.push("Cover image must be smaller than 4MB.");
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({ success: false, error: "Validation failed.", details: errors });
    }

    const authorName = user.user_metadata?.full_name || user.email.split("@")[0];
    const submitterId = user.email;
    const date = new Date().toISOString().slice(0, 10);
    const uniqueSuffix = Date.now().toString(36);
    const slug = `${slugify(title)}-${uniqueSuffix}`;
    const branchName = `blog-submission/${slugify(submitterId.split("@")[0])}-${uniqueSuffix}`;

    // 1. Base branch tip SHA
    const baseRef = await githubRequest(`/repos/${OWNER}/${REPO}/git/ref/heads/${BASE_BRANCH}`);
    const baseSha = baseRef.object.sha;

    // 2. New branch off it
    await githubRequest(`/repos/${OWNER}/${REPO}/git/refs`, {
      method: "POST",
      body: JSON.stringify({ ref: `refs/heads/${branchName}`, sha: baseSha }),
    });

    // 3. Cover image (optional)
    let coverImagePath = null;
    if (coverImageBase64 && imageExt) {
      coverImagePath = `static/blog/covers/${slug}.${imageExt}`;
      const base64Data = coverImageBase64.split(",")[1];
      await githubRequest(`/repos/${OWNER}/${REPO}/contents/${coverImagePath}`, {
        method: "PUT",
        body: JSON.stringify({
          message: `Add cover image for "${title}"`,
          content: base64Data,
          branch: branchName,
        }),
      });
    }

    // 4. The post itself
    const frontmatter = {
      title,
      slug,
      excerpt,
      date,
      category,
      coverGradient: "blue",
      ...(coverImagePath ? { coverImage: `/${coverImagePath.replace(/^static\//, "")}` } : {}),
      author: {
        name: authorName,
        avatar: initials(authorName),
        bio: "Community contributor at Arithmiks.",
      },
    };
    const mdxContent = `---\n${dumpYaml(frontmatter)}---\n\n${body}\n`;
    const mdxPath = `content/blog/${slug}.mdx`;

    await githubRequest(`/repos/${OWNER}/${REPO}/contents/${mdxPath}`, {
      method: "PUT",
      body: JSON.stringify({
        message: `New blog post submission: "${title}"`,
        content: Buffer.from(mdxContent, "utf-8").toString("base64"),
        branch: branchName,
      }),
    });

    // 5. Open the PR
    const prBody = [
      "A new blog post was submitted through the site for review.",
      "",
      `**Title:** ${title}`,
      `**Submitted by:** ${authorName} (${submitterId})`,
      "",
      "Merging this PR will publish the post live.",
      "",
      submissionMarker(submitterId),
    ].join("\n");

    const pr = await githubRequest(`/repos/${OWNER}/${REPO}/pulls`, {
      method: "POST",
      body: JSON.stringify({
        title: `Blog submission: ${title}`,
        head: branchName,
        base: BASE_BRANCH,
        body: prBody,
      }),
    });

    return res.status(200).json({
      success: true,
      message: "Your post has been submitted for review. You'll see it under \"My Submissions\" once it's approved and live.",
      prUrl: pr.html_url,
      prNumber: pr.number,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Something went wrong submitting your post. Please try again.",
    });
  }
}
