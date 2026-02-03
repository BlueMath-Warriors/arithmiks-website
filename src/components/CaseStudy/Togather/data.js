import React from "react";

export const heroData = {
  category: "Web Application / Tool / SaaS",
  logoSrc: "/togather.svg",
  logoAlt: "Togather",
  caption: (
    <>
      Togather is a platform for churches and NGOs to connect communities
      <br />
      through events, donations, and engagement.
    </>
  ),
  heroImageSrc: "/togatherMemorandum.png",
  heroImageAlt: "Togather Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "Python", icon: "/Tech Stack/python.svg" },
    { name: "MySQL", icon: "/Tech Stack/mysql.svg" },
    { name: "GSAP", icon: "/Tech Stack/gsap.svg" },
    { name: "Netlify", icon: "/Tech Stack/netlify.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "Amazon DynamoDB", icon: "/Tech Stack/aws-dynamodb.svg" },
    { name: "Stripe", icon: "/Tech Stack/stripe.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "Notion", icon: "/Tech Stack/notion.svg" },
    { name: "Celery", icon: "/Tech Stack/celery.svg" },
    { name: "Docker", icon: "/Tech Stack/docker.svg" },
    { name: "Redux", icon: "/Tech Stack/redux.svg" },
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
    "Togather is a community engagement platform that helps churches and NGOs connect members, manage activities, and drive participation through a centralized digital hub.",
  imageSrc: "/togatherFinancialSummary.png",
  problemData: {
    title: "The Problem",
    text: "Community organizations relied on scattered tools for communication, events, and donations, resulting in low engagement and poor visibility. Togather solves this by unifying community management into one accessible and easy-to-use platform.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed a unified community engagement platform
      that centralized communication, simplified participation, and strengthened
      digital connections for organizations at scale.
    </>
  ),
  solutions: [
    {
      icon: "/togathersolution1.svg",
      title: "Centralized Community Hub",
      detail:
        "Arithmiks brought events, member management, and communication into a single platform, eliminating fragmented tools and improving organizational visibility.",
    },
    {
      icon: "/togathersolution2.svg",
      title: "Seamless Events & Donations Experience",
      detail:
        "The platform streamlined event registration and secure online donations, making participation and giving intuitive for members and transparent for administrators.",
    },
    {
      icon: "/togathersolution3.svg",
      title: "Engagement-Driven Insights & Scalability",
      detail:
        "Real-time reporting, milestone tracking, and a scalable architecture empowered leaders to measure impact and grow their communities confidently.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Member Management:",
      description:
        "Tools for adding, tracking, and communicating with members and groups.",
      image: "/Togather Key Features/togartherKeyFeature1.png",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Omer is a professional, reliable, and kind person. Working with him was great! Omer was available for any question, gave professional answers, was patient with the project and the results are beautiful. I highly recommend working with him.",
  clientImageSrc: "/sbaOwner.jpeg",
  clientName: "Zachary Renta",
  clientTitle: "SBA Loans Founder & CEO",
};

