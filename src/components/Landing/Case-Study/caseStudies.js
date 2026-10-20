import swervDashboard from "../../../images/swervDashboard.webp";
import swervDashboardMid from "../../../images/swervDashboard-1100.webp";
import swervDashboardSmall from "../../../images/swervDashboard-750.webp";
import togatherDashboard from "../../../images/togatherDashboard.webp";
import togatherDashboardMid from "../../../images/togatherDashboard-1100.webp";
import togatherDashboardSmall from "../../../images/togatherDashboard-750.webp";
import sbaloansDashboard from "../../../images/sbaloansDashboard.webp";
import sbaloansDashboardMid from "../../../images/sbaloansDashboard-1100.webp";
import sbaloansDashboardSmall from "../../../images/sbaloansDashboard-750.webp";
import easybarDashboard from "../../../images/easybarDashboard.webp";
import easybarDashboardMid from "../../../images/easybarDashboard-1100.webp";
import easybarDashboardSmall from "../../../images/easybarDashboard-750.webp";
import lfgoDashboard from "../../../images/lfgoDashboard.webp";
import lfgoDashboardMid from "../../../images/lfgoDashboard-1100.webp";
import lfgoDashboardSmall from "../../../images/lfgoDashboard-750.webp";
import ehhDashboard from "../../../images/ehhDashboard.webp";
import ehhDashboardMid from "../../../images/ehhDashboard-1100.webp";
import ehhDashboardSmall from "../../../images/ehhDashboard-750.webp";
import goDashboard from "../../../images/goDashboard.webp";
import goDashboardMid from "../../../images/goDashboard-1100.webp";
import goDashboardSmall from "../../../images/goDashboard-750.webp";
import ofertasDashboard from "../../../images/ofertasDashboard.webp";
import ofertasDashboardMid from "../../../images/ofertasDashboard-1100.webp";
import ofertasDashboardSmall from "../../../images/ofertasDashboard-750.webp";
import qareebDashboard from "../../../images/qareebDashboard.webp";
import qareebDashboardMid from "../../../images/qareebDashboard-1100.webp";
import qareebDashboardSmall from "../../../images/qareebDashboard-750.webp";
import mrsellernoteDashboard from "../../../images/msnDashboard.webp";
import mrsellernoteDashboardMid from "../../../images/msnDashboard-1100.webp";
import mrsellernoteDashboardSmall from "../../../images/msnDashboard-750.webp";
import quantaDashboard from "../../../images/quantaDashboard.webp";
import quantaDashboardMid from "../../../images/quantaDashboard-1100.webp";
import quantaDashboardSmall from "../../../images/quantaDashboard-750.webp";
import clauselensDashboard from "../../../images/clauselensDashboard.webp";
import mediaInfraDashboard from "../../../images/mediaInfraDashboard.webp";
import mediaInfraDashboardMid from "../../../images/mediaInfraDashboard-1100.webp";
import mediaInfraDashboardSmall from "../../../images/mediaInfraDashboard-750.webp";

// Card screenshots ship in three widths so phones and small cards don't pull the
// 1500px file; DASHBOARD_IMAGE_SIZES is an upper bound of the card's rendered
// width at each breakpoint so the browser never picks a too-small candidate.
const dashboardSrcSet = (small, mid, large) => `${small} 750w, ${mid} 1100w, ${large} 1500w`;

export const DASHBOARD_IMAGE_SIZES = "(min-width: 1024px) 723px, (min-width: 768px) 700px, 92vw";

export const caseStudies = [
  {
    slug: "go",
    dashboardImg: goDashboard,
    dashboardSrcSet: dashboardSrcSet(goDashboardSmall, goDashboardMid, goDashboard),
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
    dashboardSrcSet: dashboardSrcSet(mediaInfraDashboardSmall, mediaInfraDashboardMid, mediaInfraDashboard),
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
    slug: "sbaloans",
    dashboardImg: sbaloansDashboard,
    dashboardSrcSet: dashboardSrcSet(sbaloansDashboardSmall, sbaloansDashboardMid, sbaloansDashboard),
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
    dashboardSrcSet: dashboardSrcSet(easybarDashboardSmall, easybarDashboardMid, easybarDashboard),
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
    dashboardSrcSet: dashboardSrcSet(qareebDashboardSmall, qareebDashboardMid, qareebDashboard),
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
    dashboardSrcSet: dashboardSrcSet(mrsellernoteDashboardSmall, mrsellernoteDashboardMid, mrsellernoteDashboard),
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
    dashboardSrcSet: dashboardSrcSet(quantaDashboardSmall, quantaDashboardMid, quantaDashboard),
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
    slug: "clauselens",
    dashboardImg: clauselensDashboard,
    logo: "/case-studies/clauselens/logo.svg",
    logoAlt: "ClauseLens",
    tag: "AI",
    category: "saas-software",
    industry: "Legal",
    services: ["AI & Machine Learning", "SaaS Platforms"],
    relatedService: { slug: "ai-data-solutions", label: "AI & Data Solutions" },
    title: "Contract review you can check line by line",
    description:
      "AI contract review that flags risks and extracts key terms in about a minute, with every finding traced to its source sentence.",
    hasDetailPage: true,
  },
  {
    slug: "lfgo",
    dashboardImg: lfgoDashboard,
    dashboardSrcSet: dashboardSrcSet(lfgoDashboardSmall, lfgoDashboardMid, lfgoDashboard),
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
    dashboardSrcSet: dashboardSrcSet(ehhDashboardSmall, ehhDashboardMid, ehhDashboard),
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
    dashboardSrcSet: dashboardSrcSet(ofertasDashboardSmall, ofertasDashboardMid, ofertasDashboard),
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
    dashboardSrcSet: dashboardSrcSet(swervDashboardSmall, swervDashboardMid, swervDashboard),
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
    dashboardSrcSet: dashboardSrcSet(togatherDashboardSmall, togatherDashboardMid, togatherDashboard),
    logo: "/togather.svg",
    logoAlt: "Togather",
    tag: "Software",
    category: "saas-software",
    industry: "Nonprofit",
    services: ["Custom Software", "SaaS Platforms"],
    relatedService: { slug: "web-app-development", label: "Web App Development" },
    title: "Unifies community engagement, events, and donations",
    description:
      "Togather is a platform for churches and NGOs to connect communities through events, donations, and engagement.",
    hasDetailPage: true,
  },
];

export default caseStudies;
