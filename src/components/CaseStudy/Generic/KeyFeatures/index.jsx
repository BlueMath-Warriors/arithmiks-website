import React, { useState } from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import {
  KeyFeaturesHeader,
  KeyFeaturesLabel,
  PrimaryHeading,
  Secondary,
  SubHeadingContainer,
  SubHeading,
  SubHeadingTitle,
  CarouselSection,
  CarouselButtons,
  CarouselButton,
  CarouselContainer,
  CarouselSlide,
  DashboardImage,
  PaginationDots,
  Dot,
} from "./index.styled";

// Shortest signed circular distance from `currentSlide` to `index` (e.g. with
// 5 slides, index 4 is treated as -1 relative to current index 0, not +4).
const getCircularOffset = (index, currentSlide, total) => {
  let diff = index - currentSlide;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
};

/**
 * @param {Object} props
 * @param {string} props.label 
 * @param {string} props.heading 
 * @param {Array} props.features 
 * @param {string} props.features[].title 
 * @param {string} props.features[].description 
 * @param {string} props.features[].image 
 * @param {string} props.leftIconSrc 
 * @param {string} props.rightIconSrc 
 */
const KeyFeatures = ({
  label = "HIGHLIGHTS",
  heading = "Key Features",
  features = [],
  leftIconSrc = "/leftIcon.svg",
  rightIconSrc = "/rightIcon.svg",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = features.length;

  const headingParts = heading.split(" ");
  const lastWord = headingParts.pop();
  const firstPart = headingParts.join(" ");

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  if (totalSlides === 0) return null;

  return (
    <>
      <div className={containerStyles.easybar_key_features}>
        <KeyFeaturesHeader>
          <KeyFeaturesLabel>{label}</KeyFeaturesLabel>
          <PrimaryHeading>
            {firstPart} <Secondary>{lastWord}</Secondary>
          </PrimaryHeading>
          <SubHeadingContainer>
            <SubHeading>
              <SubHeadingTitle>{features[currentSlide]?.title}</SubHeadingTitle>
              <br />
              {features[currentSlide]?.description}
            </SubHeading>
          </SubHeadingContainer>
        </KeyFeaturesHeader>
        <CarouselSection>
          <CarouselContainer>
            <CarouselButtons role="group" aria-label="Carousel navigation">
              <CarouselButton
                side="left"
                onClick={handlePrev}
                aria-label="Previous feature"
              >
                <img src={leftIconSrc} alt="" width={24} height={24} aria-hidden="true" />
              </CarouselButton>
              <CarouselButton
                side="right"
                onClick={handleNext}
                aria-label="Next feature"
              >
                <img src={rightIconSrc} alt="" width={24} height={24} aria-hidden="true" />
              </CarouselButton>
            </CarouselButtons>
            {features.map((feature, index) => {
              const offset = getCircularOffset(index, currentSlide, totalSlides);
              const isActive = offset === 0;
              const isPeek = Math.abs(offset) === 1;

              return (
                <CarouselSlide
                  key={index}
                  $offset={offset}
                  $active={isActive}
                  $isPeek={isPeek}
                  onClick={isPeek ? () => setCurrentSlide(index) : undefined}
                  aria-hidden={!isActive}
                >
                  <DashboardImage
                    src={feature.image}
                    alt={`Dashboard view ${index + 1}`}
                  />
                </CarouselSlide>
              );
            })}
          </CarouselContainer>
          <PaginationDots role="tablist" aria-label="Feature slides">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
                role="tab"
                aria-selected={index === currentSlide}
                aria-label={`Go to feature ${index + 1}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setCurrentSlide(index);
                  }
                }}
              />
            ))}
          </PaginationDots>
        </CarouselSection>
      </div>
    </>
  );
};

export default KeyFeatures;
