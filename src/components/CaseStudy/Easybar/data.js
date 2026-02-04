import React from "react";

export const heroData = {
  category: "Web Application / Tool",
  logoSrc: "/easybar.svg",
  logoAlt: "EASY-BAR",
  caption: (
    <>
      A web platform that simplifies rebar design, vendor
      <br />
      quoting, and seamless online ordering.
    </>
  ),
  heroImageSrc: "/easybarMemorandum.png",
  heroImageAlt: "Easybar Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "Python", icon: "/Tech Stack/python.svg" },
    { name: "MySQL", icon: "/Tech Stack/mysql.svg" },
    { name: "Celery", icon: "/Tech Stack/celery.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "Docker", icon: "/Tech Stack/docker.svg" },
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
    "EasyBar is a web-based platform that digitizes and automates the design, quotation, and ordering of iron rebars, connecting buyers and vendors in one streamlined workflow.",
  imageSrc: "/easybarFinancialSummary.png",
  problemData: {
    title: "The Problem",
    text: "Rebar procurement relied on manual, fragmented processes that caused delays, limited design flexibility, and poor coordination between buyers and vendors. EasyBar solves this by centralizing sketches, quotations, and orders into a single, efficient digital system.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> rebuilt EasyBar into a fully automated,
      design-to-order platform that digitized rebar sketching, streamlined vendor
      collaboration, and scaled manufacturing workflows end-to-end.
    </>
  ),
  solutions: [
    {
      icon: "/easybarsolution1.svg",
      title: "Interactive Digital Design System",
      detail:
        "Arithmiks introduced a real-time 2D sketching experience that allows buyers to design bars, nets, and cages with precision and instant visual feedback.",
    },
    {
      icon: "/easybarsolution2.svg",
      title: "Automated Quotation & Vendor Workflow",
      detail:
        "The platform automated quote generation, order confirmation, and machinery-ready ticket delivery, enabling seamless collaboration between buyers and vendors.",
    },
    {
      icon: "/easybarsolution3.svg",
      title: "Centralized Admin & Scalable Infrastructure",
      detail:
        "A robust admin dashboard and cloud-ready architecture were built to manage users, subscriptions, orders, and reports at scale.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Dynamic Bar, Net, and Cage Design Tools:",
      description:
        "2D sketch editor with adjustable parameters for precision and speed.",
      image: "/Easybar Key Features/easybarKeyFeature1.png",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Omer is a professional, reliable, and kind person. Working with him was great! Omer was available for any question, gave professional answers, was patient with the project and the results are beautiful. I highly recommend working with him.",
  clientImageSrc: "/easyBarOwner.png",
  clientName: "Ron Balmas",
  clientTitle: "EasyBar Loans Founder & CEO",
};

