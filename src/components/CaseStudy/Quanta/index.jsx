import React from "react";
import BookingFlow from "../../Landing/Contact-Us/Booking-Flow";
import Footer from "../../Landing/Footer";
import Header from "../../Landing/Header";
import { Hero, TechStack, Overview, Solution, Flow, KeyFeatures, MoreCaseStudies } from "../Generic";
import FlowDiagram from "./FlowDiagram";
import {
  heroData,
  techStackData,
  overviewData,
  solutionData,
  flowData,
  keyFeaturesData,
} from "./data";

const RELATED_SLUGS = ["clauselens", "go"];

const Quanta = () => (
  <>
    <Header lightHero={true} />
    <main>
      <Hero {...heroData} />
      <TechStack {...techStackData} />
      <Overview {...overviewData} name={heroData.logoAlt} />
      <Solution {...solutionData} />
      <Flow {...flowData}>
        <FlowDiagram />
      </Flow>
      <KeyFeatures {...keyFeaturesData} />
      <MoreCaseStudies currentSlug="quanta" relatedSlugs={RELATED_SLUGS} />
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default Quanta;
