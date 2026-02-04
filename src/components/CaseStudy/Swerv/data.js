import React from "react";

export const heroData = {
  category: "Web Application / SaaS",
  logoSrc: "/swerv.svg",
  logoAlt: "Swerv Automotive",
  caption: (
    <>
      A SaaS platform for car dealerships to automate
       <br />
       acquisitions, centralize data, and optimize sales.
    </>
  ),
  heroImageSrc: "/swervMemorandum.png",
  heroImageAlt: "Swerv Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "SendGrid", icon: "/Tech Stack/sendgrid.svg" },
    { name: "Selenium", icon: "/Tech Stack/selenium.svg" },
    { name: "Netlify", icon: "/Tech Stack/netlify.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
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
    "Swerv Auto is a SaaS platform that helps automotive dealerships acquire vehicles faster by combining real-time market data, automation, and actionable insights in one system.",
  imageSrc: "/swervFinancialSummary.png",
  problemData: {
    title: "The Problem",
    text: "Dealerships relied on fragmented tools and manual processes to manage inventory and vehicle acquisitions, leading to slow decisions and limited market visibility. Swerv Auto addresses this by centralizing data and automating workflows to enable faster, data-driven acquisitions.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed and delivered a centralized, data-driven
      platform that unified dealership workflows, automated acquisitions, and
      enabled faster, smarter decision-making.
    </>
  ),
  solutions: [
    {
      icon: "/swervsolution1.svg",
      title: "Unified Dealership Intelligence",
      detail:
        "We consolidated market data, inventory insights, and performance metrics into a single dashboard for complete operational visibility.",
    },
    {
      icon: "/swervsolution2.svg",
      title: "Automated Acquisition Workflows",
      detail:
        "End-to-end automations were implemented to handle lead intake, data syncing, and campaign execution—eliminating manual processes and delays.",
    },
    {
      icon: "/swervsolution3.svg",
      title: "Scalable, Performance-Ready Platform",
      detail:
        "The system was engineered on a cloud-native architecture to support high-volume data processing, rapid growth, and long-term scalability.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Inventory Intelligence:",
      description:
        "Smart analytics for comparing and prioritizing acquisition opportunities.",
      image: "/Swerv Key Features/swervKeyFeature1.png",
    },
    {
      title: "2. OCD Data Integration:",
      description:
        "Real-time synchronization of Open Car Data to provide instant insights into vehicle trends and market performance.",
      image: "/Swerv Key Features/swervKeyFeature2.png",
    },
    {
      title: "3. Automated Workflows:",
      description:
        "AWS Lambda and Selenium-driven automations for lead syncing and campaign execution.",
      image: "/Swerv Key Features/swervKeyFeature3.png",
    },
    {
      title: "4. Dealer Dashboard:",
      description:
        "Centralized interface for tracking performance metrics, acquisitions, and ROI.",
      image: "/Swerv Key Features/swervKeyFeature4.png",
    },
    {
      title: "5. CRM Integration:",
      description:
        "GoHighLevel and SendGrid for automated communication and marketing.",
      image: "/Swerv Key Features/swervKeyFeature5.png",
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

