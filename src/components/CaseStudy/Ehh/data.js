import React from "react";

export const heroData = {
  category: "Web Application / UI/UX",
  logoSrc: "/ehh.svg",
  logoAlt: "Expat Haven Hub",
  caption: (
    <>
      AI-powered, gamified platform that centralizes essential
      <br />
      lifestyle insights for digital nomads and expats.
    </>
  ),
  heroImageSrc: "/ehhMemorandum.png",
  heroImageAlt: "EHH Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "FastAPI", icon: "/Tech Stack/fastapi.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "Payload CMS", icon: "/Tech Stack/payloadcms.svg" },
    { name: "Open AI", icon: "/Tech Stack/openai.svg" },
  ],
  specialIconNames: [],
};

export const overviewData = {
  title: "Overview",
  caption: (
    <>
      <span style={{ color: "#000000" }}>Project</span>{" "}
      <span style={{ color: "#0957DE" }}>Overview</span>
    </>
  ),
  detail:
    "Expat Haven Hub is a lifestyle platform that helps digital nomads and expats plan, explore, and manage life abroad using centralized, personalized insights.",
  imageSrc: "/ehhFinancialSummary.png",
  problemData: {
    title: "The Problem",
    text: "Expats relied on fragmented sources for housing, visas, and cost-of-living data, leading to time-consuming research and inconsistent experiences. Expat Haven Hub solves this by centralizing information and enhancing engagement through personalization, AI-driven content, and gamified discovery.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed a centralized, personalized lifestyle
      platform that transformed fragmented expat data into an engaging,
      AI-powered planning experience.
    </>
  ),
  solutions: [
    {
      icon: "/ehhsolution1.svg",
      title: "Unified Global Lifestyle Intelligence",
      detail:
        "Arithmiks aggregated cost-of-living data, housing, visa programs, taxation insights, and news into a single, searchable ecosystem.",
    },
    {
      icon: "/ehhsolution2.svg",
      title: "AI-Driven Personalization & Gamification",
      detail:
        "Interactive quizzes, archetype-based profiles, and AI-summarized content were used to deliver personalized insights and increase long-term user engagement.",
    },
    {
      icon: "/ehhsolution3.svg",
      title: "Scalable, Modular Platform Architecture",
      detail:
        "The phase one MVP was built with a modular, API-ready architecture and CMS-driven content management to support rapid iteration and future premium features.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Cost-of-Living Ticker",
      description:
        "A stock-ticker-inspired interface showing live cost comparisons with color-coded affordability insights.",
      image: "/EHH Key Features/ehhKeyFeature1.png",
    },
    {
      title: "2. Nomad Type Identifier Quiz",
      description:
        "A gamified quiz that uses AI to identify user archetypes and generate shareable result cards.",
      image: "/EHH Key Features/ehhKeyFeature2.png",
    },
    {
      title: "3. Personalized News Feed",
      description:
        "An AI-curated feed filtered by user preferences and archetype, with summaries and infinite scrolling.",
      image: "/EHH Key Features/ehhKeyFeature3.png",
    },
    {
      title: "4. Country Taxation Overview",
      description:
        "Clear, visual taxation insights across 25 countries with AI-generated summaries and comparisons.",
      image: "/EHH Key Features/ehhKeyFeature4.png",
    },
    {
      title: "5. Housing Aggregator",
      description:
        "A unified housing search that aggregates multiple providers and delivers personalized recommendations.",
      image: "/EHH Key Features/ehhKeyFeature5.png",
    },
    {
      title: "6. Visa & Residency Program Overview",
      description:
        "A searchable, AI-summarized visa catalog with comparison tools and shortlisting across 25 countries.",
      image: "/EHH Key Features/ehhKeyFeature6.png",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Omer is a professional, reliable, and kind person. Working with him was great! Omer was available for any question, gave professional answers, was patient with the project and the results are beautiful. I highly recommend working with him.",
  clientImageSrc: "/dummyOwner.png",
  clientName: "Zachary Renta",
  clientTitle: "SBA Loans Founder & CEO",
};

