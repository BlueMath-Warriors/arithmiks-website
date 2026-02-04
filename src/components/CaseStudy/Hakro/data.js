import React from "react";

export const heroData = {
  category: "Web Application / E-Commerce / UI/UX",
  logoSrc: "/hakro.svg",
  logoAlt: "HAKRO",
  caption: (
    <>
      Platform enabling dealers to buy bulk products directly
      <br />from website sessions.
    </>
  ),
  heroImageSrc: "/hakroMemorandum.png",
  heroImageAlt: "Hakro Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/Tech Stack/tailwind.svg" },
    { name: "XML", icon: "/Tech Stack/xml.svg" },
    { name: "JavaScript", icon: "/Tech Stack/javascript.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "Iframe Embedding", icon: "/Tech Stack/iframeembedding.svg" },
    { name: "Vercel Hosting", icon: "/Tech Stack/vercelhosting.svg" },
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
    "Hakro is an embedded e-commerce platform that enables organizations to deliver consistent, scalable product experiences across large retailer networks",
  imageSrc: "/hakroFinancialSummary.png",
  problemData: {
    title: "The Problem",
    text: "Organizations managed product catalogs across hundreds of retailer websites using manual, fragmented processes, leading to delays and inconsistent user experiences. Hakro addresses this by centralizing catalog management and embedding a unified, brand-consistent storefront across partner sites.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> built a scalable embedded e-commerce system that
      centralized product control while delivering a consistent, adaptive
      shopping experience across thousands of retailer websites.
    </>
  ),
  solutions: [
    {
      icon: "/hakrosolution1.svg",
      title: "Plug-and-Play Embedded Commerce",
      detail:
        "Arithmiks enabled organizations to deploy a full e-commerce experience via iframe or JavaScript widgets without requiring custom retailer-side development.",
    },
    {
      icon: "/hakrosolution2.svg",
      title: "Adaptive UI for Host-Site Compatibility",
      detail:
        "The interface dynamically adjusted to each retailer’s layout, ensuring visual consistency and seamless user experience across diverse site structures.",
    },
    {
      icon: "/hakrosolution3.svg",
      title: "Centralized Product & Brand Control",
      detail:
        "A single, XML-driven data source allowed real-time catalog updates and consistent branding across all embedded instances.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Responsive E-commerce Interface:",
      description:
        "Browsing, search, filtering, and checkout optimized for all devices.",
      image: "/Hakro Key Features/hakroKeyFeature1.png",
    },
    {
      title: "2. Adaptive UI Design:",
      description:
        "Automatically aligns with host-site structure for consistent UX.",
      image: "/Hakro Key Features/hakroKeyFeature2.png",
    },
    {
      title: "3. Centralized Product Management:",
      description:
        "XML-driven data source enabling real-time updates.",
      image: "/Hakro Key Features/hakroKeyFeature3.png",
    },
    {
      title: "4. Embedded Cart & Inquiry",
      description:
        "An in-widget cart that allows retailers to review products and send purchase inquiries without leaving their site.",
      image: "/Hakro Key Features/hakroKeyFeature4.png",
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

