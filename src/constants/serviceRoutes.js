/**
 * Canonical /services/<slug> URLs — single source for nav, pages, and SEO.
 * Change slugs only with stakeholder approval and 301 redirects.
 */

export const SERVICE_ROUTES = [
  {
    slug: "web-app-development",
    label: "Web App Development",
    headline: "Web application development that scales with your business",
    intro:
      "We design and build secure, maintainable web applications—from internal tools to customer-facing products—using modern stacks and engineering practices that support growth.",
    seoTitle: "Web App Development - Arithmiks",
    seoDescription:
      "Custom web application development: scalable interfaces, reliable backends, and APIs aligned with your product and compliance goals.",
  },
  {
    slug: "mobile-app-development",
    label: "Mobile App Development",
    headline: "Native and cross-platform mobile apps your users rely on",
    intro:
      "From discovery to store release, we ship performant iOS and Android experiences with clear UX, offline-aware design, and maintainable codebases.",
    seoTitle: "Mobile App Development - Arithmiks",
    seoDescription:
      "Mobile app development for iOS and Android: UX, engineering, testing, and release support for consumer and enterprise products.",
  },
  {
    slug: "custom-software-development",
    label: "Custom Software Development",
    headline: "Custom software shaped around your workflows",
    intro:
      "We build tailored systems—integrations, line-of-business applications, and product extensions—that fit how your teams work, not the other way around.",
    seoTitle: "Custom Software Development - Arithmiks",
    seoDescription:
      "Bespoke software development: requirements, architecture, implementation, and long-term maintainability for business-critical systems.",
  },
  {
    slug: "ui-ux-design",
    label: "UI/UX Design",
    headline: "UI/UX design grounded in research and brand",
    intro:
      "User flows, interfaces, and design systems that reduce friction, improve conversion, and stay consistent across web and mobile touchpoints.",
    seoTitle: "UI/UX Design - Arithmiks",
    seoDescription:
      "UI and UX design services: user research, prototyping, visual design, and design systems for digital products.",
  },
  {
    slug: "devops",
    label: "DevOps",
    headline: "DevOps and delivery pipelines you can trust",
    intro:
      "CI/CD, observability, infrastructure as code, and release practices that shorten lead times while keeping production stable and auditable.",
    seoTitle: "DevOps Services - Arithmiks",
    seoDescription:
      "DevOps consulting and implementation: automation, cloud operations, monitoring, and secure deployment workflows.",
  },
  {
    slug: "ai-data-solutions",
    label: "AI & Data Solutions",
    headline: "AI and data solutions from pipeline to insight",
    intro:
      "Data preparation, modeling, MLOps-minded delivery, and visualization so stakeholders can act on reliable metrics and intelligent features.",
    seoTitle: "AI & Data Solutions - Arithmiks",
    seoDescription:
      "AI and data engineering: preprocessing, modeling, analytics, and integration of intelligent capabilities into your products.",
  },
  {
    slug: "ai-discovery-strategy-roadmap",
    label: "AI Discovery, Strategy & Roadmap",
    headline: "AI discovery and strategy that ends in a roadmap you can ship",
    intro:
      "We test what your data can actually support, rank the AI opportunities by impact and effort, and hand you a staged roadmap with clear success measures before any build begins.",
    seoTitle: "AI Discovery, Strategy & Roadmap - Arithmiks",
    seoDescription:
      "AI discovery and strategy: data readiness checks, use-case prioritisation, and a staged delivery roadmap before you commit to a build.",
  },
  {
    slug: "ai-mvp-development",
    label: "AI MVP Development",
    headline: "AI MVP development that gets a working product in front of users",
    intro:
      "We scope the smallest AI-powered product that proves your idea, build it in inspectable stages, and launch it so real usage, not guesswork, shapes what comes next.",
    seoTitle: "AI MVP Development - Arithmiks",
    seoDescription:
      "AI MVP development: scope, build, and launch an AI-powered minimum viable product quickly, with senior engineers and staged delivery.",
  },
  {
    slug: "ai-agents-workflows",
    label: "AI Agents & Workflows",
    headline: "AI agents and workflows that take real work off your team",
    intro:
      "We design agents and multi-step workflows that connect to your tools and data, with guardrails, human review where it matters, and monitoring once they are live.",
    seoTitle: "AI Agents & Workflows - Arithmiks",
    seoDescription:
      "AI agent and workflow development: tool-using agents, orchestration, guardrails, and monitoring integrated with your existing systems.",
  },
  {
    slug: "ai-automation",
    label: "AI Automation",
    headline: "AI automation for the manual work slowing your business down",
    intro:
      "We automate repetitive, document-heavy and data-entry processes with AI, integrate the result into the systems you already use, and measure the hours it gives back.",
    seoTitle: "AI Automation - Arithmiks",
    seoDescription:
      "AI automation services: automate manual, document-heavy business processes and integrate them with your existing tools.",
  },
];

/** @param {string} slug */
export const servicePath = (slug) => `/services/${slug}`;

/** @param {string} slug */
export const getServiceBySlug = (slug) =>
  SERVICE_ROUTES.find((s) => s.slug === slug) ?? null;
