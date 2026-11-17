/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const fs = require("fs");
const path = require("path");

const WORDS_PER_MINUTE = 200;

const computeReadingTime = (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) return 1;
  const raw = fs.readFileSync(filePath, "utf8");
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---/, "");
  const wordCount = withoutFrontmatter.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
};

const slugifyHeading = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/**
 * Extracts "## " (h2) headings from the source file on disk for the blog
 * post's table-of-contents sidebar, slugified into stable anchor ids
 * (gatsby-plugin-mdx doesn't expose raw body text or heading ids via GraphQL).
 */
const computeHeadings = (filePath) => {
  if (!filePath || !fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf8");
  const withoutFrontmatter = raw.replace(/^---[\s\S]*?---/, "");
  const matches = [...withoutFrontmatter.matchAll(/^##\s+(.+)$/gm)];

  const seen = new Map();
  return matches.map(([, rawText]) => {
    const text = rawText.trim();
    const baseId = slugifyHeading(text);
    const count = seen.get(baseId) || 0;
    seen.set(baseId, count + 1);
    return { id: count === 0 ? baseId : `${baseId}-${count + 1}`, text };
  });
};

/**
 * Exposes `readingTime` and `headings` as plain queryable fields on every Mdx
 * node, computed from the source file on disk (gatsby-plugin-mdx doesn't
 * expose raw body text).
 */
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Mdx: {
      readingTime: {
        type: "Int!",
        resolve(source) {
          return computeReadingTime(source.internal && source.internal.contentFilePath);
        },
      },
      headings: {
        type: "JSON!",
        resolve(source) {
          return computeHeadings(source.internal && source.internal.contentFilePath);
        },
      },
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/blog-post.jsx");

  const result = await graphql(`
    query {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
      ) {
        nodes {
          id
          readingTime
          internal {
            contentFilePath
          }
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX blog posts", result.errors);
    return;
  }

  result.data.allMdx.nodes.forEach((node) => {
    if (!node.frontmatter.slug) {
      reporter.warn(
        `Blog post at ${node.internal.contentFilePath} is missing a frontmatter "slug" — skipping page creation.`
      );
      return;
    }

    createPage({
      path: `/blogs/${node.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        readingTime: node.readingTime,
      },
    });
  });
};
