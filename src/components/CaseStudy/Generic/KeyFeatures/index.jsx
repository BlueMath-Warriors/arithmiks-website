import React, { useState, useRef, useEffect } from "react";
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
  FadeOverlay,
  CarouselButtons,
  CarouselButton,
  CarouselContainer,
  CarouselSlide,
  DashboardImage,
  PaginationDots,
  Dot,
} from "./index.styled";

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
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
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

  useEffect(() => {
    if (carouselRef.current && slideRefs.current[currentSlide]) {
      const container = carouselRef.current;
      const slideElement = slideRefs.current[currentSlide];

      const slideLeft = slideElement.offsetLeft;
      const containerWidth = container.offsetWidth;
      const slideWidth = slideElement.offsetWidth;

      const scrollPosition = slideLeft - containerWidth / 2 + slideWidth / 2;

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!container || slideRefs.current.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestSlide = 0;
      let closestDistance = Infinity;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(containerCenter - slideCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlide = index;
        }
      });

      if (closestSlide !== currentSlide) {
        setCurrentSlide(closestSlide);
      }
    };

    let scrollTimeout;
    const throttledHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    container.addEventListener('scroll', throttledHandleScroll);
    container.addEventListener('touchmove', throttledHandleScroll);
    container.addEventListener('touchend', handleScroll);

    return () => {
      container.removeEventListener('scroll', throttledHandleScroll);
      container.removeEventListener('touchmove', throttledHandleScroll);
      container.removeEventListener('touchend', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentSlide, totalSlides]);

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
          <CarouselButtons role="group" aria-label="Carousel navigation">
            <CarouselButton 
              onClick={handlePrev}
              aria-label="Previous feature"
            >
              <img src={leftIconSrc} alt="" width={24} height={24} aria-hidden="true" />
            </CarouselButton>
            <CarouselButton 
              onClick={handleNext}
              aria-label="Next feature"
            >
              <img src={rightIconSrc} alt="" width={24} height={24} aria-hidden="true" />
            </CarouselButton>
          </CarouselButtons>
        </KeyFeaturesHeader>
        <CarouselSection>
          <FadeOverlay side="left" />
          <FadeOverlay side="right" />
          <CarouselContainer ref={carouselRef}>
            {features.map((feature, index) => (
              <CarouselSlide
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
              >
                <DashboardImage
                  src={feature.image}
                  alt={`Dashboard view ${index + 1}`}
                />
              </CarouselSlide>
            ))}
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
