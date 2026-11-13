import React from "react";
import { BandShell } from "../../shared/Band/index.styled";
import MarkdownLink from "../MarkdownLink";
import { Bar, Links, ChapterLink } from "./index.styled";

/**
 * In-page section links under the hero. It pins below the header, and the
 * link for whichever section is being read is highlighted.
 *
 * @param {{ chapters: { id: string, label: string }[]; activeId: string; stuck: boolean;
 *           barRef: React.Ref<HTMLElement>,
 *           markdown?: { href: string, filename: string } }} props
 *   markdown: when the page serves a Markdown rendition, the link to it sits at
 *   the end of the bar. The hero carries the phone-sized variant.
 */
const ChapterNav = ({ chapters, activeId, stuck, barRef, markdown }) => (
  <Bar ref={barRef} $stuck={stuck} aria-label="On this page" data-chapter-bar="">
    <BandShell style={{ height: "100%" }}>
      <Links $bleed={Boolean(markdown)}>
        {chapters.map((chapter) => (
          <ChapterLink
            key={chapter.id}
            href={`#${chapter.id}`}
            $active={chapter.id === activeId}
            aria-current={chapter.id === activeId ? "location" : undefined}
          >
            {chapter.label}
          </ChapterLink>
        ))}
        {markdown && <MarkdownLink href={markdown.href} filename={markdown.filename} />}
      </Links>
    </BandShell>
  </Bar>
);

export default ChapterNav;
