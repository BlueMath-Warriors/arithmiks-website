import React from "react";
import { SEO } from "../seo";
import { heroArtSrcSet, HERO_ART_SIZES } from "./Hero";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

/**
 * <head> for a service page: SEO from the service's route entry, and a
 * preload for the hero art, which is large enough to be the LCP element.
 * The design has no visible breadcrumb bar; the trail only feeds the
 * BreadcrumbList structured data.
 *
 * @param {{ slug: string, art: string }} props
 */
const ServiceDetailHead = ({ slug, art }) => {
  const service = getServiceBySlug(slug);
  if (!service) throw new Error(`ServiceDetailHead: no service route for "${slug}"`);
  const breadcrumbItems = [
    { name: "Home", pathname: "/" },
    { name: "Services", pathname: "/services" },
    { name: service.label, pathname: servicePath(slug) },
  ];

  return (
    <>
      <link
        rel="preload"
        as="image"
        imageSrcSet={heroArtSrcSet(art)}
        imageSizes={HERO_ART_SIZES}
        fetchpriority="high"
      />
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        pathname={servicePath(slug)}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
};

export default ServiceDetailHead;
