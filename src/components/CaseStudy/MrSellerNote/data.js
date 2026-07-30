import React from "react";

export const getHeroData = (images) => ({
  category: "Web Application / SaaS",
  logoSrc: "/icons/msn-logo.svg",
  logoAlt: "Mr. Seller Note",
  caption: (
    <>
      An automated loan management platform that tracks, calculates,
      <br />and processes multi-party payments from creation to final settlement.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Mr. Seller Note Dashboard",
});

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "Celery", icon: "/Tech Stack/celery.svg" },
    { name: "Redis", icon: "/Tech Stack/redis.svg" },
    { name: "Stripe", icon: "/Tech Stack/stripe.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
    { name: "Vercel", icon: "/Tech Stack/vercel.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
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
    "Mr Seller Note is a fintech platform for tracking loans end to end. It splits principal and interest per installment, records payments, tracks balances, and runs Stripe transfers.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Private lending is often managed through spreadsheets and manual calculations, creating gaps in accuracy, consistency, and visibility across all parties. Interest and principal are calculated by hand with no reliable way to track balances, payments have to be initiated and recorded manually, and receipts and loan data live in disconnected places.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> built a centralized loan management platform
      that transformed manual, fragmented lending workflows into an automated,
      multi-party payment experience.
    </>
  ),
  solutions: [
    {
      icon: "/mrsellernotesolution1.svg",
      title: "Loan Creation and Multi-Party Onboarding",
      detail:
        "A seller or borrower creates a loan and invites the other party. The loan stays inactive until both accept and add payment methods, with onboarding states visible to all.",
    },
    {
      icon: "/mrsellernotesolution2.svg",
      title: "Automated Payment Processing via Stripe",
      detail:
        "Stripe Connect handles scheduled collection including ACH. Once a loan is active, payments process automatically and distribute across parties, commissions, and fees.",
    },
    {
      icon: "/mrsellernotesolution3.svg",
      title: "Referral and Commission System",
      detail:
        "A third party can initiate a loan by inviting both seller and borrower. The system tracks referral participation, Stripe status, and commissions earned per payment.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Loan Creation and Email Invitation",
      description:
        "Structured flow to create a loan and invite the other party—tracks onboarding states, visible to all involved.",
      image: "/MSN Key Features/msnKeyFeature1.webp",
    },
    {
      title: "2. Financial Calculation Logic",
      description:
        "Backend logic calculates principal+interest breakdown per installment, records payments, and updates the balance.",
      image: "/MSN Key Features/msnKeyFeature2.webp",
    },
    {
      title: "3. Automated Payments with Stripe",
      description:
        "Scheduled collection via Stripe Connect with ACH—payments process and distribute across all parties.",
      image: "/MSN Key Features/msnKeyFeature3.webp",
    },
    {
      title: "4. Referral and Commission Handling",
      description:
        "Referral flow tracking participation, Stripe status, and commissions calculated per payment automatically.",
      image: "/MSN Key Features/msnKeyFeature4.webp",
    },
    {
      title: "5. Role-Based Dashboards",
      description:
        "Separate dashboards for Seller, Borrower, Referral, and Super Admin—each scoped to show only relevant data.",
      image: "/MSN Key Features/msnKeyFeature5.webp",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Highly effective and helpful both on the implementation side and at the strategic level.",
  clientImageSrc: "/mrsellernoteOwner.png",
  clientName: "Client Name",
  clientTitle: "Founder & CEO",
};
