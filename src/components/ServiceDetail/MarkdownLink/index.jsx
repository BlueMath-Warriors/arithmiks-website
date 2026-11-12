import React from "react";
import { BarLink, MobileLink, Prefix } from "./index.styled";

const DocumentGlyph = () => (
  <svg
    viewBox="0 0 16 16"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 1.5h5.5L13 5v9.5H4z" />
    <path d="M9.5 1.5V5H13M6 8.5h4M6 11h4" />
  </svg>
);

/**
 * Offers the page's Markdown rendition, for agents and crawlers that read text
 * better than markup. The design places it twice — at the end of the chapter
 * bar on wide screens, centred under the hero on phones — so the variant picks
 * the placement and each hides itself where the other shows.
 *
 * @param {{ href: string, filename: string, variant?: "bar" | "mobile" }} props
 *   href: the served path, e.g. "/services/ai-mvp-development.md";
 *   filename: what the browser saves it as, which is not always the page slug.
 */
const MarkdownLink = ({ href, filename, variant = "bar" }) => {
  const Link = variant === "mobile" ? MobileLink : BarLink;

  return (
    <Link
      href={href}
      type="text/markdown"
      rel="alternate"
      download={filename}
      title="Download this page as Markdown"
    >
      <span>
        <Prefix>AI agent?</Prefix> Read this page as Markdown
      </span>
      <DocumentGlyph />
    </Link>
  );
};

export default MarkdownLink;
