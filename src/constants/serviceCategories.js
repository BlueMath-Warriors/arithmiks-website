/**
 * Groups every capability we offer (including the ones without a dedicated
 * page) under the same four categories used in the navbar's original
 * services flyout and the homepage "What We Do" section. Keep these three
 * in sync when a capability is added, renamed, or gets its own page.
 */
import { SERVICE_ROUTES } from "./serviceRoutes";

const findRoute = (slug) => SERVICE_ROUTES.find((route) => route.slug === slug);

export const SERVICE_CATEGORIES = [
  {
    slug: "software-development",
    title: "Software Development",
    description: "End-to-end engineering for web, mobile, and custom platforms.",
    icon: "code",
    items: [
      { type: "flagship", route: findRoute("web-app-development") },
      { type: "flagship", route: findRoute("mobile-app-development") },
      { type: "flagship", route: findRoute("custom-software-development") },
      { type: "flagship", route: findRoute("ui-ux-design") },
      { type: "flagship", route: findRoute("devops") },
      {
        type: "capability",
        label: "Software Quality Assurance",
        description: "Manual and automated testing that catches issues before your users do.",
      },
    ],
  },
  {
    slug: "data-and-ai",
    title: "Data & AI",
    description: "From raw data to production-ready intelligence.",
    icon: "cpu",
    items: [
      { type: "flagship", route: findRoute("ai-data-solutions") },
      {
        type: "capability",
        label: "Data Pre-Processing",
        description: "Clean, structured, analysis-ready pipelines built from messy raw sources.",
      },
      {
        type: "capability",
        label: "Data Modeling",
        description: "Statistical and ML models tuned to your data and business questions.",
      },
      {
        type: "capability",
        label: "Results & Visualization",
        description: "Dashboards and reports that turn model output into decisions.",
      },
    ],
  },
  {
    slug: "solutions",
    title: "Solutions",
    description: "Infrastructure, support, and delivery that keep teams moving.",
    icon: "lamp",
    items: [
      {
        type: "capability",
        label: "Cloud Infrastructure Management",
        description: "Provisioning, scaling, and securing cloud environments on AWS, Azure, or GCP.",
      },
      {
        type: "capability",
        label: "Project Management",
        description: "Dedicated PM support keeping delivery on scope, on budget, and on time.",
      },
      {
        type: "capability",
        label: "Technical Support",
        description: "Ongoing maintenance and support after launch, so nothing breaks quietly.",
      },
      {
        type: "capability",
        label: "Digital Transformation",
        description: "Modernizing legacy processes and systems into connected digital workflows.",
      },
    ],
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    description: "Discovery-to-MVP work that gets ideas into users' hands.",
    icon: "setting",
    items: [
      {
        type: "capability",
        label: "Product Discovery",
        description: "Research and validation that de-risk what you build before you build it.",
      },
      {
        type: "capability",
        label: "Interactive Prototyping",
        description: "Clickable prototypes for testing flows and pitching stakeholders early.",
      },
      {
        type: "capability",
        label: "MVP",
        description: "A lean, launchable first version scoped to prove the idea fast.",
      },
      {
        type: "capability",
        label: "Software Re-engineering",
        description: "Rebuilding or modernizing aging systems without stalling the business.",
      },
    ],
  },
];
