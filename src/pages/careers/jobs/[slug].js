import * as React from "react";
import JobDetailTemplate from "../../../templates/job-detail";
import { SEO } from "../../../components/seo";
import { getJobServerData } from "../../../server/jobs/jobsServerData";

const JobDetailPage = ({ serverData }) => (
  <JobDetailTemplate job={serverData.job} loadFailed={serverData.loadFailed} />
);

export default JobDetailPage;

export const getServerData = ({ params }) => getJobServerData(params.slug);

export const Head = ({ serverData }) => {
  const { job, loadFailed } = serverData;

  if (!job) {
    return (
      <SEO title={loadFailed ? "Careers - Arithmiks" : "Role not found - Careers - Arithmiks"}>
        <meta name="robots" content="noindex" />
      </SEO>
    );
  }

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
