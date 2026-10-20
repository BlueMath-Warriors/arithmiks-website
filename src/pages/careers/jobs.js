import * as React from "react";
import Header from "../../components/Landing/Header";
import Footer from "../../components/Landing/Footer";
import JobsList from "../../components/Careers/JobsList";
import { SEO } from "../../components/seo";
import { jobs } from "../../constants/jobs";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Careers", pathname: "/careers" },
  { name: "Open Roles", pathname: "/careers/jobs" },
];

/** @param {{ location: { search: string } }} props Gatsby-injected page props. */
const JobsSearchPage = ({ location }) => {
  const params = new URLSearchParams(location.search);

  return (
    <>
      <Header white />
      <main>
        <JobsList
          jobs={jobs}
          initialKeyword={params.get("q") || ""}
          initialTeam={params.get("team")}
          initialLocation={params.get("location")}
        />
      </main>
      <Footer />
    </>
  );
};

export default JobsSearchPage;

export const Head = () => (
  <SEO
    title="Open Roles - Careers - Arithmiks"
    description="Every role Arithmiks is hiring for right now, across engineering, AI & data, and design."
    pathname="/careers/jobs"
    breadcrumbItems={breadcrumbItems}
  />
);
