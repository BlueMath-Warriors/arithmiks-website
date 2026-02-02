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
  heroData,
  techStackData,
  overviewData,
  testimonialData,
  solutionData,
  keyFeaturesData,
} from "./data";

const Do = () => {
  return (
    <>
      <Header />
      <Hero {...heroData} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      <Testimonial {...testimonialData} />
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="ofertas" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Do;

