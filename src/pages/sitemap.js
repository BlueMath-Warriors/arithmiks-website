import * as React from "react";
import Header from "../components/Landing/Header";
import Sitemap from "../components/Sitemap";
import BookingFlow from "../components/Landing/Contact-Us/Booking-Flow";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Sitemap", pathname: "/sitemap" },
];

const SitemapPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <Sitemap />
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default SitemapPage;

export const Head = () => (
  <SEO
    title="Sitemap - Arithmiks"
    description="Every page on arithmiks.com in one place: services, products, case studies, engagement models, company, blog, resources and legal."
    pathname="/sitemap"
    breadcrumbItems={breadcrumbItems}
  />
);
