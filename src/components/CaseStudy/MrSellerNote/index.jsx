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

const MrSellerNote = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);
  // Testimonial hidden on request; data kept in ./data in case it's re-enabled later.
  const hasTestimonial = false;

  return (
    <>
      <Header lightHero={true} />
      <main>
      <Hero {...heroData} slug="mrsellernote" />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      {hasTestimonial && <Testimonial {...testimonialData} />}
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="mrsellernote" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default MrSellerNote;
