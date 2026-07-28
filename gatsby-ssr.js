import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" });

  setHeadComponents([
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
