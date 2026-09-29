import React from "react";
import BookingFlow from "../../Landing/Contact-Us/Booking-Flow";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";
import { Hero, TechStack, Overview, Solution, KeyFeatures, MoreCaseStudies } from "../Generic";
import { heroData, techStackData, overviewData, solutionData, keyFeaturesData } from "./data";

const Quanta = () => (
  <>
    <Header lightHero={true} />
    <main>
      <Hero {...heroData} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      <Solution {...solutionData} />
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="quanta" />
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default Quanta;
