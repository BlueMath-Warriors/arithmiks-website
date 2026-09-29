import { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { SITEMAP_BLOCKS, SITEMAP_COLUMN_COUNT, BLOG_BLOCK_ID } from "../../../constants/sitemap";

/** The sitemap's blocks, with the real blog posts filled in, split into display columns. */
export const useSitemapColumns = () => {
  const data = useStaticQuery(graphql`
    query SitemapBlogPostsQuery {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;

  return useMemo(() => {
    const blocks = SITEMAP_BLOCKS.map((block) =>
      block.id === BLOG_BLOCK_ID
        ? { ...block, links: posts.map(({ frontmatter }) => ({ label: frontmatter.title, to: `/blogs/${frontmatter.slug}` })) }
        : block
    );
    return Array.from({ length: SITEMAP_COLUMN_COUNT }, (_, column) =>
      blocks.filter((block) => block.column === column)
    );
  }, [posts]);
};

export default useSitemapColumns;
