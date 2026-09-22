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

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
    <script key="consent-mode-default" dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />,
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="-vSMxD4PrE6GOok0ajvRRpkns32Bgucy-d92OMsgR1Q"
    />,
    <link
      key="preconnect-google-fonts"
      rel="preconnect"
      href="https://fonts.googleapis.com"
      crossOrigin="anonymous"
    />,
    <link
      key="preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    
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
