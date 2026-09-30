import quantaThumb from "../images/quanta-product-thumb.webp";
import QuantaMark from "../images/quanta-mark.svg";
import clauselensThumb from "../images/clauselens-product-thumb.webp";
import ClauseLensMark from "../images/clauselens-mark.svg";

/**
 * "Our Products" mega-menu content. Quanta and ClauseLens are our in-house
 * products, each with its own case study page — no separate product page
 * exists, so the "Read case study" link points straight there (same "link to what's real instead of a placeholder" fix
 * as Careers). `liveUrl` is the running product, opened in a new tab.
 *
 * `logo` is the SVG imported as a React component (gatsby-plugin-react-svg);
 * `thumb` is the product screenshot shown at the top of the card.
 */
export const PRODUCTS = [
  {
    name: "Quanta",
    tag: "BI Platform",
    description:
      "Multi-tenant BI. Any team queries its own database in plain English, no SQL.",
    thumb: quantaThumb,
    logo: QuantaMark,
    logoHeight: "clamp(25px, 1.8vw, 31px)",
    caseStudyUrl: "/case-studies/quanta",
    liveUrl: "https://quanta.arithmiks.com/",
    internal: true,
  },
  {
    name: "ClauseLens",
    tag: "AI",
    description:
      "AI contract review that flags risks and extracts key terms in about a minute, each traced to its source sentence.",
    thumb: clauselensThumb,
    logo: ClauseLensMark,
    logoHeight: "clamp(20px, 1.5vw, 24px)",
    caseStudyUrl: "/case-studies/clauselens",
    liveUrl: "https://clauselens.arithmiks.com",
    internal: true,
  },
];
