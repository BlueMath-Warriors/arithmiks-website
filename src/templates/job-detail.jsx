import * as React from "react";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import JobDetailHero from "../components/Careers/JobDetailHero";
import JobDetailBody from "../components/Careers/JobDetailBody";
import { SEO } from "../components/seo";
import { getJobBySlug } from "../constants/jobs";

/**
 * One page per role in `src/constants/jobs.js`, generated at build time by
 * the createPages loop in gatsby-node.js (`pageContext.slug` is set there).
 */
const JobDetailTemplate = ({ pageContext }) => {
  const job = getJobBySlug(pageContext.slug);

  // Guards a stale/renamed slug reaching the template (e.g. mid-edit of
  // jobs.js) rather than rendering with `job` undefined.
  if (!job) return null;

  return (
    <>
      <Header white />
      <main>
        <JobDetailHero job={job} />
        <JobDetailBody job={job} />
      </main>
      <Footer />
    </>
  );
};

export default JobDetailTemplate;

export const Head = ({ pageContext }) => {
  const job = getJobBySlug(pageContext.slug);
  if (!job) return null;

  const breadcrumbItems = [
    { name: "Home", pathname: "/" },
    { name: "Careers", pathname: "/careers" },
    { name: "Open Roles", pathname: "/careers/jobs" },
    { name: job.title, pathname: `/careers/jobs/${job.slug}` },
  ];

  return (
    <SEO
      title={`${job.title} - Careers - Arithmiks`}
      description={job.summary}
      pathname={`/careers/jobs/${job.slug}`}
      breadcrumbItems={breadcrumbItems}
    />
  );
};
