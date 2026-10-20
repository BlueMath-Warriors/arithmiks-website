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

const Togather = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

  return (
    <>
      <Header lightHero={true} />
      <main>
      <Hero {...heroData} slug="togather" />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      <Testimonial {...testimonialData} />
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="togather" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default Togather;
