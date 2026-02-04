import React from "react";

export const heroData = {
  category: "Web Application / SaaS",
  logoSrc: "/sbaloans.svg",
  logoAlt: "sbaloansHQ",
  caption: (
    <>
      SBA Loans HQ streamlines SBA loans with centralized
      <br />
      documents, tracking, and communication.
    </>
  ),
  heroImageSrc: "/sbaloansMemorandum.png",
  heroImageAlt: "Sbaloans Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "AWS S3", icon: "/Tech Stack/aws-s3.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "AWS RDS", icon: "/Tech Stack/aws-rds.svg" },
    { name: "Postmark", icon: "/Tech Stack/postmark.svg" },
    { name: "Vercel", icon: "/Tech Stack/vercel.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
  ],
  specialIconNames: ["Postmark"],
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
    "SBA Loans HQ is a SaaS platform that centralizes loan consulting workflows, giving brokers and clients a fast, organized, and transparent way to manage small business loan applications.",
  imageSrc: "/sbaloansFinancialSummary.png",
  problemData: {
    title: "The Problem",
    text: "Traditional loan processing is scattered across emails, spreadsheets, and separate storage tools, leading to lost documents, miscommunication, and slow approvals. SBA Loans HQ solves this by unifying the entire workflow into one efficient digital system.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> delivered a unified, automated loan management
      platform that streamlined broker workflows, improved client visibility,
      and ensured secure, scalable operations.
    </>
  ),
  solutions: [
    {
      icon: "/sbasolution1.svg",
      title: "Centralized Workflow System",
      detail:
        "We built an integrated platform that consolidated deal tracking, communication, and document handling into one intuitive workspace.",
    },
    {
      icon: "/sbasolution2.svg",
      title: "Automated Client & Broker Updates",
      detail:
        "Milestone-based email triggers and status tracking were implemented to keep all stakeholders informed in real time, reducing manual follow-ups.",
    },
    {
      icon: "/sbasolution3.svg",
      title: "Secure & Scalable Infrastructure",
      detail:
        "The team optimized backend operations and migrated document storage to AWS to ensure high performance, data integrity, and long-term scalability.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Lead and Deal Management:",
      description:
        "Unified dashboard for tracking loan applications and client progress.",
      image: "/Sba Key Features/sbaKeyFeature1.png",
    },
    {
      title: "2. User Management:",
      description:
        "Easily manage roles, permissions, and access levels for lenders, brokers, and internal teams.",
      image: "/Sba Key Features/sbaKeyFeature2.png",
    },
    {
      title: "3. Chat System:",
      description:
        "Enable secure, real-time communication between applicants and loan officers to speed up decision-making.",
      image: "/Sba Key Features/sbaKeyFeature3.png",
    },
    {
      title: "4. Memorandum Section:",
      description:
        "Enable secure, real-time communication between applicants and loan officers to speed up decision-making.",
      image: "/Sba Key Features/sbaKeyFeature4.png",
    },
    {
      title: "5. Lead Filtering and Scoring:",
      description:
        "Prioritize high-quality applicants using intelligent scoring based on eligibility, financial strength, and readiness.",
      image: "/Sba Key Features/sbaKeyFeature5.png",
    },
    {
      title: "6. AI-Generated Reports:",
      description:
        "Automatically generate SBA-documents reports with insights, summaries, and analysis in seconds.",
      image: "/Sba Key Features/sbaKeyFeature6.png",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: [
    "I have been working with the Arithmiks team and Usama for almost a year with ongoing development projects. They are almost always available, and give notice if there will be a delay.",
    "Additionally they all take time to explain certain things about the project, rather than just telling me what I want to hear.",
    "I've worked with some other developers / software teams in the past and Arithmiks is top notch."
  ],
  clientImageSrc: "/sbaOwner.png",
  clientName: "Zachary Renta",
  clientTitle: "SBA Loans Founder & CEO",
};
