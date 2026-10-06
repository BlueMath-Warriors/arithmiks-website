import React from "react";
import { Shell } from "../../shared/Section/index.styled";
import { Bar, Links, ChapterLink } from "./index.styled";

/**
 * In-page section links under the hero. It pins below the header, and the
 * link for whichever section is being read is highlighted.
 *
 * @param {{ chapters: { id: string, label: string }[]; activeId: string; stuck: boolean;
 *           barRef: React.Ref<HTMLElement> }} props
 */
const ChapterNav = ({ chapters, activeId, stuck, barRef }) => (
  <Bar ref={barRef} $stuck={stuck} aria-label="On this page">
    <Shell style={{ height: "100%" }}>
      <Links>
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
      </Links>
    </Shell>
  </Bar>
);

export default ChapterNav;
