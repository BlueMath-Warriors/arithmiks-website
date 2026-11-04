import React, { useRef } from "react";
import { Page } from "../../shared/Band/index.styled";
import Faq from "../../shared/Faq";
import ScrollProgress from "../../shared/ScrollProgress";
import { useReveal } from "../../../hooks/useReveal";
import Hero from "./Hero";
import ScanSection from "./ScanSection";
import HowItWorks from "./HowItWorks";
import { FAQ } from "./content";

/**
 * The /tools/virus-scanner page body: hero, the scanner with what it
 * catches, how it works, then the FAQ.
 *
 * @param {{ tool: { faq: { question: string, answer: string }[],
 *   howToSteps: { name: string, text: string }[] } }} props the TOOL_ROUTES entry
 */
const VirusScanner = ({ tool }) => {
  const revealRef = useRef(null);
  useReveal(revealRef);

  return (
    <Page ref={revealRef}>
      <ScrollProgress />
      <Hero />
      <ScanSection />
      <HowItWorks steps={tool.howToSteps} />
      <Faq
        title={FAQ.title}
        note={FAQ.note}
        items={tool.faq.map(({ question, answer }) => ({ question, answer: [answer] }))}
      />
    </Page>
  );
};

export default VirusScanner;
