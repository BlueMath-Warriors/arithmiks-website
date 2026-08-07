import * as React from "react";
import { useEffect, useState } from "react";
import { TocNav, TocLabel, TocList, TocLink } from "./index.styled";

// Keeps the active-heading detection clear of the fixed 90px header.
const HEADER_OFFSET = 120;

export const TableOfContents = ({ headings, containerRef }) => {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || headings.length < 2) return;

    // Headings are computed at build time (gatsby-node.js) in document
    // order, so they line up 1:1 with the rendered <h2> elements here —
    // this just stamps the matching id onto each one for anchor/scroll use.
    const nodes = Array.from(container.querySelectorAll("h2"));
    nodes.forEach((node, index) => {
      if (headings[index]) node.id = headings[index].id;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: `-${HEADER_OFFSET + 10}px 0px -70% 0px`, threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [containerRef, headings]);

  if (headings.length < 2) return null;

  const handleClick = (event, id) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <TocNav aria-label="Table of contents">
      <TocLabel>Contents</TocLabel>
      <TocList>
        {headings.map((heading) => (
          <li key={heading.id}>
            <TocLink
              href={`#${heading.id}`}
              $active={heading.id === activeId}
              onClick={(event) => handleClick(event, heading.id)}
            >
              {heading.text}
            </TocLink>
          </li>
        ))}
      </TocList>
    </TocNav>
  );
};

export default TableOfContents;
