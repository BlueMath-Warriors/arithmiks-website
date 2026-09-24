import { caseStudies } from "../components/Landing/Case-Study/caseStudies.js";
import voiceGoLouis from "../images/homepage/voice-go-louis.png";
import voiceSbaZachary from "../images/homepage/voice-sba-zachary.png";
import voiceEasybarRon from "../images/homepage/voice-easybar-ron.png";
import voiceSwervPierce from "../images/homepage/voice-swerv-pierce.png";
import voiceDifactoIvan from "../images/homepage/voice-difacto-ivan.png";
import difactoLogo from "../images/homepage/voice-logo-difacto.png";

// Testimonial headshots extracted from the design source, keyed by the
// matching caseStudies.js slug.
const AVATARS = {
  go: voiceGoLouis,
  sbaloans: voiceSbaZachary,
  easybar: voiceEasybarRon,
  swerv: voiceSwervPierce,
};

// The public /*.svg logos (used elsewhere in flat, light-background
// contexts) are mostly plain black wordmarks — filtering one to grayscale
// still works (any colour crushes to a white silhouette), but removing the
// filter on hover just revealed black-on-black. The design instead ships a
// dedicated colour variant per client for these cards (white wordmark, its
// accent colour kept), used here as the ONE asset for both states: filtered
// to a white silhouette at rest, shown true-colour on hover.
const VOICE_LOGOS = {
  go: "/homepage/voice-logo-go-dark.svg",
  easybar: "/homepage/voice-logo-easybar-dark.svg",
  swerv: "/homepage/voice-logo-swerv-dark.svg",
};

// The design's testimonial order (HAKRO omitted — removed from the site).
const DISPLAY_ORDER = ["go", "swerv", "easybar", "sbaloans", "difacto"];

/**
 * Client testimonials shown on the homepage carousel and the Clients page.
 * Built from caseStudies.js so quotes and stats have one source of truth.
 */
export const VOICES = [
  ...caseStudies
    .filter((c) => c.testimonial)
    .map((c) => ({
      slug: c.slug,
      avatar: AVATARS[c.slug],
      companyLogo: VOICE_LOGOS[c.slug] || c.logo,
      companyName: c.logoAlt,
      name: c.testimonial.personName,
      role: c.testimonial.personRole,
      quote: c.testimonial.quote,
      stat1: c.testimonial.stat1,
      stat2: c.testimonial.stat2,
      caseUrl: c.hasDetailPage ? `/case-studies/${c.slug}` : null,
    })),
  // No matching case study exists for this client — quote and stats are
  // real, "View case study" is intentionally omitted (product decision).
  {
    slug: "difacto",
    avatar: voiceDifactoIvan,
    companyLogo: difactoLogo,
    companyName: "Difacto",
    name: "Ivan Grant",
    role: "Co-Founder",
    quote:
      "Omer was a key developer in the evolution of our DiFacto platform, rapidly delivering the Full Admin Panel that lets our support team manage user accounts.",
    stat1: { value: "4 wks", label: "To first pipeline" },
    stat2: { value: "–32%", label: "Manual review time" },
    caseUrl: null,
  },
].sort((a, b) => DISPLAY_ORDER.indexOf(a.slug) - DISPLAY_ORDER.indexOf(b.slug));
