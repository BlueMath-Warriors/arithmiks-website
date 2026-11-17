import * as React from "react";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";
import JobDetailHero from "../components/Careers/JobDetailHero";
import JobDetailBody from "../components/Careers/JobDetailBody";
import JobsList from "../components/Careers/JobsList";
import ApplyModal from "../components/Careers/ApplyModal";
import ApplicationNotice from "../components/Careers/ApplicationNotice";
import NotFoundPage from "../pages/404";
import { track } from "../utils/analytics";

/**
 * One role's page, rendered on the server by src/pages/careers/jobs/[slug].js
 * from the job loaded for that request. Owns the Apply dialog state so the
 * hero and body buttons share one dialog.
 *
 * @param {{ job: import("../constants/jobs").Job | null, loadFailed?: boolean }} props
 * `job` is null for an unknown slug; `loadFailed` means Contentful could not
 * be reached, so we cannot tell whether the role exists.
 */
const JobDetailTemplate = ({ job, loadFailed = false }) => {
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

  if (loadFailed) {
    return (
      <>
        <Header white />
        <main>
          <JobsList jobs={[]} loadFailed />
        </main>
        <Footer />
      </>
    );
  }

  if (!job) return <NotFoundPage />;

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
