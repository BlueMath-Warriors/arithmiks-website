const GITHUB_API = "https://api.github.com";
const OWNER = "BlueMath-Warriors";
const REPO = "arithmiks-website";
const BASE_BRANCH = "main";
const SUBMISSION_MARKER_PREFIX = "<!-- submitted-by:";

/** Thin wrapper around GitHub's REST API using the repo-scoped bot/personal token. */
const githubRequest = async (path, options = {}) => {
  const response = await fetch(`${GITHUB_API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API ${path} failed (${response.status}): ${body}`);
  }

  if (response.status === 204) return null;
  return response.json();
};

/** Hidden HTML-comment marker embedded in a submission PR's body, used to look
 * up "my submissions" later without needing our own database. */
const submissionMarker = (identity) => `${SUBMISSION_MARKER_PREFIX}${identity} -->`;

export { GITHUB_API, OWNER, REPO, BASE_BRANCH, githubRequest, submissionMarker, SUBMISSION_MARKER_PREFIX };
