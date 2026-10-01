import React from "react";
import { CONSENT_STORAGE_KEY, CONSENT_GRANTED } from "./src/utils/cookieConsent";

// Must render before gatsby-plugin-google-gtag's own script (head: false,
// so it always loads after <head>), so analytics_storage starts denied.
const CONSENT_MODE_BOOTSTRAP = `
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }
window.gtag = gtag;
var storedConsent = 'denied';
try {
  if (window.localStorage.getItem('${CONSENT_STORAGE_KEY}') === '${CONSENT_GRANTED}') storedConsent = '${CONSENT_GRANTED}';
} catch (e) {}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: storedConsent
});
`;

// Flags motion support on <html> before first paint, so scroll-reveal targets
// can start hidden in CSS instead of flashing visible until React mounts.
const MOTION_FLAG_BOOTSTRAP = `
try {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.setAttribute('data-motion', '');
  }
} catch (e) {}
`;

// Without these the text first paints in the fallback font and then jumps when
// the web font arrives (layout shift); the weights are the Latin subsets used
// above the fold across the site.
const PRELOADED_FONTS = [
  "/fonts/Aspekta-Variable.woff2",
  "/fonts/poppins/poppins-400-latin.woff2",
  "/fonts/poppins/poppins-500-latin.woff2",
  "/fonts/poppins/poppins-600-latin.woff2",
  "/fonts/poppins/poppins-700-latin.woff2",
];

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    <script key="consent-mode-default" dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />,
    <script key="motion-flag" dangerouslySetInnerHTML={{ __html: MOTION_FLAG_BOOTSTRAP }} />,
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="-vSMxD4PrE6GOok0ajvRRpkns32Bgucy-d92OMsgR1Q"
    />,
    ...PRELOADED_FONTS.map((href) => (
      <link key={`preload-${href}`} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />
    )),
    
    <link
      key="dns-prefetch-gtag"
      rel="dns-prefetch"
      href="https://www.googletagmanager.com"
    />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return element;
};
