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
const CASE_STUDY_BY_SLUG = new Map(caseStudies.map((study) => [study.slug, study]));

// A page can feature its own cases, retitled with that page's copy.
const resolveFeatured = (featured) =>
  featured
    .map(({ slug, tag, title, outcome }) => {
      const study = CASE_STUDY_BY_SLUG.get(slug);
      if (!study) return null;
      return {
        ...study,
        tag: tag ?? study.tag,
        title: title ?? study.title,
        description: outcome ?? study.description,
      };
    })
    .filter(Boolean);

/**
 * "Selected work": two featured case studies.
 *
 * @param {{ featured?: { slug: string, tag?: string, title?: string, outcome?: string }[],
 *   bandStyle?: boolean }} props
 *   featured: defaults to the first two case studies; bandStyle: the service-page band style (title, gutters, card images).
 */
const SelectedWork = ({ featured, bandStyle = false }) => {
  const studies = featured ? resolveFeatured(featured) : caseStudies.slice(0, FEATURED_COUNT);
  return (
    <Section id="work" aria-labelledby="selected-work-h">
      <Shell $band={bandStyle}>
        <Head>
          <Eyebrow $band={bandStyle}>Selected work</Eyebrow>
          <HeadRow>
            <Title id="selected-work-h" $band={bandStyle}>
              Delivering Results <span>Across Industries</span>
            </Title>
            <ViewAllLink to="/case-studies">
              View all case studies <span aria-hidden="true">→</span>
            </ViewAllLink>
          </HeadRow>
        </Head>

        <Grid>
          {studies.map((study) => (
            <WorkCard key={study.slug} study={study} $band={bandStyle} />
          ))}
        </Grid>
      </Shell>
    </Section>
  );
};

export default SelectedWork;
