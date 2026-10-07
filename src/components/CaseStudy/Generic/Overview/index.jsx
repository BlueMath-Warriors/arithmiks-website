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
  GapTitle,
  GapText,
  ScreenshotColumn,
  Screenshot,
  ScreenshotCard,
} from "./index.styled";

// A plain <img> rather than GatsbyImage: GatsbyImage's wrapper applies its
// own inline sizing (to fit its *source* aspect ratio) that fights the
// shrink-to-fit "size the card to the image" layout ScreenshotCard needs
// here — a plain img with width:auto/height:100% just works predictably.
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
                <GapTitle>{problemData.title}</GapTitle>
                <GapText>{problemData.text}</GapText>
              </GapBox>
            )}
          </TextColumn>
          <ScreenshotColumn data-reveal="">
            <Screenshot>
              <ScreenshotCard $framed={framed}>
                {renderImage(imageSrc, imageAlt || `${name} overview`)}
              </ScreenshotCard>
            </Screenshot>
          </ScreenshotColumn>
        </OverviewGrid>
      </Shell>
    </OverviewSection>
  );
};

export default Overview;
