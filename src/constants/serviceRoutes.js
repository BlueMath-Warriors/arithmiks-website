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
];

/** @param {string} slug */
export const servicePath = (slug) => `/services/${slug}`;

/** @param {string} slug */
export const getServiceBySlug = (slug) =>
  SERVICE_ROUTES.find((s) => s.slug === slug) ?? null;
