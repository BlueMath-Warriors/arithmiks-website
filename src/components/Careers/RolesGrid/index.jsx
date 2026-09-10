import React from "react";
import RoleCard from "../RoleCard";
import { Section, Shell, Grid, SeeAllWrap, SeeAllButton } from "./index.styled";

const PREVIEW_COUNT = 6;

/** @param {{ jobs: import("../../../constants/jobs").jobs }} props */
const RolesGrid = ({ jobs }) => (
  <Section id="roles">
    <Shell>
      <Grid>
        {jobs.slice(0, PREVIEW_COUNT).map((job) => (
          <RoleCard key={job.slug} job={job} />
        ))}
      </Grid>
      <SeeAllWrap>
        <SeeAllButton to="/careers/jobs">See all open roles</SeeAllButton>
      </SeeAllWrap>
    </Shell>
  </Section>
);

export default RolesGrid;
