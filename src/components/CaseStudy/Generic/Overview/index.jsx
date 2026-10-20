import React, { useRef } from "react";
import { getImage, getSrc } from "gatsby-plugin-image";
import useReveal from "../../../../hooks/useReveal";
import { GradientText, Shell } from "../../../shared/Section/index.styled";
import { SectionEyebrow, SectionHeading } from "../layout.styled";
import {
  OverviewSection,
  OverviewGrid,
  TextColumn,
  Lead,
  GapBox,
  GapBand,
  GapOutline,
  GapFill,
  GapTitle,
  GapText,
  ScreenshotColumn,
  Screenshot,
} from "./index.styled";

// A plain <img> rather than GatsbyImage: GatsbyImage's wrapper applies its
// own inline sizing (to fit its *source* aspect ratio), which fights the
// fixed width/height + object-fit: cover box this renders into — a plain
// img sizes predictably with that CSS instead.
const renderImage = (image, alt) => {
  const gatsbyImage =
    image && typeof image === "object" && image.childImageSharp
      ? getImage(image)
      : null;
  const src = gatsbyImage ? getSrc(gatsbyImage) : image;
  return <img src={src} alt={alt} loading="lazy" />;
};

/**
 * @param {Object} props
 * @param {string} props.name product / client name used in "What is …?"
 * @param {string} props.detail
 * @param {string|Object} props.imageSrc static path or gatsby image node
 * @param {string} [props.imageAlt]
 * @param {boolean} [props.framed] show the image as a bordered card with a drop shadow (default)
 * @param {{ title: string; text: string }} props.problemData rendered in the "gap" box
 */
const Overview = ({
  name,
  detail,
  imageSrc,
  imageAlt,
  framed = true,
  problemData,
}) => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <OverviewSection
      id="overview"
      aria-labelledby="overview-heading"
      ref={rootRef}
    >
      <Shell>
        <OverviewGrid>
          <TextColumn data-reveal="">
            <SectionEyebrow>Overview</SectionEyebrow>
            <SectionHeading id="overview-heading">
              What is <GradientText>{name}?</GradientText>
            </SectionHeading>
            <Lead>{detail}</Lead>
            {problemData && (
              <GapBox>
                <GapBand aria-hidden="true" />
                <GapOutline aria-hidden="true" />
                <GapFill aria-hidden="true" />
                <GapTitle>{problemData.title}</GapTitle>
                <GapText>{problemData.text}</GapText>
              </GapBox>
            )}
          </TextColumn>
          <ScreenshotColumn data-reveal="">
            <Screenshot $framed={framed}>
              {renderImage(imageSrc, imageAlt || `${name} overview`)}
            </Screenshot>
          </ScreenshotColumn>
        </OverviewGrid>
      </Shell>
    </OverviewSection>
  );
};

export default Overview;
