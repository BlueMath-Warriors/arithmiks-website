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

const Do = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

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
      <MoreCaseStudies currentSlug="ofertas" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Do;
