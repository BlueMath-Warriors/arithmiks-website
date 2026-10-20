import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getCategoryLabel } from "../../../utils/blog";
import { Shell, Eyebrow, GradientText } from "../../shared/Section/index.styled";
import {
  Section,
  Header,
  Title,
  ViewAllLink,
  Grid,
  Card,
  CoverFrame,
  Category,
  CardTitle,
  Excerpt,
  Meta,
  Author,
  Avatar,
  PublishedAt,
} from "./index.styled";

const BlogTeaser = () => {
  const data = useStaticQuery(graphql`
    query AboutBlogTeaserQuery {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 3
      ) {
        nodes {
          id
          readingTime
          frontmatter {
            title
            slug
            excerpt
            category
            coverImage
            date(formatString: "MMM D, YYYY")
            author {
              name
              avatar
            }
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;

  if (posts.length === 0) return null;

  return (
    <Section id="blog" aria-labelledby="blog-h">
      <Shell data-shell="">
        <Header>
          <div>
            <Eyebrow>From the blog</Eyebrow>
            <Title id="blog-h">
              Insights from the <GradientText>Arithmiks team</GradientText>
            </Title>
          </div>
          <ViewAllLink to="/blogs">
            View all articles <span aria-hidden="true">→</span>
          </ViewAllLink>
        </Header>

        <Grid>
          {posts.map(({ id, readingTime, frontmatter: post }) => (
            <Card key={id} to={`/blogs/${post.slug}`}>
              <CoverFrame>
                <img src={post.coverImage} alt="" loading="lazy" />
              </CoverFrame>
              <Category>{getCategoryLabel(post.category)}</Category>
              <CardTitle>{post.title}</CardTitle>
              <Excerpt>{post.excerpt}</Excerpt>
              <Meta>
                <Author>
                  <Avatar aria-hidden="true">{post.author.avatar}</Avatar>
                  {post.author.name}
                </Author>
                <PublishedAt>
                  {post.date} · {readingTime} min read
                </PublishedAt>
              </Meta>
            </Card>
          ))}
        </Grid>
      </Shell>
    </Section>
  );
};

export default BlogTeaser;
