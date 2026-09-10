import React from "react";
import TagPill from "../TagPill";
import { Card, TitleRow, Title, Arrow, Summary, TagRow } from "./index.styled";

/** @param {{ job: import("../../../constants/jobs").jobs[number] }} props */
const RoleCard = ({ job }) => (
  <Card to={`/careers/jobs/${job.slug}`}>
    <TitleRow>
      <Title>{job.title}</Title>
      <Arrow>
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3.5 10h13M11.5 5l5 5-5 5" />
        </svg>
      </Arrow>
    </TitleRow>
    <Summary>{job.summary}</Summary>
    <TagRow>
      <TagPill>{job.location}</TagPill>
      <TagPill>{job.employmentType}</TagPill>
    </TagRow>
  </Card>
);

export default RoleCard;
