import React from "react";
import * as containerStyles from "../../styles/global.module.css";
import Header from "../Landing/Header";
import Breadcrumbs from "../Breadcrumbs";
import Footer from "../Landing/Footer";
import FAQ from "./FAQ";
import RelatedTools from "./RelatedTools";
import {
  ToolShell,
  ToolHero,
  ToolHeroInner,
  Eyebrow,
  ToolH1,
  ToolIntro,
  TrustRow,
  TrustBadge,
  ToolBody,
  ToolBodyInner,
} from "./index.styled";

/**
 * Shared shell for every /tools/<slug> page.
 *
 * @param {object} props
 * @param {string} props.slug
 * @param {string} props.headline
 * @param {string} props.intro
 * @param {string} [props.eyebrow]
 * @param {string[]} [props.trustBadges]
 * @param {{ question: string; answer: string }[]} [props.faq]
 * @param {{ name: string; pathname: string }[]} [props.breadcrumbItems]
 * @param {React.ReactNode} props.children  The interactive tool surface.
 */
const ToolPage = ({
  slug,
  headline,
  intro,
  eyebrow = "Free online tool",
  trustBadges = [],
  faq = [],
  breadcrumbItems,
  children,
}) => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>
      <ToolShell>
        <ToolHero>
          <ToolHeroInner>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <ToolH1>{headline}</ToolH1>
            <ToolIntro>{intro}</ToolIntro>
            {trustBadges.length > 0 && (
              <TrustRow aria-label="Key features">
                {trustBadges.map((t) => (
                  <TrustBadge key={t}>{t}</TrustBadge>
                ))}
              </TrustRow>
            )}
          </ToolHeroInner>
        </ToolHero>
        <ToolBody>
          <ToolBodyInner>{children}</ToolBodyInner>
        </ToolBody>
        <FAQ faq={faq} />
        <RelatedTools currentSlug={slug} />
      </ToolShell>
      </main>
      <Footer />
    </>
  );
};

export default ToolPage;
