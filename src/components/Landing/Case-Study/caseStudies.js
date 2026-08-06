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

export const caseStudies = [
  {
    slug: "go",
    dashboardImg: goDashboard,
    logo: "/go.svg",
    logoAlt: "GO",
    tag: "Machine Learning",
    category: "saas-software",
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "AI-Powered Marketing Automation Platform",
    description:
      "An AI-powered platform that automates digital marketing—handling content, publishing, and ads to help agencies grow.",
    hasDetailPage: true,
  },
  {
    slug: "swerv",
    dashboardImg: swervDashboard,
    logo: "/swerv.svg",
    logoAlt: "Swerv Automotive",
    tag: "SaaS",
    category: "saas-software",
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Automates smart vehicle acquisitions",
    description:
      "A SaaS platform for car dealerships to automate acquisitions, centralize data, and optimize sales.",
    hasDetailPage: true,
  },
  {
    slug: "togather",
    dashboardImg: togatherDashboard,
    logo: "/togather.svg",
    logoAlt: "Togather",
    tag: "Software",
    category: "saas-software",
    relatedService: { slug: "web-app-development", label: "Web App Development" },
    title: "Unifies community engagement, events, and donations",
    description:
      "Together is a platform for churches and NGOs to connect communities through events, donations, and engagement.",
    hasDetailPage: true,
  },
  {
    slug: "sbaloans",
    dashboardImg: sbaloansDashboard,
    logo: "/sbaloans.svg",
    logoAlt: "sbaloansHQ",
    tag: "SaaS",
    category: "fintech",
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Streamlines and automates loan processing",
    description:
      "SBA Loans HQ streamlines SBA loans with centralized documents, tracking, and communication.",
    hasDetailPage: true,
  },
  {
    slug: "easybar",
    dashboardImg: easybarDashboard,
    logo: "/easybar.svg",
    logoAlt: "EASY-BAR",
    tag: "Software",
    category: "contech",
    relatedService: { slug: "custom-software-development", label: "Custom Software Development" },
    title: "Automates rebar design and ordering",
    description:
      "Easybar lets buyers design iron bars and suppliers print the orders for automated production.",
    hasDetailPage: true,
  },
  {
    slug: "lfgo",
    dashboardImg: lfgoDashboard,
    logo: "/lfgo.svg",
    logoAlt: "LFGO",
    tag: "Web3",
    category: "fintech",
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
    relatedService: { slug: "web-app-development", label: "Web App Development" },
    title: "Community-Driven Deal & Coupon Discovery Platform",
    description:
      "Platform showcasing the best affiliate deals and offers to help users save more and shop smarter.",
    hasDetailPage: true,
  },
  {
    slug: "hakro",
    dashboardImg: hakroDashboard,
    logo: "/hakro.svg",
    logoAlt: "HAKRO",
    tag: "E-Commerce",
    category: "saas-software",
    relatedService: { slug: "ui-ux-design", label: "UI/UX Design" },
    title: "Embedded E-commerce Platform for Seller Networks",
    description:
      "Platform enabling dealers to buy bulk products directly from website sessions.",
    hasDetailPage: true,
  },
  {
    slug: "qareeb",
    dashboardImg: qareebDashboard,
    logo: "/qareeb.svg",
    logoAlt: "Qareeb",
    tag: "SaaS",
    category: "saas-software",
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
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "Query your database in plain English conversations",
    description:
      "A multi-tenant BI platform that lets any team query their own database in plain English, no SQL required.",
    hasDetailPage: true,
  },
];

export default caseStudies;
