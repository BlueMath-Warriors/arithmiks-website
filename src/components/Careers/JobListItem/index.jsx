import React from "react";
import TagPill from "../TagPill";
import { Row, Department, Main, Title, Summary, TagRow, Arrow } from "./index.styled";

/** @param {{ job: import("../../../constants/jobs").jobs[number] }} props */
const JobListItem = ({ job }) => (
  <Row to={`/careers/jobs/${job.slug}`}>
    <Department>{job.department}</Department>
    <Main>
      <Title>{job.title}</Title>
      <Summary>{job.summary}</Summary>
      <TagRow>
        <TagPill>{job.location}</TagPill>
        <TagPill>{job.employmentType}</TagPill>
      </TagRow>
    </Main>
    <Arrow>
      <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 10h13M11.5 5l5 5-5 5" />
      </svg>
    </Arrow>
  </Row>
);

export default JobListItem;
