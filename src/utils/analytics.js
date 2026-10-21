// GA4 event helpers. The event names and params follow
// docs/analytics-tracking-plan.md; keep the two in sync.

/**
 * Sends a GA4 event. `window.gtag` is defined by the Consent Mode bootstrap in
 * gatsby-ssr.js, so this is safe before consent (GA sends cookieless pings
 * then) and in dev, where no GA_ID means the calls are just queued and dropped.
 */
export const track = (name, params = {}) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
};

/** Coarse page category, so reports can group the ~60 routes. */
export const pageTypeFor = (pathname = "") => {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return "home";
  if (path.startsWith("/services/")) return "service";
  if (path === "/services") return "services_index";
  if (path.startsWith("/case-studies/")) return "case_study";
  if (path === "/case-studies") return "case_studies_index";
  if (path.startsWith("/blogs/")) return "blog";
  if (path.startsWith("/careers")) return "careers";
  if (path.startsWith("/tools")) return "tool";
  if (path === "/contact") return "contact";
  return "other";
};

export const currentPath = () =>
  typeof window === "undefined" ? "" : window.location.pathname;

const KB = 1024;

/** Buckets a byte size so GA reports group files instead of listing every size. */
export const fileSizeBucket = (bytes) => {
  if (bytes < 100 * KB) return "<100";
  if (bytes < 1000 * KB) return "100-1000";
  return "1000+";
};

export const fileExtension = (name = "") => {
  const dot = name.lastIndexOf(".");
  return dot > 0 ? name.slice(dot + 1).toLowerCase() : "none";
};
