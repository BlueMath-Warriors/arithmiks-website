// Shared breakpoints used across many components site-wide (CaseStudy,
// FixedPrice, DedicatedTeam, ToolPage, ServicesIndex, Blog, Breadcrumbs,
// VirusScanner, etc.) — kept here as the original, established location.
// The homepage-hero-specific exports that used to live in this file
// (Buttons, CtaBtn, TextContainer, MainHead, Description) were removed:
// they were only ever used by the old inline hero in this folder's
// index.jsx, which the redesign replaced with the dedicated Hero component.
export const breakpoints = {
  xsmall: "385px",
  small: "430px",
  medium: "820px",
  large: "1200px",
};
