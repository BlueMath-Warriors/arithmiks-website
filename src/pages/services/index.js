import * as React from "react";
import Header from "../../components/Landing/Header";
import ServicesIndex from "../../components/ServicesIndex";
import BookingFlow from "../../components/Landing/Contact-Us/Booking-Flow";
import Footer from "../../components/Landing/Footer";
import { SEO } from "../../components/seo";

// The visible breadcrumb bar is intentionally absent (the design has none) —
// these still drive the BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Services", pathname: "/services" },
];

const ServicesIndexPage = () => (
  <>
    <Header lightHero={true} />
    <main>
      <ServicesIndex />
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default ServicesIndexPage;

export const Head = () => (
  <SEO
    title="Services - Arithmiks"
    description="Arithmiks services: web and mobile development, custom software, UI/UX design, DevOps, AI and data solutions, cloud infrastructure, and product engineering—built for scale and long-term maintainability."
    pathname="/services"
    breadcrumbItems={breadcrumbItems}
  />
);
