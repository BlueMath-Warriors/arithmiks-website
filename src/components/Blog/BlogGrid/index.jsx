import React, { useEffect, useMemo, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  Section,
  Header,
  Left,
  SmallTxt,
  HeaderText,
  DescriptionText,
  CategoryTabs,
  CategoryTab,
  EmptyCategoryMessage,
  BlogGridWrap,
  BlogCardLink,
  CardCoverWrap,
  CardCategoryTag,
  CardTitle,
  CardExcerpt,
  CardFooterRow,
  CardMetaText,
} from "./index.styled";
import { BlogCover } from "../CoverArt";
import { AuthorAvatar, AuthorRow } from "../AuthorBadge";
import { CATEGORIES, getCategoryLabel } from "../../../utils/blog";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const getInitialCategory = () => {
  if (typeof window === "undefined") return "all";
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("category");
  return CATEGORIES.some((c) => c.slug === requested) ? requested : "all";
};

/**
 * @param {{ titleAs?: "h1" | "h2" }} props
 */
const BlogGrid = ({ titleAs = "h1" }) => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(getInitialCategory);

  const data = useStaticQuery(graphql`
    query BlogGridQuery {
      allMdx(
        filter: { internal: { contentFilePath: { regex: "/content/blog/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          readingTime
          frontmatter {
            title
            slug
            excerpt
            category
            coverGradient
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

  const posts = useMemo(
    () =>
      data.allMdx.nodes.map((node) => ({
        id: node.id,
        readingTime: node.readingTime,
        ...node.frontmatter,
      })),
    [data]
  );

  const visiblePosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [posts, activeCategory]);

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (slug === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", slug);
    }
    window.history.replaceState({}, "", url);
  };

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".blog-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".blog-grid", start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <Header className="blog-header">
        <Left>
          <SmallTxt>Blog</SmallTxt>
          <HeaderText as={titleAs}>Insights from the Arithmiks team</HeaderText>
          <DescriptionText>
            Notes on engineering, product, and building software that lasts — from the team shipping it.
          </DescriptionText>
        </Left>
      </Header>

      <CategoryTabs role="group" aria-label="Filter posts by category">
        {CATEGORIES.map((category) => (
          <CategoryTab
            key={category.slug}
            type="button"
            $active={activeCategory === category.slug}
            aria-pressed={activeCategory === category.slug}
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.label}
          </CategoryTab>
        ))}
      </CategoryTabs>

      {visiblePosts.length === 0 && (
        <EmptyCategoryMessage>
          No posts in this category yet — check back soon.
        </EmptyCategoryMessage>
      )}

      <BlogGridWrap className="blog-grid">
        {visiblePosts.map((post) => (
          <BlogCardLink key={post.id} to={`/blogs/${post.slug}`} className="blog-card">
            <CardCoverWrap>
              <BlogCover
                gradient={post.coverGradient}
                image={post.coverImage}
                alt={post.title}
                style={{ height: "100%" }}
              />
            </CardCoverWrap>
            <CardCategoryTag>{getCategoryLabel(post.category)}</CardCategoryTag>
            <CardTitle>{post.title}</CardTitle>
            <CardExcerpt>{post.excerpt}</CardExcerpt>
            <CardFooterRow>
              <AuthorRow>
                <AuthorAvatar $size="28px" $fontSize="11px" alt={post.author.name}>
                  {post.author.avatar}
                </AuthorAvatar>
                <CardMetaText>{post.author.name}</CardMetaText>
              </AuthorRow>
              <CardMetaText>
                {post.date} · {post.readingTime} min read
              </CardMetaText>
            </CardFooterRow>
          </BlogCardLink>
        ))}
      </BlogGridWrap>
    </Section>
  );
};

export default BlogGrid;
