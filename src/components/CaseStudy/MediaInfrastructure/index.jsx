import React from "react";
import BookingFlow from "../../Landing/Contact-Us/Booking-Flow";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";

import { Hero, TechStack, Overview, Solution, KeyFeatures, MoreCaseStudies } from "../Generic";

import {
  getHeroData,
  techStackData,
  getOverviewData,
  solutionData,
  keyFeaturesData,
} from "./data";

const MediaInfrastructure = ({ images, breadcrumbItems }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);
  // No testimonial content yet — add testimonialData + flip this to true once available.
  const hasTestimonial = false;

  return (
    <>
      <Header white={true} />
      <main>
      <Hero {...heroData} breadcrumbItems={breadcrumbItems} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} />
      <Solution {...solutionData} hasTestimonial={hasTestimonial} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="media-infrastructure" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default MediaInfrastructure;
