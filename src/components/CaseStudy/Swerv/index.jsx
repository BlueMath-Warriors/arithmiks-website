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

const Swerv = ({ images, breadcrumbItems }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

  return (
    <>
      <Header />
      <main>
      <Hero {...heroData} breadcrumbItems={breadcrumbItems} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      {testimonialData && testimonialData.clientImageSrc && !testimonialData.clientImageSrc.includes('dummyOwner') && (
        <Testimonial {...testimonialData} />
      )}
      <Solution {...solutionData} hasTestimonial={testimonialData && testimonialData.clientImageSrc && !testimonialData.clientImageSrc.includes('dummyOwner')} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="swerv" />
      <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default Swerv;
