const fs = require("fs/promises");
const path = require("path");

const removeIfPresent = async (file) => {
  try {
    await fs.unlink(file);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
};

/**
 * Deletes the static files left behind for pages that are now rendered on request.
 *
 * Netlify restores `public/` from the previous build, and Gatsby never deletes
 * the files of a page that still exists but changed from static to
 * server-rendered. Netlify serves a static file before it considers any
 * function, so a leftover `index.html` freezes the page on its old build,
 * together with that build's scripts.
 *
 * @param {{ publicDir: string, pagePaths: string[] }} options `pagePaths` are
 *   page URLs such as "/careers/jobs".
 * @returns {Promise<string[]>} the files that were removed.
 */
const removeStaleStaticPages = async ({ publicDir, pagePaths }) => {
  const candidates = pagePaths.flatMap((pagePath) => [
    path.join(publicDir, pagePath, "index.html"),
    path.join(publicDir, "page-data", pagePath, "page-data.json"),
  ]);

  const removalResults = await Promise.all(candidates.map(removeIfPresent));
  return candidates.filter((_, index) => removalResults[index]);
};

module.exports = { removeStaleStaticPages };
