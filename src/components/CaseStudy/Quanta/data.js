import React from "react";

export const getHeroData = (images) => ({
  category: "Data Analytics / BI Platform",
  logoSrc: "/quanta.svg",
  logoAlt: "Quanta",
  caption: (
    <>
      A multi-tenant BI platform that lets any team query their own
      <br />database in plain English, no SQL required.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Quanta Dashboard",
});

export const techStackData = {
  technologies: [
    { name: "Python", icon: "/Tech Stack/python.svg" },
    { name: "FastAPI", icon: "/Tech Stack/fastapi.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "TypeScript", icon: "/Tech Stack/typescript.svg" },
    { name: "OpenAI", icon: "/Tech Stack/openai.svg" },
    { name: "Anthropic", icon: "/Tech Stack/anthropic.svg" },
    { name: "Docker", icon: "/Tech Stack/docker.svg" },
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
    "Quanta is a multi-tenant BI platform for teams without a SQL expert. Each org gets its own Postgres/MySQL workspace, roles, AI credits, and plain-English queries. Live in production, security tested.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Teams face two bad options: enterprise BI—powerful but per-seat priced, needing a semantic model before the first chart—or raw SQL clients—free, immediate, but only usable by schema experts, leaving others waiting. Quanta keeps the directness of querying your own database, minus the SQL requirement.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed and delivered a conversational BI
      platform safe enough to run against a real production database.
    </>
  ),
  solutions: [
    {
      icon: "/quantasolution1.svg",
      title: "Validated, Read-Only Query Execution",
      detail:
        "Every AI query is parsed structurally and rejected on any mutation, then run inside a read-only transaction—so a parser regression alone can never open a write path.",
    },
    {
      icon: "/quantasolution2.svg",
      title: "Secure Access to Private Databases",
      detail:
        "Private-subnet databases connect via an SSH bastion—strict security policy on one side, normal access on the other—making private DBs the default, not a workaround.",
    },
    {
      icon: "/quantasolution3.svg",
      title: "Cost-Efficient AI Planning at Scale",
      detail:
        "A compact schema representation ties AI planning costs to actual usage—not database size—cutting payload size ~60% with zero disruption to existing customers.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Conversational Query Assistant",
      description:
        "Ask in plain English, get validated SQL, results, and a suggested chart with one click to pin it to a dashboard.",
      image: "/Quanta Key Features/quantaKeyFeature1.webp",
    },
    {
      title: "2. AI Dashboard Generation",
      description:
        "Complete widgets proposed and pre-verified against the real schema before they're ever offered.",
      image: "/Quanta Key Features/quantaKeyFeature2.webp",
    },
    {
      title: "3. Dashboard Builder",
      description:
        "Resizable widgets, 11 visualization types, tabs, and export to image or PDF.",
      image: "/Quanta Key Features/quantaKeyFeature3.webp",
    },
    {
      title: "4. Secure Connections",
      description:
        "Credentials encrypted at rest, with private databases reached safely through an SSH bastion.",
      image: "/Quanta Key Features/quantaKeyFeature4.webp",
    },
    {
      title: "5. Public Sharing",
      description:
        "Any dashboard publishes to a read-only link with no account required and credentials never touching the client.",
      image: "/Quanta Key Features/quantaKeyFeature5.webp",
    },
    {
      title: "6. Workspaces and Roles",
      description:
        "Per-organization workspaces with owner and member roles and AI credit limits.",
      image: "/Quanta Key Features/quantaKeyFeature6.webp",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};
