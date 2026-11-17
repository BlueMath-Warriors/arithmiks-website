import * as React from "react";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import Hero from "../components/Careers/Hero";
import RolesGrid from "../components/Careers/RolesGrid";
import ContactCTA from "../components/Careers/ContactCTA";
import { SEO } from "../components/seo";
import { getDepartmentOptions, getLocationOptions } from "../constants/jobs";
import { getJobsServerData } from "../server/jobs/jobsServerData";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Careers", pathname: "/careers" },
];

/** @param {{ serverData: { jobs: import("../constants/jobs").Job[], loadFailed: boolean } }} props */
const CareersPage = ({ serverData }) => {
  const { jobs, loadFailed } = serverData;

  return (
    <>
      <Header />
      <main>
        <Hero teamOptions={getDepartmentOptions(jobs)} locationOptions={getLocationOptions(jobs)} />
        <RolesGrid jobs={jobs} loadFailed={loadFailed} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default CareersPage;

export const getServerData = getJobsServerData;

export const Head = () => (
  <SEO
    title="Careers - Arithmiks"
    description="Build your career and grow with the best in tech. Explore open roles at Arithmiks, an AI-first software engineering studio in Lahore."
    pathname="/careers"
    breadcrumbItems={breadcrumbItems}
  />
);
