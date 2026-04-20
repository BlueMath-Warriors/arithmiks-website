import React from "react";
import { Link } from "gatsby";
import {
  Section,
  SectionInner,
  SectionHeading,
  RelatedGrid,
  RelatedCard,
  ComingSoonPill,
} from "./index.styled";
import { TOOL_ROUTES, toolPath } from "../../constants/toolRoutes";

/**
 * @param {{ currentSlug?: string }} props
 */
const RelatedTools = ({ currentSlug }) => {
  const others = TOOL_ROUTES.filter((t) => t.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <Section>
      <SectionInner>
        <SectionHeading>More free tools</SectionHeading>
        <RelatedGrid>
          {others.map((tool) => {
            const isLive = tool.status === "live";
            const cardProps = isLive
              ? { as: Link, to: toolPath(tool.slug) }
              : { as: "div", role: "group", "aria-disabled": true };
            return (
              <RelatedCard key={tool.slug} {...cardProps}>
                <h3>
                  {tool.label}
                  {!isLive && <ComingSoonPill>Coming soon</ComingSoonPill>}
                </h3>
                <p>{tool.tagline}</p>
              </RelatedCard>
            );
          })}
        </RelatedGrid>
      </SectionInner>
    </Section>
  );
};

export default RelatedTools;
