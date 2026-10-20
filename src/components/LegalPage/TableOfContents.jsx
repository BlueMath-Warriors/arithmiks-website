import React from "react";
import { Toc, TocHeading, TocList, TocLink, TocNumber } from "./index.styled";

/** Sticky "Contents" rail; highlights the section being read and jumps on click. */
const TableOfContents = ({ sections, activeId, onSelect }) => (
  <Toc aria-label="On this page">
    <TocHeading>Contents</TocHeading>
    <TocList>
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <li key={section.id}>
            <TocLink
              href={`#${section.id}`}
              $active={active}
              aria-current={active ? "true" : undefined}
              onClick={() => onSelect(section.id)}
            >
              <TocNumber $active={active} aria-hidden="true">
                {section.number}
              </TocNumber>
              <span>{section.title}</span>
            </TocLink>
          </li>
        );
      })}
    </TocList>
  </Toc>
);

export default TableOfContents;
