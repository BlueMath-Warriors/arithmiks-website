import React from "react";
import { Link } from "gatsby";
import {
  Section,
  SectionInner,
  SectionHead,
  SectionEyebrow,
  SectionHeading,
  SectionSub,
  RelatedGrid,
  RelatedCard,
  ComingSoonPill,
} from "./index.styled";
import { TOOL_ROUTES, toolPath } from "../../constants/toolRoutes";
import { ToolIcon, ArrowRightIcon } from "./icons";

/**
 * @param {{ currentSlug?: string }} props
 */
const RelatedTools = ({ currentSlug }) => {
  const others = TOOL_ROUTES.filter((t) => t.slug !== currentSlug);
  if (others.length === 0) return null;

  return (
    <Section>
      <SectionInner>
        <SectionHead>
          <SectionEyebrow>More tools</SectionEyebrow>
          <SectionHeading>Explore the Arithmiks toolbox</SectionHeading>
          <SectionSub>
            Hand-built utilities from our engineering team — each one free, with
            no signup and no tracking.
          </SectionSub>
        </SectionHead>
        <RelatedGrid>
          {others.map((tool) => {
            const isLive = tool.status === "live";
            const cardProps = isLive
              ? { as: Link, to: toolPath(tool.slug) }
              : { as: "div", role: "group", "aria-disabled": true };
            return (
              <RelatedCard key={tool.slug} {...cardProps}>
                <div className="cardTop">
                  <div className="cardIcon" aria-hidden="true">
                    <ToolIcon slug={tool.slug} />
                  </div>
                </div>
                <h3>
                  {tool.label}
                  {!isLive && <ComingSoonPill>Coming soon</ComingSoonPill>}
                </h3>
                <p>{tool.tagline}</p>
                {isLive && (
                  <span className="cardCta">
                    Open tool
                    <ArrowRightIcon />
                  </span>
                )}
              </RelatedCard>
            );
          })}
        </RelatedGrid>
      </SectionInner>
    </Section>
  );
};

export default RelatedTools;
