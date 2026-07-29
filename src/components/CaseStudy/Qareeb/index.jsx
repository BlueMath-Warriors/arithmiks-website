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

const Qareeb = ({ images, breadcrumbItems }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);
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
      <MoreCaseStudies currentSlug="qareeb" />
      <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Qareeb;
