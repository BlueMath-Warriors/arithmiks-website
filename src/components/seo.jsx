import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";


/**
 * @param {object} props
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.pathname]
 * @param {{ name: string; pathname: string }[]} [props.breadcrumbItems] Ordered trail including the current page; URLs built with siteUrl + pathname.
 * @param {boolean} [props.article]
 * @param {object[]} [props.extraSchemas] Additional JSON-LD objects emitted as script tags (e.g. FAQPage, HowTo, SoftwareApplication).
 */
export const SEO = ({
  title,
  description,
  pathname,
  breadcrumbItems,
  children,
  article = false,
  extraSchemas,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const baseUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const absolutePathUrl = (p) => {
    if (!p || p === "/") return baseUrl;
    const path = p.startsWith("/") ? p : `/${p}`;
    return `${baseUrl}${path}`;
  };

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Arithmiks",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    description: defaultDescription,
    sameAs: [
      "https://twitter.com/arithmiks",
      "https://www.linkedin.com/company/arithmiks",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "services@arithmiks.com",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "Pakistan",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: defaultTitle,
    url: siteUrl,
    description: defaultDescription,
    publisher: {
      "@type": "Organization",
      name: "Arithmiks",
    },
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": article ? "Article" : "WebPage",
    name: seo.title,
    description: seo.description,
    url: seo.url,
    image: seo.image,
    publisher: {
      "@type": "Organization",
      name: "Arithmiks",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.png`,
      },
    },
  };

  let breadcrumbSchema = null;
  if (
    breadcrumbItems &&
    Array.isArray(breadcrumbItems) &&
    breadcrumbItems.length > 0
  ) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absolutePathUrl(item.pathname),
      })),
    };
  } else if (pathname && pathname !== "/") {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: seo.title,
          item: seo.url,
        },
      ],
    };
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content="Arithmiks" />
      
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      
      <link rel="canonical" href={seo.url} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${seo.twitterUsername}`} />
      <meta name="twitter:creator" content={`@${seo.twitterUsername}`} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Arithmiks" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="650" />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:type" content="image/png" />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {Array.isArray(extraSchemas) &&
        extraSchemas.map((schema, i) => (
          <script key={`extra-schema-${i}`} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      />
      
      {children}
    </>
  );
};
