import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import ChapterNav from "./ChapterNav";
import WhyNow from "./WhyNow";
import ServiceOverview from "./ServiceOverview";
import Process from "./Process";
import { Outcomes, ValueBand } from "./Outcomes";
import Faq from "./Faq";
import SelectedWork from "../ServicesIndex/SelectedWork";
import { Page } from "./index.styled";
import { CHAPTERS } from "./content";
import { useReveal } from "../../hooks/useReveal";

// A section is current while it straddles this line; the line never sits
// above the bottom of the pinned chrome.
const ACTIVE_LINE_RATIO = 0.3;
const ACTIVE_LINE_MIN_GAP = 30;
// Breathing room between the pinned chrome and a section after an anchor jump.
const ANCHOR_GAP = 6;

const AiDiscoveryService = () => {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const [activeId, setActiveId] = useState(CHAPTERS[0].id);
  const [stuck, setStuck] = useState(false);

  useReveal(rootRef);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const root = rootRef.current;
    let frame = 0;
    let chrome = 0;

    // The header is fixed and its height changes across breakpoints, so the
    // bar's sticky offset and the anchor clearance are measured, not hardcoded.
    const syncChrome = () => {
      const header = document.querySelector("header");
      const bar = barRef.current;
      const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 0;
      const barVisible = bar && window.getComputedStyle(bar).display !== "none";
      const barHeight = barVisible ? bar.offsetHeight : 0;
      chrome = headerHeight + barHeight;
      root.style.setProperty("--header-height", `${headerHeight}px`);
      root.style.setProperty("--chrome-offset", `${chrome + ANCHOR_GAP}px`);
    };

    const measure = () => {
      frame = 0;
      const bar = barRef.current;
      const header = document.querySelector("header");
      const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
      if (bar) setStuck(bar.getBoundingClientRect().top <= headerBottom + 0.5);

      const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean);
      if (!sections.length) return;
      const line = Math.max(chrome + ACTIVE_LINE_MIN_GAP, window.innerHeight * ACTIVE_LINE_RATIO);

      let next = null;
      sections.forEach((section) => {
        const r = section.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) next = section.id;
      });
      if (!next) {
        // Bands between chapters (the value card) hold the last chapter passed.
        next = sections[0].id;
        for (let k = sections.length - 1; k >= 0; k -= 1) {
          if (sections[k].getBoundingClientRect().top <= line) {
            next = sections[k].id;
            break;
          }
        }
      }
      // Once the last chapter has scrolled fully past, nothing is current.
      if (sections[sections.length - 1].getBoundingClientRect().bottom <= line) next = "";
      setActiveId((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    const onResize = () => {
      syncChrome();
      onScroll();
    };

    syncChrome();
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Page ref={rootRef}>
      <Hero />
      <ChapterNav chapters={CHAPTERS} activeId={activeId} stuck={stuck} barRef={barRef} />
      <WhyNow />
      <ServiceOverview />
      <Process />
      <Outcomes />
      <ValueBand />
      <SelectedWork />
      <Faq />
    </Page>
  );
};

export default AiDiscoveryService;
