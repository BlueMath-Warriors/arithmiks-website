import React from "react";

export const getHeroData = (images) => ({
  category: "Web Application / SaaS",
  logoSrc: "/sbaloans.svg",
  logoAlt: "sbaloansHQ",
  caption: (
    <>
      A SaaS platform that automates SBA loan origination with AI-powered
      <br />
      lead scoring, document processing, and deal summarization.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Sbaloans Memorandum",
});

export const techStackData = {
  technologies: [
    { name: "Python", icon: "/Tech Stack/python.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "Google Gemini", icon: "/Tech Stack/gemini.svg" },
    { name: "DocuSeal", icon: "/Tech Stack/docuseal.svg" },
    { name: "Docker", icon: "/Tech Stack/docker.svg" },
    { name: "GitHub Actions", icon: "/Tech Stack/github-actions.svg" },
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "AWS S3", icon: "/Tech Stack/aws-s3.svg" },
    { name: "AWS RDS", icon: "/Tech Stack/aws-rds.svg" },
    { name: "Postmark", icon: "/Tech Stack/postmark.svg" },
    { name: "Vercel", icon: "/Tech Stack/vercel.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
  ],
  specialIconNames: ["Postmark"],
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
    "SBALoansHQ is multi-tenant SaaS running the full SBA loan lifecycle—AI handles lead scoring, doc reading & credit memos, cutting overhead 60%, 30% faster.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Loan brokers ran everything through email threads and spreadsheets—every lead reviewed by hand, every document read manually, underwriters piecing deal summaries together from scattered files. SBALoansHQ centralizes the workflow and lets AI handle the repetitive work.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed and delivered an AI-driven
      platform that automates the loan lifecycle from lead intake to lender
      review.
    </>
  ),
  solutions: [
    {
      icon: "/sbasolution1.svg",
      title: "AI-Powered Deal Intelligence",
      detail:
        "Every lead is scored and filtered before a human sees it, and every document is automatically classified, extracted, and synthesized into an underwriting-ready credit memo.",
    },
    {
      icon: "/sbasolution2.svg",
      title: "Centralized Document Workflows",
      detail:
        "Milestone-based email triggers and status tracking were implemented to keep all stakeholders informed in real time, reducing manual follow-ups.",
    },
    {
      icon: "/sbasolution3.svg",
      title: "Multi-Tenant, Scalable Architecture",
      detail:
        "Built to serve borrowers, partners, lenders, and staff from a single system, with white-label support and strict role-based access across every organization.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. AI Lead Scoring",
      description:
        "Gemini-powered spam filtering and configurable per-partner qualification rules.",
      image: "/Sba Key Features/sbaKeyFeature1.png",
    },
    {
      title: "2. AI Document Pipeline",
      description:
        "OCR and two-phase extraction turning every upload into structured summaries and audit findings.",
      image: "/Sba Key Features/sbaKeyFeature2.png",
    },
    {
      title: "3. AI Credit Memos",
      description:
        "Deal-level synthesis producing underwriting-style memos automatically.",
      image: "/Sba Key Features/sbaKeyFeature3.png",
    },
    {
      title: "4. Document Collection & E-Signature",
      description:
        "Structured requests and DocuSeal signing in one place.",
      image: "/Sba Key Features/sbaKeyFeature4.png",
    },
    {
      title: "5. Lender Marketplace",
      description:
        "Controlled deal access through approval workflows and referral agreements.",
      image: "/Sba Key Features/sbaKeyFeature5.png",
    },
    {
      title: "6. Deal Chat & Notifications",
      description:
        "Isolated threads per party with batched notification digests.",
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
