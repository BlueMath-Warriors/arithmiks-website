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
    <script
      key="netlify-identity-widget"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
    <script
      key="netlify-identity-redirect"
      dangerouslySetInnerHTML={{
        __html: `
          if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", function (user) {
              if (!user) {
                window.netlifyIdentity.on("login", function () {
                  document.location.href = "/blogs/";
                });
              }
            });
          }
        `,
      }}
    />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return element;
};
