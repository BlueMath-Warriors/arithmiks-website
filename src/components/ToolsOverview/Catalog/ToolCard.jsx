import React from "react";
import { toolPath } from "../../../constants/toolRoutes";
import GradientMark from "../../shared/GradientMark";
import { Item, Body, Name, NameRow, NameLink, SoonPill, Description } from "./index.styled";

const ExternalArrow = () => (
  <svg
    viewBox="0 0 16 16"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5.5 4h6.5v6.5M12 4 4.5 11.5" />
  </svg>
);

/**
 * One tool in the catalogue: a live tool links to its page in a new tab, an
 * upcoming one shows a "Coming soon" pill instead.
 *
 * @param {{ tool: (typeof import("../../../constants/toolCatalog").TOOL_CATALOG)[number] }} props
 */
const ToolCard = ({ tool }) => (
  <Item>
    <GradientMark id={`tool-${tool.key}`} rib={tool.mark.rib} sol={tool.mark.sol} />
    <Body>
      {tool.slug ? (
        <Name>
          <NameLink
            href={toolPath(tool.slug)}
            target="_blank"
            rel="noopener"
            aria-label={`${tool.name} (opens in a new tab)`}
          >
            {tool.name}
            <ExternalArrow />
          </NameLink>
        </Name>
      ) : (
        <NameRow>
          <Name>{tool.name}</Name>
          <SoonPill>Coming soon</SoonPill>
        </NameRow>
      )}
      <Description>{tool.description}</Description>
    </Body>
  </Item>
);

export default ToolCard;
