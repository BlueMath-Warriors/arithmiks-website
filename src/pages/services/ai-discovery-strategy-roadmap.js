import * as React from "react";
import Header from "../../components/Landing/Header";
import AiDiscoveryService from "../../components/AiDiscoveryService";
import BookingFlow from "../../components/Landing/Contact-Us/Booking-Flow";
import Footer from "../../components/Landing/Footer";
import { SEO } from "../../components/seo";
import { SPARK_SRC_SET, SPARK_SIZES } from "../../components/AiDiscoveryService/Hero";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "ai-discovery-strategy-roadmap";
const service = getServiceBySlug(slug);
// The visible breadcrumb bar is intentionally absent (the design has none) —
// these still drive the BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Services", pathname: "/services" },
  { name: service.label, pathname: servicePath(slug) },
];

const AiDiscoveryStrategyRoadmapPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <AiDiscoveryService />
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default AiDiscoveryStrategyRoadmapPage;

export const Head = () => (
  <>
    {/* The hero sparkle is large enough to be the LCP element, so fetch it
        alongside the font instead of waiting for the stylesheet and markup. */}
    <link
      rel="preload"
      as="image"
      imageSrcSet={SPARK_SRC_SET}
      imageSizes={SPARK_SIZES}
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
