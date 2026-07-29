import React from "react";

export const getHeroData = (images) => ({
  category: "Web Application / Community Platform",
  logoSrc: "/ehh.svg",
  logoAlt: "Expat Haven Hub",
  caption: (
    <>
      A relocation platform that combines AI-powered research, country
      <br />
      comparisons, and a verified expat community in one product.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Global Cost of Living Index Dashboard",
});

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "TypeScript", icon: "/Tech Stack/typescript.svg" },
    { name: "FastAPI", icon: "/Tech Stack/fastapi.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "Payload CMS", icon: "/Tech Stack/payloadcms.svg" },
    { name: "Google Gemini", icon: "/Tech Stack/gemini.svg" },
  ],
  specialIconNames: [],
};

export const getOverviewData = (images) => ({
  title: "Overview",
  caption: (
    <>
      <span style={{ color: "#000000" }}>Project</span>{" "}
      <span style={{ color: "#0957DE" }}>Overview</span>
    </>
  ),
  detail:
    "Expat Haven Hub is your entire relocation journey in one place—AI research across 20+ countries, tools to compare destinations & a trust-based city community.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Relocation research was scattered across dozens of tabs—government sites, cost-of-living tools, tax blogs, Facebook groups—with no place to decide. Country data went stale, and communities ran on unverified groups full of cold-DM noise. Expat Haven Hub unifies research, decisions, and community into one continuous journey.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> delivered the full stack, from LLM data
      pipelines to the entire community feature suite.
    </>
  ),
  solutions: [
    {
      icon: "/ehhsolution1.svg",
      title: "AI-Powered Country Research",
      detail:
        "Per-country hubs with visa, tax & cost-of-living data—built via a multi-provider LLM pipeline, human-reviewed and current across 20+ countries.",
    },
    {
      icon: "/ehhsolution2.svg",
      title: "Smart Decision-Making Tools",
      detail:
        "A psychographic archetype quiz matches destinations to each user's lifestyle, budget, and priorities, backed by side-by-side country comparisons and saved shortlists.",
    },
    {
      icon: "/ehhsolution3.svg",
      title: "Trust-Based Community Design",
      detail:
        "Members climb a four-level trust ladder via verified events, and DMs stay locked until two people meet in person—making cold-DM abuse impossible.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Expat Archetype Quiz",
      description:
        "Personalized destination recommendations based on lifestyle, budget, and priorities.",
      image: "/EHH Key Features/ehhKeyFeature2.webp",
    },
    {
      title: "2. LLM-Generated Country Pages",
      description:
        "Visa, tax, and cost data across 20+ countries, human-reviewed and always current.",
      image: "/EHH Key Features/ehhKeyFeature1.webp",
    },
    {
      title: "3. Country Comparison",
      description:
        "Side-by-side comparison on visas, taxes, cost of living, weather, and community strength.",
      image: "/EHH Key Features/ehhKeyFeature6.webp",
    },
    {
      title: "4. Verified Role Ladder",
      description:
        "Trust earned through real event check-ins, not sign-ups or tenure.",
      image: "/EHH Key Features/ehhKeyFeature4.webp",
    },
    {
      title: "5. Gated Messaging",
      description:
        "Direct messages unlock only after two members attend an event together.",
      image: "/EHH Key Features/ehhKeyFeature5.webp",
    },
    {
      title: "6. One-Dashboard Publishing",
      description:
        "A single CMS post flows into country pages, news, and city updates.",
      image: "/EHH Key Features/ehhKeyFeature3.webp",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Omer is a professional, reliable, and kind person. Working with him was great! Omer was available for any question, gave professional answers, was patient with the project and the results are beautiful. I highly recommend working with him.",
  clientImageSrc: "/ehhOwner.png",
  clientName: "Client Name",
  clientTitle: "Founder & CEO",
};
