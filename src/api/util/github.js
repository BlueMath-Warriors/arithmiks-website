const GITHUB_API = "https://api.github.com";
const OWNER = "BlueMath-Warriors";
const REPO = "arithmiks-website";
const BASE_BRANCH = "main";

/** Thin wrapper around GitHub's REST API using the repo-scoped token. */
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

/**
 * Creates or updates a file directly on the base branch (no PR — every
 * Contentful publisher is already a trusted, manually-invited account).
 * If the file already exists (e.g. re-publishing an edited post), GitHub
 * requires the current file's SHA to update it, so we look that up first.
 */
const commitFile = async ({ path, content, message, author }) => {
  let existingSha;
  try {
    const existing = await githubRequest(
      `/repos/${OWNER}/${REPO}/contents/${path}?ref=${BASE_BRANCH}`
    );
    existingSha = existing?.sha;
  } catch {
    existingSha = undefined; // file doesn't exist yet — that's fine
  }

  return githubRequest(`/repos/${OWNER}/${REPO}/contents/${path}`, {
    method: "PUT",
    body: JSON.stringify({
      message,
      content,
      branch: BASE_BRANCH,
      author,
      committer: author,
      ...(existingSha ? { sha: existingSha } : {}),
    }),
  });
};

export { GITHUB_API, OWNER, REPO, BASE_BRANCH, githubRequest, commitFile };
