import React from "react";
import { formatPostedDate, formatEmploymentTypeForJobDetail } from "../../../constants/jobs";
import { Glyph } from "../shared";
import {
  Section,
  BreadcrumbShell,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbCurrent,
  GridShell,
  Grid,
  Main,
  Heading,
  AboutText,
  ParagraphList,
  ApplyButton,
  Aside,
  InfoList,
  InfoRow,
  InfoLabel,
  InfoValue,
} from "./index.styled";

const INFO_ROWS = (job) => [
  ["Industry", job.jobInfo.industry],
  ["Salary", job.jobInfo.salary],
  ["Date Opened", formatPostedDate(job.datePosted)],
  ["Job Type", formatEmploymentTypeForJobDetail(job.employmentType)],
  ["Work Experience", job.jobInfo.workExperience],
  ["City", job.location],
  ["State/Province", job.jobInfo.stateProvince],
  ["Country", job.jobInfo.country],
  ["Zip/Postal Code", job.jobInfo.zipCode],
];

/** @param {{ job: import("../../../constants/jobs").jobs[number] }} props */
const JobDetailBody = ({ job }) => (
  <Section>
    <BreadcrumbShell>
      <Breadcrumb aria-label="Breadcrumb">
        <BreadcrumbLink to="/careers/jobs">Job listing</BreadcrumbLink>
        <Glyph aria-hidden="true">›</Glyph>
        <BreadcrumbCurrent aria-current="page">Job details</BreadcrumbCurrent>
      </Breadcrumb>
    </BreadcrumbShell>
    <GridShell>
      <Grid>
        <Main>
          <Heading $first>About Us</Heading>
          <AboutText>{job.aboutUs}</AboutText>

          <Heading>Job Description</Heading>
          <ParagraphList>
            {job.description.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {job.description.whatYouWillDo.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ParagraphList>

          <Heading>Requirements</Heading>
          <ParagraphList>
            {job.requirements.whatYouWillBring.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {job.requirements.niceToHave.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ParagraphList>

          <ApplyButton href="#">Apply now</ApplyButton>
        </Main>

        <Aside aria-labelledby="job-info-h">
          <Heading $first id="job-info-h">
            Job Information
          </Heading>
          <InfoList>
            {INFO_ROWS(job).map(([label, value]) => (
              <InfoRow key={label}>
                <InfoLabel>{label}</InfoLabel>
                <InfoValue>{value}</InfoValue>
              </InfoRow>
            ))}
          </InfoList>
        </Aside>
      </Grid>
    </GridShell>
  </Section>
);

export default JobDetailBody;
