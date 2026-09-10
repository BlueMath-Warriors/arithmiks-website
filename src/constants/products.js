import quantaThumb from "../images/quanta-product-thumb.png";
import QuantaMark from "../images/quanta-mark.svg";

/**
 * "Our Products" mega-menu content. Quanta is the one in-house product we
 * have today, with its own case study page at /case-studies/quanta — no
 * separate product page exists, so the "Read case study" link points
 * straight there (same "link to what's real instead of a placeholder" fix
 * as Careers).
 *
 * `logo` is the SVG imported as a React component (gatsby-plugin-react-svg);
 * `thumb` is the product screenshot shown at the top of the card. The
 * design also has an external "visit site" icon per card, omitted here
 * because the design's own source marks those hosts as placeholders
 * ("swap for the real hosts before launch") and no public Quanta URL exists.
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
    internal: true,
  },
];
