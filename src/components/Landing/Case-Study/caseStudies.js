import swervDashboard from "../../../images/swervDashboard.webp";
import togatherDashboard from "../../../images/togatherDashboard.webp";
import sbaloansDashboard from "../../../images/sbaloansDashboard.webp";
import easybarDashboard from "../../../images/easybarDashboard.webp";
import lfgoDashboard from "../../../images/lfgoDashboard.webp";
import ehhDashboard from "../../../images/ehhDashboard.webp";
import goDashboard from "../../../images/goDashboard.webp";
import ofertasDashboard from "../../../images/ofertasDashboard.webp";
import hakroDashboard from "../../../images/hakroDasboard.webp";
import qareebDashboard from "../../../images/qareebDashboard.webp";
import mrsellernoteDashboard from "../../../images/msnDashboard.webp";
import quantaDashboard from "../../../images/quantaDashboard.webp";
import mediaInfraDashboard from "../../../images/mediaInfraDashboard.webp";

export const caseStudies = [
  {
    slug: "go",
    dashboardImg: goDashboard,
    logo: "/go.svg",
    logoAlt: "GO",
    tag: "Machine Learning",
    category: "saas-software",
    industry: "Marketing",
    services: ["AI & Machine Learning", "SaaS Platforms"],
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "AI-Powered Marketing Automation Platform",
    description:
      "An AI-powered platform that automates digital marketing—handling content, publishing, and ads to help agencies grow.",
    hasDetailPage: true,
    testimonial: {
      quote: "Omer and his team put in significant effort and delivered many positive contributions.",
      personName: "Louis-Antoine",
      personRole: "GoAgents Founder & CEO",
      stat1: { value: "6 wks", label: "To first release" },
      stat2: { value: "3.4×", label: "Content output" },
    },
  },
  {
    slug: "media-infrastructure",
    dashboardImg: mediaInfraDashboard,
    logo: null,
    logoAlt: "Media Infrastructure",
    tag: "Media Infrastructure",
    category: "saas-software",
    industry: "Media",
    services: ["AI & Machine Learning", "SaaS Platforms"],
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "AI-powered platform for searching broadcast video archives",
    description:
      "AI platform makes decades of broadcast video searchable via transcripts, faces, chapters, and NLP.",
    hasDetailPage: true,
  },
  {
    slug: "hakro",
    dashboardImg: hakroDashboard,
    logo: "/hakro.svg",
    logoAlt: "HAKRO",
    tag: "E-Commerce",
    category: "saas-software",
    industry: "Retail",
    services: ["E-Commerce", "Custom Software"],
    relatedService: { slug: "ui-ux-design", label: "UI/UX Design" },
    title: "Embedded E-commerce Platform for Seller Networks",
    description:
      "Platform enabling dealers to buy bulk products directly from website sessions.",
    hasDetailPage: true,
    testimonial: {
      quote: "Omer provided us with excellent support for our Next.js projects. I continue to work with him on other projects. Best regards from Germany!",
      personName: "Michael Neuhauser",
      personRole: "Head of Digital",
      stat1: { value: "5 wks", label: "To live checkout" },
      stat2: { value: "+28%", label: "Checkout completion" },
    },
  },
  {
    slug: "sbaloans",
    dashboardImg: sbaloansDashboard,
    logo: "/sbaloans.svg",
    logoAlt: "sbaloansHQ",
    tag: "SaaS",
    category: "fintech",
    industry: "Finance",
    services: ["SaaS Platforms", "Custom Software"],
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Streamlines and automates loan processing",
    description:
      "SBA Loans HQ streamlines SBA loans with centralized documents, tracking, and communication.",
    hasDetailPage: true,
    testimonial: {
      quote: "Usama and the Arithmiks team took our web app from a stalled project to a finished product that runs our entire day-to-day operations. I highly recommend them.",
      personName: "Zachary Renta",
      personRole: "Founder",
      stat1: { value: "7 wks", label: "To handover" },
      stat2: { value: "100%", label: "Run by their team" },
    },
  },
  {
    slug: "easybar",
    dashboardImg: easybarDashboard,
    logo: "/easybar.svg",
    logoAlt: "EASY-BAR",
    tag: "Software",
    category: "contech",
    industry: "Construction",
    services: ["Custom Software"],
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Automates rebar design and ordering",
    description:
      "Easybar lets buyers design iron bars and suppliers print the orders for automated production.",
    hasDetailPage: true,
    testimonial: {
      quote: "Omer is a professional, reliable, and kind person. Working with him was great! He was available for questions, gave professional answers, and the results are beautiful.",
      personName: "Ron Balmas",
      personRole: "Lead Product Manager and Co-Founder",
      stat1: { value: "6 wks", label: "To first release" },
      stat2: { value: "+34%", label: "Repeat orders" },
    },
  },
  {
    slug: "qareeb",
    dashboardImg: qareebDashboard,
    logo: "/qareeb.svg",
    logoAlt: "Qareeb",
    tag: "SaaS",
    category: "saas-software",
    industry: "Productivity",
    services: ["AI & Machine Learning", "SaaS Platforms"],
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "Turns meetings into AI-searchable knowledge",
    description:
      "An AI platform that records and transcribes conversations into a searchable knowledge base.",
    hasDetailPage: true,
  },
  {
    slug: "mrsellernote",
    dashboardImg: mrsellernoteDashboard,
    logo: "/icons/msn-logo.svg",
    logoAlt: "Mr. Seller Note",
    tag: "Web App",
    category: "fintech",
    industry: "Finance",
    services: ["Custom Software", "SaaS Platforms"],
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Automates multi-party loan payment processing",
    description:
      "An automated loan platform that tracks and processes payments from creation to settlement.",
    hasDetailPage: true,
  },
  {
    slug: "quanta",
    dashboardImg: quantaDashboard,
    logo: "/quanta.svg",
    logoAlt: "Quanta",
    tag: "BI Platform",
    category: "saas-software",
    industry: "Productivity",
    services: ["AI & Machine Learning", "Data & Analytics"],
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "Query your database in plain English conversations",
    description:
      "A multi-tenant BI platform that lets any team query their own database in plain English, no SQL required.",
    hasDetailPage: true,
  },
  {
    slug: "lfgo",
    dashboardImg: lfgoDashboard,
    logo: "/lfgo.svg",
    logoAlt: "LFGO",
    tag: "Web3",
    category: "fintech",
    industry: "Web3",
    services: ["Custom Software", "SaaS Platforms"],
    relatedService: { slug: "web-app-development", label: "Web App Development" },
    title: "Simplifies cross-chain token creation",
    description:
      "A Web3 platform to create, launch, and trade tokens with seamless minting and wallet integration.",
    hasDetailPage: true,
  },
  {
    slug: "expat",
    dashboardImg: ehhDashboard,
    logo: "/ehh.svg",
    logoAlt: "Expat Haven Hub",
    tag: "Web App",
    category: "saas-software",
    industry: "Travel & Relocation",
    services: ["AI & Machine Learning", "Custom Software"],
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "Unifies relocation research, decisions, and community",
    description:
      "A relocation platform combining AI-powered research, country comparisons, and a verified expat community.",
    hasDetailPage: true,
  },
  {
    slug: "ofertas",
    dashboardImg: ofertasDashboard,
    logo: "/ofertas.svg",
    logoAlt: "Ofertas",
    tag: "Affiliation Market",
    category: "saas-software",
    industry: "Retail",
    services: ["E-Commerce", "Data & Analytics"],
    relatedService: { slug: "web-app-development", label: "Web App Development" },
    title: "Community-Driven Deal & Coupon Discovery Platform",
    description:
      "Platform showcasing the best affiliate deals and offers to help users save more and shop smarter.",
    hasDetailPage: true,
  },
  {
    slug: "swerv",
    dashboardImg: swervDashboard,
    logo: "/swerv.svg",
    logoAlt: "Swerv Automotive",
    tag: "SaaS",
    category: "saas-software",
    industry: "Automotive",
    services: ["SaaS Platforms", "Data & Analytics"],
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Automates smart vehicle acquisitions",
    description:
      "A SaaS platform for car dealerships to automate acquisitions, centralize data, and optimize sales.",
    hasDetailPage: true,
    testimonial: {
      quote: "Thank you brother! We are all on a mission to succeed with the project. I see that you guys have been doing great. I made a great decision choosing you!",
      personName: "Pierce Grimsley",
      personRole: "Founder",
      stat1: { value: "8 wks", label: "To production" },
      stat2: { value: "+41%", label: "Faster stock calls" },
    },
  },
  {
    slug: "togather",
    dashboardImg: togatherDashboard,
    logo: "/togather.svg",
    logoAlt: "Togather",
    tag: "Software",
    category: "saas-software",
    industry: "Nonprofit",
    services: ["Custom Software", "SaaS Platforms"],
    relatedService: { slug: "web-app-development", label: "Web App Development" },
    title: "Unifies community engagement, events, and donations",
    description:
      "Together is a platform for churches and NGOs to connect communities through events, donations, and engagement.",
    hasDetailPage: true,
  },
];

export default caseStudies;
