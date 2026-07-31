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

/**
 * Exposes `readingTime` as a plain queryable field on every Mdx node, computed
 * from the source file on disk (gatsby-plugin-mdx doesn't expose raw body text).
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
    },
  });
};

/**
 * @uiw/react-md-editor touches browser-only globals at import time, which
 * breaks Gatsby's server-side HTML build ("window is not defined"). It's only
 * ever rendered client-side (see the `mounted` guard in WritePostForm), so
 * it's safe to strip out entirely during the SSR/HTML build stages.
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@uiw[/\\]react-md-editor/,
            use: "null-loader",
          },
        ],
      },
    });
  }
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
