import { verifyIdentity } from "../util/index.js";
import { OWNER, REPO, githubRequest, submissionMarker } from "../util/github.js";

const statusFor = (pr) => {
  if (pr.merged_at) return "published";
  if (pr.state === "closed") return "rejected";
  return "pending";
};

export default async function myBlogSubmissionsHandler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  try {
    if (!process.env.GITHUB_TOKEN) {
      return res.status(500).json({ success: false, error: "Server configuration error." });
    }

    const user = await verifyIdentity(req);
    if (!user) {
      return res.status(401).json({ success: false, error: "You must be logged in." });
    }

    const marker = submissionMarker(user.email);

    const prs = await githubRequest(
      `/repos/${OWNER}/${REPO}/pulls?state=all&per_page=100&sort=created&direction=desc`
    );

    const submissions = prs
      .filter((pr) => typeof pr.body === "string" && pr.body.includes(marker))
      .map((pr) => ({
        title: pr.title.replace(/^Blog submission:\s*/, ""),
        status: statusFor(pr),
        url: pr.html_url,
        createdAt: pr.created_at,
      }));

    return res.status(200).json({ success: true, submissions });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Could not load your submissions." });
  }
}
