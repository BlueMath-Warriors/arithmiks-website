import React from "react";
import {
  Section,
  Shell,
  Head,
  Eyebrow,
  HeadRow,
  Title,
  ViewAllLink,
  Grid,
  WorkCard,
} from "./index.styled";
import { caseStudies } from "../../Landing/Case-Study/caseStudies";

const FEATURED_COUNT = 2;

const SelectedWork = () => (
  <Section id="work" aria-labelledby="selected-work-h">
    <Shell>
      <Head>
        <Eyebrow>Selected work</Eyebrow>
        <HeadRow>
          <Title id="selected-work-h">
            Delivering Results <span>Across Industries</span>
          </Title>
          <ViewAllLink to="/case-studies">
            View all case studies <span aria-hidden="true">→</span>
          </ViewAllLink>
        </HeadRow>
      </Head>

      <Grid>
        {caseStudies.slice(0, FEATURED_COUNT).map((study) => (
          <WorkCard key={study.slug} study={study} />
        ))}
      </Grid>
    </Shell>
  </Section>
);

export default SelectedWork;
