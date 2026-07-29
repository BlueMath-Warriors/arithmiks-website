import React from "react";

export const getHeroData = (images) => ({
  category: "Web Application / Community Platform / UI/UX",
  logoSrc: "/ofertas.svg",
  logoAlt: "Ofertas Perronas MX",
  caption: (
    <>
      A community-driven deals platform where users publish, vote on,
      <br />
      and validate offers, with moderation built in to keep quality high.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Ofertas Perronas MX Dashboard",
});

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "Redux", icon: "/Tech Stack/redux.svg" },
    { name: "Tailwind CSS", icon: "/Tech Stack/tailwind.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "Amplify", icon: "/Tech Stack/amplify.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
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
    "On Ofertas Perronas MX, users find or post deals with pricing, coupons & images in one flow—the community votes and comments while moderation keeps it honest.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Users had no structured way to publish deals, no moderation visibility, and no engagement tools worth returning for. It's the tension every deal platform faces: open submissions drive engagement but demand quality control. Ofertas Perronas MX pairs both in one flow.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed and delivered a community
      publishing platform with moderation infrastructure at its core.
    </>
  ),
  solutions: [
    {
      icon: "/d&osolution1.svg",
      title: "Structured Deal Publishing",
      detail:
        "One submission flow covering store, pricing, coupon codes, and up to six images, with every deal tracked through a clear moderation pipeline from pending to live.",
    },
    {
      icon: "/d&osolution2.svg",
      title: "Community-Driven Curation",
      detail:
        "Voting, comments, wishlists, and sharing on every approved deal, so the community itself surfaces the best offers instead of an editorial team.",
    },
    {
      icon: "/d&osolution3.svg",
      title: "Full Admin and Store Infrastructure",
      detail:
        "Verified stores, standalone coupon listings, and a dedicated admin panel for approvals, reports, and category management, with rule violators blocked from submitting.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Deal Submission",
      description:
        "Store, pricing, coupon, and media published in a single structured flow.",
      image: "/D&O Key Features/d&oKeyFeature1.webp",
    },
    {
      title: "2. Moderation Visibility",
      description:
        "Publishers see exactly where every submission stands, live, under review, or rejected.",
      image: "/D&O Key Features/d&oKeyFeature2.webp",
    },
    {
      title: "3. Community Engagement",
      description:
        "Voting, comments, wishlists, and sharing on all approved listings.",
      image: "/D&O Key Features/d&oKeyFeature3.webp",
    },
    {
      title: "4. Stores and Coupons",
      description:
        "Deals linked to verified stores, with coupons as standalone listings.",
      image: "/D&O Key Features/d&oKeyFeature4.webp",
    },
    {
      title: "5. Social Login",
      description:
        "Email, Google, and Facebook sign-in with automatic session renewal.",
      image: "/D&O Key Features/d&oKeyFeature5.webp",
    },
    {
      title: "6. Admin Panel",
      description:
        "Deal approvals, store management, user reports, and category control in one place.",
      image: "/D&O Key Features/d&oKeyFeature6.webp",
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
