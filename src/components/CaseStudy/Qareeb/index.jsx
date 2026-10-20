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

const Qareeb = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);
  const hasTestimonial = false;

  return (
    <>
      <Header lightHero={true} />
      <main>
      <Hero {...heroData} slug="qareeb" />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      {hasTestimonial && <Testimonial {...testimonialData} />}
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="qareeb" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default Qareeb;
