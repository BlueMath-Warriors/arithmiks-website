import React from "react";
import BookingFlow from "../../Landing/Contact-Us/Booking-Flow";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";

import {
  Hero,
  TechStack,
  Overview,
  Testimonial,
  Solution,
  KeyFeatures,
  MoreCaseStudies,
} from "../Generic";

import {
  getHeroData,
  techStackData,
  getOverviewData,
  testimonialData,
  solutionData,
  keyFeaturesData,
} from "./data";

const Swerv = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

  return (
    <>
      <Header lightHero={true} />
      <main>
      <Hero {...heroData} slug="swerv" />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      {testimonialData && testimonialData.clientImageSrc && !testimonialData.clientImageSrc.includes('dummyOwner') && (
        <Testimonial {...testimonialData} />
      )}
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="swerv" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default Swerv;
