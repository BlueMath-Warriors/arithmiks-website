import * as React from "react";
import { graphql } from "gatsby";
import * as containerStyles from "../styles/global.module.css";
import Header from "../components/Landing/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUs from "../components/Landing/Contact-Us";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";
import { CoverArt } from "../components/Blog/CoverArt";
import { AuthorAvatar } from "../components/Blog/AuthorBadge";
import { getCategoryLabel } from "../utils/blog";
import {
  Article,
  CoverSection,
  ContentColumn,
  CategoryPill,
  Title,
  BylineRow,
  BylineMeta,
  BylineName,
  BylineSub,
  ArticleBody,
  RelatedSection,
  RelatedHeading,
  RelatedGrid,
  RelatedCardLink,
  RelatedCardCover,
  RelatedCardCategoryTag,
  RelatedCardTitle,
  RelatedCardMeta,
} from "../components/Blog/BlogPost/index.styled";

const BlogPostTemplate = ({ data, pageContext, children }) => {
  const { frontmatter } = data.mdx;
  const relatedPosts = data.relatedPosts.nodes;
  const readingTime = pageContext.readingTime;

  const breadcrumbItems = [
    { name: "Home", pathname: "/" },
    { name: "Blog", pathname: "/blogs" },
    { name: frontmatter.title, pathname: `/blogs/${frontmatter.slug}` },
  ];

  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <Breadcrumbs items={breadcrumbItems} />

      <Article>
        <CoverSection>
          <CoverArt $gradient={frontmatter.coverGradient} $radius="0" style={{ height: "100%" }} />
        </CoverSection>

        <ContentColumn>
          <CategoryPill>{getCategoryLabel(frontmatter.category)}</CategoryPill>
          <Title>{frontmatter.title}</Title>

          <BylineRow>
            <AuthorAvatar $size="48px" $fontSize="16px">
              {frontmatter.author.avatar}
            </AuthorAvatar>
            <BylineMeta>
              <BylineName>{frontmatter.author.name}</BylineName>
              <BylineSub>{frontmatter.author.bio}</BylineSub>
              <BylineSub>
                {frontmatter.date} · {readingTime} min read
              </BylineSub>
            </BylineMeta>
          </BylineRow>

          <ArticleBody>{children}</ArticleBody>
        </ContentColumn>

        {relatedPosts.length > 0 && (
          <RelatedSection>
            <RelatedHeading>More from Arithmiks</RelatedHeading>
            <RelatedGrid>
              {relatedPosts.map((post) => (
                <RelatedCardLink key={post.id} to={`/blogs/${post.frontmatter.slug}`}>
                  <RelatedCardCover>
                    <CoverArt $gradient={post.frontmatter.coverGradient} style={{ height: "100%" }} />
                  </RelatedCardCover>
                  <RelatedCardCategoryTag>
                    {getCategoryLabel(post.frontmatter.category)}
                  </RelatedCardCategoryTag>
                  <RelatedCardTitle>{post.frontmatter.title}</RelatedCardTitle>
                  <RelatedCardMeta>
                    {post.frontmatter.date} · {post.readingTime} min read
                  </RelatedCardMeta>
                </RelatedCardLink>
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
      </Article>

      <ContactUs />
      <Footer />
    </>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => {
  const { frontmatter } = data.mdx;
  const breadcrumbItems = [
    { name: "Home", pathname: "/" },
    { name: "Blog", pathname: "/blogs" },
    { name: frontmatter.title, pathname: `/blogs/${frontmatter.slug}` },
  ];

  return (
    <SEO
      title={`${frontmatter.title} - Arithmiks Blog`}
      description={frontmatter.excerpt}
      pathname={`/blogs/${frontmatter.slug}`}
      breadcrumbItems={breadcrumbItems}
      article
      hideImage
    />
  );
};

export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        excerpt
        category
        coverGradient
        date(formatString: "MMMM D, YYYY")
        author {
          name
          avatar
          bio
        }
      }
    }
    relatedPosts: allMdx(
      filter: {
        id: { ne: $id }
        internal: { contentFilePath: { regex: "/content/blog/" } }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        id
        readingTime
        frontmatter {
          title
          slug
          category
          coverGradient
          date(formatString: "MMM D, YYYY")
        }
      }
    }
  }
`;
