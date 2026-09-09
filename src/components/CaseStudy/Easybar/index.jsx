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

const Easybar = ({ images, breadcrumbItems }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

  return (
    <>
      <Header white={true} />
      <main>
      <Hero {...heroData} breadcrumbItems={breadcrumbItems} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      <Testimonial {...testimonialData} />
      <Solution {...solutionData} hasTestimonial={true} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="easybar" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default Easybar;
