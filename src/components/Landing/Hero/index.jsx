import React, { useEffect, useRef, useState } from "react";
import Marquee from "../shared/Marquee";
import { prefersReducedMotion } from "../../../utils/animations";
import {
  HeroSection,
  HeroBackground,
  HeroOverlay,
  HeroGlow,
  HeroShell,
  HeroMain,
  Eyebrow,
  Headline,
  GradientAI,
  Dots,
  Dot,
  ScrollCue,
  TrustedLabel,
  ClientLogo,
} from "./index.styled";
import heroTeam from "../../../images/homepage/hero-team.png";
import lfgoLogo from "../../../images/homepage/client-lfgo-mark.png";
import mrsellernoteLogo from "../../../images/homepage/client-mrsellernote-mark.png";

const SLIDES = [
  "Transform your business with AI",
  "Leverage AI in your next SaaS idea",
  "AI-first data extraction",
];

// Wraps every standalone "AI" in the slide text with the gradient
// treatment, same word-boundary rule as the design's own markAI().
const markAI = (text) =>
  text
    .split(/(\bAI\b)/g)
    .map((part, i) => (part === "AI" ? <GradientAI key={i}>AI</GradientAI> : part));

// Ported from CLIENTS in the design source. `treatment: "raw"` keeps the
// logo's natural color (the source's own choice for LFGO and Mr. Seller
// Note); every other logo gets the grayscale-then-invert-to-white treatment
// standard for the dark hero.
//
// SVG logos are referenced as plain /-prefixed paths into static/, NOT ES
// imports — this project's gatsby-plugin-react-svg turns an `import x from
// "*.svg"` into a React icon *component*, not a URL string, so it can't be
// used as an <img src>. This matches the same convention caseStudies.js
// already uses for its logos. PNGs (the two "raw"-treatment marks and the
// hero photo above) go through the normal asset pipeline and import fine.
const CLIENTS = [
  { name: "LFGO", logo: lfgoLogo, height: 33, treatment: "raw" },
  { name: "GO", logo: "/go.svg", height: 36, treatment: "flat" },
  { name: "Almani Health Institute", logo: "/almani.svg", height: 34, treatment: "flat" },
  { name: "EASY-BAR", logo: "/easybar.svg", height: 16, treatment: "flat" },
  { name: "HAKRO", logo: "/hakro.svg", height: 26, treatment: "flat" },
  { name: "Swerv Automotive", logo: "/swerv.svg", height: 26, treatment: "flat" },
  { name: "NICGS", logo: "/homepage/client-nicgs.svg", height: 30, treatment: "flat" },
  { name: "Togather", logo: "/togather.svg", height: 24, treatment: "flat" },
  { name: "Expat Haven Hub", logo: "/ehh.svg", height: 30, treatment: "flat" },
  { name: "Ofertas Perronas MX", logo: "/ofertas.svg", height: 33, treatment: "flat" },
  { name: "Mr. Seller Note", logo: mrsellernoteLogo, height: 30, treatment: "raw" },
  { name: "sbaloansHQ", logo: "/sbaloans.svg", height: 26, treatment: "flat" },
  { name: "Qareeb", logo: "/homepage/client-qareeb-mark.svg", height: 25, treatment: "flat" },
  { name: "Quanta", logo: "/homepage/client-quanta-mark.svg", height: 36, treatment: "flat" },
];

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const id = setInterval(() => {
      if (!pausedRef.current) setSlide((s) => (s + 1) % SLIDES.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <HeroSection
      id="top"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onFocus={() => {
        pausedRef.current = true;
      }}
      onBlur={() => {
        pausedRef.current = false;
      }}
    >
      <HeroBackground
        src={heroTeam}
        alt="Arithmiks team collaborating over data charts in a meeting room"
      />
      <HeroOverlay />
      <HeroGlow aria-hidden="true" />
      <HeroShell>
        <HeroMain>
          <Eyebrow>AI-First Software Engineering</Eyebrow>
          <Headline aria-live="polite">{markAI(SLIDES[slide])}</Headline>
          <Dots role="group" aria-label="Headline slides">
            {SLIDES.map((_, i) => (
              <Dot
                key={i}
                type="button"
                $active={i === slide}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === slide}
                onClick={() => setSlide(i)}
              />
            ))}
          </Dots>
          <ScrollCue aria-hidden="true">SCROLL</ScrollCue>
        </HeroMain>
        <TrustedLabel>Trusted by teams building what&apos;s next.</TrustedLabel>
        <Marquee
          items={CLIENTS.map((c) => ({
            key: c.name,
            node: (
              <ClientLogo
                src={c.logo}
                alt={c.name}
                height={c.height}
                $raw={c.treatment === "raw"}
              />
            ),
          }))}
        />
      </HeroShell>
    </HeroSection>
  );
};

export default Hero;
