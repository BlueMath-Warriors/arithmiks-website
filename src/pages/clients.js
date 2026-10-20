import * as React from "react";
import Header from "../components/Landing/Header";
import Clients from "../components/Clients";
import BookingFlow from "../components/Landing/Contact-Us/Booking-Flow";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

// No visible breadcrumb bar (the design has none) — these still drive the
// BreadcrumbList structured data in <head>.
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Clients", pathname: "/clients" },
];

const ClientsPage = () => (
  <>
    <Header />
    <main>
      <Clients />
      <BookingFlow />
    </main>
    <Footer />
  </>
);

export default ClientsPage;

export const Head = () => (
  <SEO
    title="Clients - Arithmiks"
    description="The founders and product leads Arithmiks builds with — in their own words, with the delivery results behind each engagement."
    pathname="/clients"
    breadcrumbItems={breadcrumbItems}
  />
);
