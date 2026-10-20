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

const MediaInfrastructure = ({ images }) => {
  const heroData = getHeroData(images);
  const overviewData = getOverviewData(images);

  return (
    <>
      <Header lightHero={true} />
      <main>
      <Hero {...heroData} slug="media-infrastructure" />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="media-infrastructure" />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default MediaInfrastructure;
