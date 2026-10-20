import React from "react";
import {
  Aside,
  Label,
  RailLink,
  RailName,
  RailCount,
  Divider,
  Footnote,
} from "./index.styled";
import { SERVICE_CATEGORY_ICONS } from "../../../constants/serviceCategories";

/**
 * Sticky "jump to" rail beside the capability list. `activeSlug` is owned by
 * the page so the rail and the group spines highlight together.
 *
 * @param {{ groups: object[]; activeSlug: string | null }} props
 */
const JumpRail = ({ groups, activeSlug }) => (
  <Aside aria-label="Jump to a service category">
    <Label>JUMP TO</Label>
    {groups.map((group) => {
      const active = group.slug === activeSlug;
      return (
        <RailLink
          key={group.slug}
          href={`#${group.slug}`}
          $active={active}
          aria-current={active ? "true" : undefined}
        >
          <svg
            viewBox="0 0 18 18"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={SERVICE_CATEGORY_ICONS[group.slug]} />
          </svg>
          <RailName>{group.title}</RailName>
          <RailCount $active={active}>{group.items.length}</RailCount>
        </RailLink>
      );
    })}
    <Divider />
    <Footnote>
      Not sure where you fit?
      <br />
      <a href="#contact">Ask an engineer →</a>
    </Footnote>
  </Aside>
);

export default JumpRail;
