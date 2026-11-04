import React, { useRef } from "react";
import { Page } from "../shared/Band/index.styled";
import Faq from "../shared/Faq";
import ScrollProgress from "../shared/ScrollProgress";
import SelectedWork from "../ServicesIndex/SelectedWork";
import { useReveal } from "../../hooks/useReveal";
import Hero from "./Hero";
import ChapterNav from "./ChapterNav";
import Challenges from "./Challenges";
import SplitChallenges from "./Challenges/SplitChallenges";
import ChallengesCells from "./ChallengesCells";
import AboutDiagram from "./AboutDiagram";
import Fit from "./Fit";
import InfraDiagram from "./InfraDiagram";
import FitAccordion from "./FitAccordion";
import FitReveal from "./FitReveal";
import UseCases from "./UseCases";
import StoryTimeline from "./StoryTimeline";
import NotesBoard from "./NotesBoard";
import BuildTypes from "./BuildTypes";
import Offers from "./Offers";
import Impact from "./Impact";
import ValueCard from "./ValueCard";
import TechStack from "./TechStack";
import { useChapterChrome } from "./useChapterChrome";

// Content files list their bands in page order as { type, ...props }.
const SECTIONS = {
  challenges: Challenges,
  challengesSplit: SplitChallenges,
  challengesCells: ChallengesCells,
  about: AboutDiagram,
  fit: Fit,
  infra: InfraDiagram,
  fitAccordion: FitAccordion,
  fitReveal: FitReveal,
  offers: Offers,
  notes: NotesBoard,
  story: StoryTimeline,
  buildTypes: BuildTypes,
  impact: Impact,
  value: ValueCard,
  stack: TechStack,
  useCases: UseCases,
  work: SelectedWork,
  faq: Faq,
};

/**
 * A service page in the shared design system: hero, chapter bar, then the
 * page's bands as its content file lists them.
 *
 * @param {{ content: { hero: object, chapters: { id: string, label: string }[],
 *   sections: ({ type: keyof typeof SECTIONS } & object)[] } }} props
 */
const ServiceDetail = ({ content }) => {
  const { rootRef, barRef, activeId, stuck } = useChapterChrome(content.chapters);
  const revealRef = useRef(null);
  useReveal(revealRef);

  return (
    <Page
      ref={(node) => {
        rootRef.current = node;
        revealRef.current = node;
      }}
    >
      <ScrollProgress />
      <Hero {...content.hero} />
      <ChapterNav chapters={content.chapters} activeId={activeId} stuck={stuck} barRef={barRef} />
      {content.sections.map(({ type, ...props }) => {
        const Section = SECTIONS[type];
        if (!Section) throw new Error(`ServiceDetail: unknown section type "${type}"`);
        return <Section key={type} {...props} />;
      })}
    </Page>
  );
};

export default ServiceDetail;
