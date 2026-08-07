import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../../Landing/index.styled";

export const Article = styled.article`
  background-color: #fff;
  padding-top: 56px;
  padding-bottom: 40px;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding-top: 32px;
  }
`;

export const CoverSection = styled.div`
  width: 1120px;
  margin: 0 auto 48px;
  aspect-ratio: 21 / 8;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    aspect-ratio: 16 / 8;
    margin-bottom: 40px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
    aspect-ratio: 16 / 10;
    border-radius: 14px;
    margin-bottom: 32px;
  }

  /* A real image dictates its own height instead of being cropped/letterboxed
     to a fixed ratio — only the flat-gradient fallback needs a forced ratio. */
  &:has(img) {
    aspect-ratio: auto;
  }
`;

export const ContentColumn = styled.div`
  width: 1120px;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const CategoryPill = styled.span`
  display: inline-block;
  max-width: 700px;
  padding: 6px 14px;
  background: #f0f5ff;
  border-radius: 100px;
  color: #1355ff;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  max-width: 700px;
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 28px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 30px;
    letter-spacing: -0.5px;
    margin-bottom: 20px;
  }
`;

export const BylineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 700px;
  padding-bottom: 28px;
  margin-bottom: 32px;
  border-bottom: 1px solid #e7eaee;
`;

export const BylineMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const BylineName = styled.span`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
`;

export const BylineSub = styled.span`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
`;

export const ArticleBody = styled.div`
  max-width: 700px;
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8;

  p {
    margin: 0 0 28px;
  }

  h2 {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.4px;
    color: #1d1d1f;
    margin: 56px 0 20px;
  }

  h3 {
    font-family: Poppins;
    font-size: 23px;
    font-weight: 700;
    line-height: 1.35;
    color: #1d1d1f;
    margin: 40px 0 16px;
  }

  ul,
  ol {
    margin: 0 0 28px;
    padding-left: 26px;
  }

  li {
    margin-bottom: 10px;
  }

  blockquote {
    margin: 40px 0;
    padding: 2px 0 2px 24px;
    border-left: 3px solid #1355ff;
    color: #42526b;
    font-style: italic;
    font-size: 21px;
    line-height: 1.6;

    p {
      margin: 0;
    }
  }

  code {
    background: #f5f5f7;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "SFMono-Regular", Menlo, Consolas, monospace;
    font-size: 0.85em;
  }

  pre {
    background: #061c3d;
    color: #e6eefc;
    padding: 24px;
    border-radius: 12px;
    overflow-x: auto;
    margin: 8px 0 32px;
  }

  pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 14px;
  }

  img {
    max-width: 100%;
    border-radius: 12px;
    margin: 8px 0 32px;
    display: block;
  }

  a {
    color: #1355ff;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  strong {
    font-weight: 700;
  }

  hr {
    border: none;
    border-top: 1px solid #e7eaee;
    margin: 48px 0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;

    h2 {
      font-size: 24px;
      margin: 40px 0 16px;
    }
    h3 {
      font-size: 20px;
      margin: 32px 0 12px;
    }
    blockquote {
      font-size: 17px;
      padding-left: 18px;
    }
  }
`;

export const BodyGrid = styled.div`
  display: ${({ $hasToc }) => ($hasToc ? "grid" : "block")};
  grid-template-columns: 240px 1fr;
  gap: 64px;
  align-items: start;

  ${ArticleBody} {
    max-width: ${({ $hasToc }) => ($hasToc ? "none" : "700px")};
  }

  @media screen and (max-width: ${breakpoints.large}) {
    display: block;

    ${ArticleBody} {
      max-width: 700px;
    }
  }
`;

export const RelatedSection = styled.div`
  width: 1120px;
  margin: 88px auto 0;
  padding-top: 56px;
  border-top: 1px solid #e7eaee;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
    margin-top: 56px;
    padding-top: 40px;
  }
`;

export const RelatedHeading = styled.h2`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.4px;
  margin-bottom: 32px;
  text-align: center;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media screen and (max-width: ${breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const RelatedCardCover = styled.div`
  aspect-ratio: 16 / 10;
  margin-bottom: 16px;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* A real image dictates its own height instead of being cropped/letterboxed
     to a fixed ratio — only the flat-gradient fallback needs a forced ratio. */
  &:has(img) {
    aspect-ratio: auto;
  }
`;

export const RelatedCardCategoryTag = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background: #f0f5ff;
  border-radius: 6px;
  color: #1355ff;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 8px;
  width: fit-content;
`;

export const RelatedCardTitle = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
  transition: color 0.2s ease;
`;

export const RelatedCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  border-radius: 14px;

  &:hover ${RelatedCardCover} {
    transform: translateY(-4px);
  }

  &:hover ${RelatedCardTitle} {
    color: #1355ff;
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 6px;
  }
`;

export const RelatedCardMeta = styled.span`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
`;
