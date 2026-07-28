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

const MrSellerNote = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);
  const hasTestimonial =
    testimonialData &&
    testimonialData.clientImageSrc &&
    !testimonialData.clientImageSrc.includes("dummyOwner");

  return (
    <>
      <Header />
      <main>
      <Hero {...heroData} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      {hasTestimonial && <Testimonial {...testimonialData} />}
      <Solution {...solutionData} hasTestimonial={hasTestimonial} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="mrsellernote" />
      <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default MrSellerNote;
