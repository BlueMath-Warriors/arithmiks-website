import * as React from "react";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import Hero from "../components/Careers/Hero";
import RolesGrid from "../components/Careers/RolesGrid";
import ContactCTA from "../components/Careers/ContactCTA";
import { SEO } from "../components/seo";
import { jobs, departmentOptions, locationOptions } from "../constants/jobs";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Careers", pathname: "/careers" },
];

const CareersPage = () => (
  <>
    <Header />
    <main>
      <Hero teamOptions={departmentOptions} locationOptions={locationOptions} />
      <RolesGrid jobs={jobs} />
      <ContactCTA />
    </main>
    <Footer />
  </>
);

export default CareersPage;

export const Head = () => (
  <SEO
    title="Careers - Arithmiks"
    description="Build your career and grow with the best in tech. Explore open roles at Arithmiks, an AI-first software engineering studio in Lahore."
    pathname="/careers"
    breadcrumbItems={breadcrumbItems}
  />
);
