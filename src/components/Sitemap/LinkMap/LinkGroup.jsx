import React from "react";
import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import SitemapAnchor from "./SitemapAnchor";
import { Group, GroupTitle, List, ExternalMark } from "./index.styled";

const HeadingLink = styled(SitemapAnchor)`
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  font-size: clamp(16px, 1.1vw, 18px);
  font-weight: 750;
  letter-spacing: -0.012em;
  line-height: 1.3;
  color: ${colors.text};
  transition: color 0.22s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const ItemLink = styled(SitemapAnchor)`
  display: block;
  padding: 6px 0;
  font-size: clamp(14.5px, 0.98vw, 16px);
  font-weight: 500;
  line-height: 1.45;
  color: ${colors.textMuted};
  text-wrap: pretty;
  transition: color 0.22s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const LinkGroup = ({ block }) => (
  <Group id={block.id} aria-labelledby={`h-${block.id}`}>
    <GroupTitle id={`h-${block.id}`}>
      <HeadingLink destination={block}>{block.title}</HeadingLink>
    </GroupTitle>
    <List>
      {block.links.map((link) => (
        <li key={link.label}>
          <ItemLink destination={link}>
            {link.label}
            {link.external && <ExternalMark aria-hidden="true">↗</ExternalMark>}
          </ItemLink>
        </li>
      ))}
    </List>
  </Group>
);

export default LinkGroup;
