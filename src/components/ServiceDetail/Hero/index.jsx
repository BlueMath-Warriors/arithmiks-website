import React from "react";
import MeshHeroBackground from "../../shared/MeshHeroBackground";
import { BandShell, EyebrowBar, PrimaryButton } from "../../shared/Band/index.styled";
import MarkdownLink from "../MarkdownLink";
import {
  Section,
  Art,
  Body,
  Copy,
  EyebrowRow,
  EyebrowText,
  Heading,
  HeadingAccent,
  Intro,
  CtaRow,
  MarkdownRow,
  SecondaryButton,
} from "./index.styled";

const ART_WIDTHS = [400, 540, 700, 1000, 1400];

/**
 * The hero art is the design's layered gradient SVG, pre-rendered to WebP per
 * page (static/services/hero/<art>-<width>.webp). Drawn live, its stacked blur
 * filters and masks took ~1.4s to paint the first frame on a throttled phone.
 * Widths are of the design's art box; each file carries extra transparent
 * margin so the blurred halo isn't clipped (see Art in index.styled).
 */
export const heroArtSrcSet = (art) =>
  ART_WIDTHS.map((width) => `/services/hero/${art}-${width}.webp ${width}w`).join(", ");
// Matches the Art box: clamp(360px, 44vw, 700px), which is 360px on phones.
export const HERO_ART_SIZES = "(max-width: 700px) 360px, min(700px, 44vw)";

/**
 * @typedef {{ label: string, href: string, glyph: string }} HeroCta
 * @param {{
 *   eyebrow: string,
 *   title: { lead: string, accent: string },
 *   intro: string[],
 *   primaryCta: HeroCta,
 *   secondaryCta: HeroCta,
 *   art: string,
 *   stackCtasOnMobile?: boolean,
 *   introMaxWidth?: string,
 *   ctaGap?: string,
 *   markdown?: { href: string, filename: string },
 *   ctaStackWidth?: number,
 *   cornerArtOnPhone?: boolean,
 *   fillMeshOnPhone?: boolean,
 * }} props
 *   markdown: the page's Markdown rendition. The chapter bar shows it on wide
 *   screens; this is the phone placement;
 *   ctaStackWidth: the viewport width (px) below which stacked CTAs stack;
 *   cornerArtOnPhone: place the art small in the top-right corner on phones;
 *   fillMeshOnPhone: stretch the background glows over the hero on phones (the
 *   AI service designs keep their desktop placement instead).
 */
const Hero = ({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  art,
  stackCtasOnMobile = false,
  introMaxWidth,
  ctaGap,
  markdown,
  ctaStackWidth = 700,
  cornerArtOnPhone = false,
  fillMeshOnPhone = true,
}) => (
  <Section id="top">
    <MeshHeroBackground fillOnPhone={fillMeshOnPhone} />
    <Art aria-hidden="true" $cornerOnPhone={cornerArtOnPhone}>
      <img
        src={`/services/hero/${art}-700.webp`}
        srcSet={heroArtSrcSet(art)}
        sizes={HERO_ART_SIZES}
        width="700"
        height="700"
        alt=""
        fetchpriority="high"
        decoding="async"
      />
    </Art>

    <Body>
      <BandShell>
        <Copy>
          <EyebrowRow>
            <EyebrowBar aria-hidden="true" />
            <EyebrowText>{eyebrow}</EyebrowText>
          </EyebrowRow>
          <Heading>
            {title.lead}
            <br />
            <HeadingAccent>{title.accent}</HeadingAccent>
          </Heading>
          {intro.map((paragraph, index) => (
            <Intro key={paragraph} $tight={index > 0} $maxWidth={introMaxWidth}>
              {paragraph}
            </Intro>
          ))}
          <CtaRow $stackOnMobile={stackCtasOnMobile} $stackWidth={ctaStackWidth} $gap={ctaGap}>
            <PrimaryButton href={primaryCta.href}>
              {primaryCta.label} <span aria-hidden="true">{primaryCta.glyph}</span>
            </PrimaryButton>
            <SecondaryButton href={secondaryCta.href}>
              {secondaryCta.label} <span aria-hidden="true">{secondaryCta.glyph}</span>
            </SecondaryButton>
          </CtaRow>
        </Copy>
      </BandShell>
    </Body>

    {markdown && (
      <MarkdownRow>
        <MarkdownLink href={markdown.href} filename={markdown.filename} variant="mobile" />
      </MarkdownRow>
    )}
  </Section>
);

export default Hero;
