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

const Swerv = () => {
  return (
    <>
      <Header />
      <Hero {...heroData} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      {testimonialData && testimonialData.clientImageSrc && !testimonialData.clientImageSrc.includes('dummyOwner') && (
        <Testimonial {...testimonialData} />
      )}
      <Solution {...solutionData} hasTestimonial={testimonialData && testimonialData.clientImageSrc && !testimonialData.clientImageSrc.includes('dummyOwner')} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="swerv" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Swerv;

