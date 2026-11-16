import * as React from "react";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import JobDetailHero from "../components/Careers/JobDetailHero";
import JobDetailBody from "../components/Careers/JobDetailBody";
import ApplyModal from "../components/Careers/ApplyModal";
import ApplicationNotice from "../components/Careers/ApplicationNotice";
import { SEO } from "../components/seo";
import { getJobBySlug } from "../constants/jobs";
import { track } from "../utils/analytics";

/**
 * One page per role in `src/constants/jobs.js`, generated at build time by
 * the createPages loop in gatsby-node.js (`pageContext.slug` is set there).
 * Owns the Apply dialog state so the hero and body buttons share one dialog.
 */
const JobDetailTemplate = ({ pageContext }) => {
  const job = getJobBySlug(pageContext.slug);
  const [isApplyOpen, setIsApplyOpen] = React.useState(false);
  const [isNoticeVisible, setIsNoticeVisible] = React.useState(false);
  const applyTriggerRef = React.useRef(null);

  React.useEffect(() => {
    if (job) track("job_view", { job_title: job.title, job_department: job.department });
  }, [job]);

  const openApply = React.useCallback((trigger) => {
    applyTriggerRef.current = trigger;
    setIsApplyOpen(true);
  }, []);
  const closeApply = React.useCallback(() => setIsApplyOpen(false), []);
  const showNotice = React.useCallback(() => setIsNoticeVisible(true), []);
  const hideNotice = React.useCallback(() => setIsNoticeVisible(false), []);

  // Guards a stale/renamed slug reaching the template (e.g. mid-edit of
  // jobs.js) rather than rendering with `job` undefined.
  if (!job) return null;

  return (
    <>
      <Header white />
      <main>
        <JobDetailHero job={job} onApply={openApply} />
        <JobDetailBody job={job} onApply={openApply} />
      </main>
      <Footer />
      <ApplyModal
        job={job}
        isOpen={isApplyOpen}
        onClose={closeApply}
        onSubmitted={showNotice}
        triggerRef={applyTriggerRef}
      />
      {isNoticeVisible && <ApplicationNotice onDismiss={hideNotice} />}
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
