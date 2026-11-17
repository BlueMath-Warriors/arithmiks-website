import React from "react";
import RoleCard from "../RoleCard";
import RolesStatusMessage from "../RolesStatusMessage";
import { Section, Shell, Grid, SeeAllWrap, SeeAllButton } from "./index.styled";

const PREVIEW_COUNT = 6;

/** @param {{ jobs: import("../../../constants/jobs").Job[], loadFailed?: boolean }} props */
const RolesGrid = ({ jobs, loadFailed = false }) => {
  const renderContent = () => {
    if (loadFailed) return <RolesStatusMessage variant="error" />;
    if (jobs.length === 0) return <RolesStatusMessage variant="empty" />;
    return (
      <>
        <Grid>
          {jobs.slice(0, PREVIEW_COUNT).map((job) => (
            <RoleCard key={job.slug} job={job} />
          ))}
        </Grid>
        <SeeAllWrap>
          <SeeAllButton to="/careers/jobs">See all open roles</SeeAllButton>
        </SeeAllWrap>
      </>
    );
  };

  return (
    <Section id="roles">
      <Shell>{renderContent()}</Shell>
    </Section>
  );
};

export default RolesGrid;
