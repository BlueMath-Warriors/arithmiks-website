import React, { useRef } from "react";
import Hero from "./Hero";
import Glance from "./Glance";
import Explorer from "./Explorer";
import Approach from "./Approach";
import { useIndustryExplorer } from "./Explorer/useIndustryExplorer";
import Recognition from "../About/Recognition";
import ContactCTA from "../Careers/ContactCTA";
import BlogTeaser from "../About/BlogTeaser";
import { useReveal } from "../../hooks/useReveal";
import { prefersReducedMotion } from "../../utils/animations";
import { Page } from "./index.styled";

// Leaves the explorer's heading clear of the fixed header after a hero tile jumps to it.
const EXPLORER_SCROLL_OFFSET_PX = 70;

const Industries = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const explorer = useIndustryExplorer();
  const { selectIndustry } = explorer;

  const showIndustry = (index) => {
    selectIndustry(index);
    const explorerSection = document.getElementById("industries");
    if (!explorerSection) return;
    window.scrollTo({
      top: explorerSection.getBoundingClientRect().top + window.scrollY - EXPLORER_SCROLL_OFFSET_PX,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <Page ref={rootRef}>
      <Hero onSelectIndustry={showIndustry} />
      <Glance />
      <Explorer explorer={explorer} />
      <Approach />
      <Recognition />
      <ContactCTA background="#fff" hideWatermarkOnNarrow />
      <BlogTeaser />
    </Page>
  );
};

export default Industries;
