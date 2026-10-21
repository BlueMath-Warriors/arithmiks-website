import { onCLS, onINP, onLCP } from "web-vitals";
import { currentPath, pageTypeFor, track } from "./analytics";

// Site-wide listeners registered once from gatsby-browser.jsx. Clicks are
// handled by delegation so the dozens of CTAs, case study cards and service
// links across the site don't each need their own onClick.

const SCROLL_THRESHOLDS = [25, 50, 75, 100];
const SCROLL_TRACKED_TYPES = ["blog", "case_study"];

/**
 * Where on the page a click happened. An explicit `data-track-location` wins;
 * otherwise the nearest landmark or section id is good enough to tell a hero
 * CTA from a footer one.
 */
const locationOf = (element) => {
  const tagged = element.closest("[data-track-location]");
  if (tagged) return tagged.getAttribute("data-track-location");
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest("nav")) return "nav";
  const section = element.closest("section[id]");
  if (section) return section.id;
  return "main";
};

const textOf = (element) =>
  (element.getAttribute("aria-label") || element.textContent || "")
    .replace(/\s+/g, " ")
    .replace(/[→←]/g, "")
    .trim()
    .slice(0, 100);

const isContactCta = (anchor) => {
  if (anchor.hash === "#contact") return true;
  return anchor.hostname === window.location.hostname && anchor.pathname.replace(/\/+$/, "") === "/contact";
};

// Second path segment of an internal link, e.g. "/case-studies/quanta" -> "quanta".
const internalSlug = (anchor, prefix) => {
  if (anchor.hostname !== window.location.hostname) return null;
  const match = anchor.pathname.match(new RegExp(`^/${prefix}/([^/]+)`));
  return match ? match[1] : null;
};

const handleClick = (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const cta = target.closest("[data-cta]");
  if (cta) {
    track("cta_click", {
      cta_text: cta.getAttribute("data-cta") || textOf(cta),
      cta_location: locationOf(cta),
      page_type: pageTypeFor(currentPath()),
    });
    return;
  }

  const anchor = target.closest("a[href]");
  if (!anchor) return;

  if (anchor.protocol === "mailto:" || anchor.protocol === "tel:") {
    const address = decodeURIComponent(anchor.href.replace(/^(mailto|tel):/, "").split("?")[0]);
    // "mailto:?subject=…" is the job share link, tracked as job_share instead.
    if (!address) return;
    track("contact_click", {
      contact_method: anchor.protocol === "mailto:" ? "email" : "phone",
      link_location: locationOf(anchor),
      address,
    });
    return;
  }

  if (isContactCta(anchor)) {
    track("cta_click", {
      cta_text: textOf(anchor),
      cta_location: locationOf(anchor),
      page_type: pageTypeFor(currentPath()),
    });
    return;
  }

  const caseStudy = internalSlug(anchor, "case-studies");
  if (caseStudy) {
    track("case_study_click", { case_study: caseStudy, click_location: locationOf(anchor) });
    return;
  }

  const service = internalSlug(anchor, "services");
  if (service) {
    track("service_interest", { service_name: service, click_location: locationOf(anchor) });
  }
};

let sentThresholds = new Set();
let scrollFrame = null;

const checkScrollDepth = () => {
  scrollFrame = null;
  const contentType = pageTypeFor(currentPath());
  if (!SCROLL_TRACKED_TYPES.includes(contentType)) return;

  const { scrollHeight } = document.documentElement;
  const percent = ((window.scrollY + window.innerHeight) / scrollHeight) * 100;
  SCROLL_THRESHOLDS.forEach((threshold) => {
    // 100% is unreachable by a pixel or two on some devices.
    const reached = threshold === 100 ? percent >= 99 : percent >= threshold;
    if (!reached || sentThresholds.has(threshold)) return;
    sentThresholds.add(threshold);
    track("content_scroll", {
      percent_scrolled: threshold,
      content_type: contentType,
      content_id: currentPath().split("/").filter(Boolean).pop(),
    });
  });
};

const handleScroll = () => {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(checkScrollDepth);
};

// Vitals describe the full page load, so they are tagged with the page that was
// loaded, not wherever client-side navigation has got to when they report.
let landingPageType = "other";

const sendWebVital = ({ name, value, rating, id }) => {
  track("web_vitals", {
    metric_name: name,
    // CLS is a unitless score well below 1; scale it so GA's integer value keeps it.
    value: Math.round(name === "CLS" ? value * 1000 : value),
    rating,
    metric_id: id,
    page_type: landingPageType,
  });
};

export const initGlobalTracking = () => {
  landingPageType = pageTypeFor(currentPath());
  document.addEventListener("click", handleClick, { capture: true });
  window.addEventListener("scroll", handleScroll, { passive: true });
  onCLS(sendWebVital);
  onINP(sendWebVital);
  onLCP(sendWebVital);
};

/** Call on every route change so scroll depth is counted per page. */
export const resetPageTracking = () => {
  sentThresholds = new Set();
};
