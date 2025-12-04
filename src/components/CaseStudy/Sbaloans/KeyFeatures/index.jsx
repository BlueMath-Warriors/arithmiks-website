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

const SbaloansKeyFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  const totalSlides = 5;

  const dashboardImages = [
    "/sbaloansMemorandum.svg",
    "/sbaloansMemorandum.svg",
    "/sbaloansMemorandum.svg",
    "/sbaloansMemorandum.svg",
    "/sbaloansMemorandum.svg",
  ];

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
      
      const scrollPosition = slideLeft - (containerWidth / 2) + (slideWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <>
      <div className={containerStyles.easybar_key_features}>
        <KeyFeaturesHeader>
          <KeyFeaturesLabel>HIGHLIGHTS</KeyFeaturesLabel>
          <PrimaryHeading>
            Key <Secondary>Features</Secondary>
          </PrimaryHeading>
          <SubHeadingContainer>
            <SubHeading>
              <SubHeadingTitle>1. Lead and Deal Management:</SubHeadingTitle>
              <br />
              Unified dashboard for tracking loan applications and client progress.
            </SubHeading>
          </SubHeadingContainer>
          <CarouselButtons>
            <CarouselButton onClick={handlePrev}>
              <img src="/leftIcon.svg" alt="Previous" />
            </CarouselButton>
            <CarouselButton onClick={handleNext}>
              <img src="/rightIcon.svg" alt="Next" />
            </CarouselButton>
          </CarouselButtons>
        </KeyFeaturesHeader>
        <CarouselSection>
          <FadeOverlay side="left" />
          <FadeOverlay side="right" />
          <CarouselContainer ref={carouselRef}>
            {dashboardImages.map((img, index) => (
              <CarouselSlide 
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
              >
                <DashboardImage src={img} alt={`Dashboard view ${index + 1}`} />
              </CarouselSlide>
            ))}
          </CarouselContainer>
          <PaginationDots>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </PaginationDots>
        </CarouselSection>
      </div>
    </>
  );
};

export default SbaloansKeyFeatures;

