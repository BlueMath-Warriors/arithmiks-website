import React from "react";
import ContactUs from "../../Landing/Contact-Us";
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

const Sbaloans = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

  return (
    <>
      <Header />
      <Hero {...heroData} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      <Testimonial {...testimonialData} />
      <Solution {...solutionData} hasTestimonial={true} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="sbaloans" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Sbaloans;
