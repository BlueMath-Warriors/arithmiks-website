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

const Ehh = ({ images, breadcrumbItems }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);
  // Testimonial hidden on request; data kept in ./data in case it's re-enabled later.
  const hasTestimonial = false;

  return (
    <>
      <Header />
      <main>
      <Hero {...heroData} breadcrumbItems={breadcrumbItems} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      {hasTestimonial && <Testimonial {...testimonialData} />}
      <Solution {...solutionData} hasTestimonial={hasTestimonial} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="expat" />
      <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Ehh;
