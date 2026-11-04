import React from "react";
import MeshHeroBackground from "../../shared/MeshHeroBackground";
import { BandShell, EyebrowBar, PrimaryButton } from "../../shared/Band/index.styled";
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
// Matches the Art box: clamp(360px, 44vw, 700px), and min(62vw, 260px) on phones.
export const HERO_ART_SIZES = "(max-width: 700px) min(62vw, 260px), min(700px, 44vw)";

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
 * }} props
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
}) => (
  <Section id="top">
    <MeshHeroBackground />
    <Art aria-hidden="true">
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
          <CtaRow $stackOnMobile={stackCtasOnMobile} $gap={ctaGap}>
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
  </Section>
);

export default Hero;
