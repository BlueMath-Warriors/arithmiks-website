import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { caseStudies } from "../../../Landing/Case-Study/caseStudies";
import { GradientText } from "../../../shared/Section/index.styled";
import {
  HeroSection,
  MeshClip,
  Mesh,
  BlueOrb,
  PinkOrb,
  HeroShell,
  HeroContent,
  EyebrowLabel,
  ProductLogo,
  Headline,
  Subtitle,
  CtaRow,
  PrimaryCta,
  SecondaryCta,
  CtaGlyph,
  Frame,
} from "./index.styled";

const HIGHLIGHT_WORD_COUNT = 2;
// The constrained gatsby image is capped at its generated width; the frame decides the size.
const FILL_FRAME = { width: "100%", maxWidth: "none" };

// Case studies without a hand-written headline reuse their card title, with
// the last words in the brand gradient like the design's headline.
const splitTitle = (title) => {
  const words = title.split(" ");
  const cut = Math.max(0, words.length - HIGHLIGHT_WORD_COUNT);
  return { plain: words.slice(0, cut).join(" "), highlight: words.slice(cut).join(" ") };
};

/**
 * @param {Object} props
 * @param {string} props.category eyebrow above the logo
 * @param {string} props.logoSrc
 * @param {string} props.logoAlt
 * @param {string} [props.logoHeight] CSS height for the logo when the default is too small
 * @param {string} [props.slug] case-study slug; its card title is the h1 when no `headline` is given
 * @param {string | { plain: string; highlight: string }} [props.headline] h1 text; the highlight part gets the gradient
 * @param {React.ReactNode} props.caption subtitle under the headline
 * @param {string} [props.liveUrl] product URL for the "Visit" button
 * @param {string} [props.liveLabel] name used in the button, defaults to the logo alt
 * @param {"blue" | "warm"} [props.tone] colour of the frame around the image
 * @param {boolean} [props.screenshot] the image is a plain app screenshot (rounded, ringed) rather than a ready-made mockup
 * @param {Object} [props.heroImageData] gatsbyImageData from GraphQL
 * @param {string} [props.heroImageSrc] static fallback path
 * @param {string} props.heroImageAlt
 */
const Hero = ({
  category,
  logoSrc,
  logoAlt = "Logo",
  logoHeight,
  slug,
  headline,
  caption,
  liveUrl,
  liveLabel,
  tone = "blue",
  screenshot = false,
  heroImageData,
  heroImageSrc,
  heroImageAlt = "Hero image",
}) => {
  const gatsbyImage = heroImageData ? getImage(heroImageData) : null;
  const headlineSource = headline || caseStudies.find((study) => study.slug === slug)?.title || logoAlt;
  const { plain, highlight } =
    typeof headlineSource === "string" ? splitTitle(headlineSource) : headlineSource;

  return (
    <HeroSection id="top" aria-labelledby="case-study-headline">
      <MeshClip aria-hidden="true">
        <Mesh>
          <BlueOrb />
          <PinkOrb />
        </Mesh>
      </MeshClip>
      <HeroShell>
        <HeroContent>
          <EyebrowLabel>{category}</EyebrowLabel>
          {logoSrc && <ProductLogo src={logoSrc} alt={logoAlt} $height={logoHeight} />}
          <Headline id="case-study-headline">
            {plain} <GradientText>{highlight}</GradientText>
          </Headline>
          <Subtitle>{caption}</Subtitle>
          <CtaRow>
            {liveUrl && (
              <PrimaryCta href={liveUrl} target="_blank" rel="noopener noreferrer">
                Visit {liveLabel || logoAlt} <CtaGlyph aria-hidden="true">↗</CtaGlyph>
              </PrimaryCta>
            )}
            <SecondaryCta href="#features">
              Explore features <CtaGlyph aria-hidden="true">↓</CtaGlyph>
            </SecondaryCta>
          </CtaRow>
        </HeroContent>
        <Frame $tone={tone} $screenshot={screenshot}>
          {gatsbyImage ? (
            <GatsbyImage
              image={gatsbyImage}
              alt={heroImageAlt}
              loading="eager"
              objectFit="cover"
              objectPosition="top center"
              style={FILL_FRAME}
            />
          ) : (
            <img src={heroImageSrc} alt={heroImageAlt} fetchpriority="high" decoding="async" />
          )}
        </Frame>
      </HeroShell>
    </HeroSection>
  );
};

export default Hero;
