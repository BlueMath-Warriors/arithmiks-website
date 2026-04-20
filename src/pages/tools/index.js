import * as React from "react";
import { Link } from "gatsby";
import Header from "../../components/Landing/Header";
import Footer from "../../components/Landing/Footer";
import * as containerStyles from "../../styles/global.module.css";
import { SEO } from "../../components/seo";
import { TOOL_ROUTES, toolPath } from "../../constants/toolRoutes";
import { ToolIcon, ArrowRightIcon } from "../../components/ToolPage/icons";
import {
  ToolShell,
  ToolHero,
  ToolHeroInner,
  Eyebrow,
  ToolH1,
  ToolIntro,
  Section,
  SectionInner,
  RelatedGrid,
  RelatedCard,
  ComingSoonPill,
} from "../../components/ToolPage/index.styled";

const liveCount = TOOL_ROUTES.filter((t) => t.status === "live").length;

const ToolsIndexPage = () => (
  <>
    <div className={containerStyles.header_div}>
      <Header white={true} fixed={true} />
    </div>
    <ToolShell>
      <ToolHero>
        <ToolHeroInner>
          <Eyebrow>The Arithmiks toolbox</Eyebrow>
          <ToolH1>Free online tools, built by our engineering team</ToolH1>
          <ToolIntro>
            Practical utilities you can reach for when you need them — {liveCount}{" "}
            available today, with more rolling out every month. No signup, no
            tracking, nothing to install.
          </ToolIntro>
        </ToolHeroInner>
      </ToolHero>
      <Section alt>
        <SectionInner>
          <RelatedGrid>
            {TOOL_ROUTES.map((tool) => {
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
    </ToolShell>
    <Footer />
  </>
);

export default ToolsIndexPage;

export const Head = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free online tools by Arithmiks",
    itemListElement: TOOL_ROUTES.filter((t) => t.status === "live").map(
      (tool, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: tool.label,
        url: `https://arithmiks.com${toolPath(tool.slug)}`,
      })
    ),
  };

  return (
    <SEO
      title="Free Online Tools - Arithmiks"
      description="Free online tools from Arithmiks: virus scanner, and more on the way. Practical utilities built by our engineering team — no signup, no tracking."
      pathname="/tools"
      breadcrumbItems={[
        { name: "Home", pathname: "/" },
        { name: "Tools", pathname: "/tools" },
      ]}
      extraSchemas={[itemListSchema]}
    />
  );
};
