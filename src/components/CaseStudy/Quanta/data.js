import React from "react";

const ASSET_ROOT = "/case-studies/quanta";
const tech = (name, file) => ({ name, icon: `${ASSET_ROOT}/tech/${file}.png` });

export const heroData = {
  category: "Product · BI Platform",
  logoSrc: "/quanta.svg",
  logoAlt: "Quanta",
  headline: { plain: "Your database, answering in", highlight: "plain English" },
  caption:
    "A multi-tenant BI platform that lets any team query their own database in plain English, no SQL required.",
  liveUrl: "https://quanta.arithmiks.com",
  screenshot: true,
  heroImageSrc: `${ASSET_ROOT}/hero.webp`,
  heroImageAlt: "Quanta dashboard: charts and tables built from plain-English questions",
};

export const techStackData = {
  technologies: [
    tech("Python", "python"),
    tech("FastAPI", "fastapi"),
    tech("PostgreSQL", "postgresql"),
    tech("React", "react"),
    tech("TypeScript", "typescript"),
    tech("OpenAI", "openai"),
    tech("Anthropic", "anthropic"),
    tech("Docker", "docker"),
  ],
  specialIconNames: [],
};

export const overviewData = {
  detail:
    "Quanta is a multi-tenant BI platform for teams without a SQL expert. Each org gets its own Postgres/MySQL workspace, roles, AI credits, and plain-English queries. Live in production, security tested.",
  framed: true,
  imageSrc: `${ASSET_ROOT}/overview.webp`,
  imageAlt: "Quanta schema view: connected tables and their relationships",
  problemData: {
    title: "The Problem",
    text: "Teams face two bad options: enterprise BI—powerful but per-seat priced, needing a semantic model before the first chart—or raw SQL clients—free, immediate, but only usable by schema experts, leaving others waiting. Quanta keeps the directness of querying your own database, minus the SQL requirement.",
  },
};

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
  framed: true,
  features: [
    {
      title: "1. Conversational Query Assistant",
      description:
        "Ask in plain English, get validated SQL, results, and a suggested chart with one click to pin it to a dashboard.",
      image: `${ASSET_ROOT}/feature-assistant.webp`,
    },
    {
      title: "2. AI Dashboard Generation",
      description:
        "Complete widgets proposed and pre-verified against the real schema before they're ever offered.",
      image: `${ASSET_ROOT}/feature-generation.webp`,
    },
    {
      title: "3. Dashboard Builder",
      description:
        "Resizable widgets, 11 visualization types, tabs, and export to image or PDF.",
      image: `${ASSET_ROOT}/feature-builder.webp`,
    },
    {
      title: "4. Secure Connections",
      description:
        "Credentials encrypted at rest, with private databases reached safely through an SSH bastion.",
      image: `${ASSET_ROOT}/feature-connections.webp`,
    },
    {
      title: "5. Public Sharing",
      description:
        "Any dashboard publishes to a read-only link with no account required and credentials never touching the client.",
      image: `${ASSET_ROOT}/feature-sharing.webp`,
    },
    {
      title: "6. Workspaces and Roles",
      description:
        "Per-organization workspaces with owner and member roles and AI credit limits.",
      image: `${ASSET_ROOT}/feature-members.webp`,
    },
  ],
};
