import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { Section, Grid, Cell, CellNumber, CtaCell, CtaInner, CtaText, CtaButton } from "./index.styled";

/**
 * "Outcomes": what the engagement delivers, as a numbered grid that ends in
 * a consultation call to action.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   outcomes: string[], ctaLines: string[], ctaLabel: string,
 *   sectionId?: string, compactOnPhone?: boolean }} props
 *   ctaLines: the CTA sentence in pieces that each stay on one line;
 *   compactOnPhone: pair the cells up on phones (most pages) rather than stack them.
 */
const Impact = ({
  eyebrow,
  title,
  outcomes,
  ctaLines,
  ctaLabel,
  sectionId = "impact",
  compactOnPhone = true,
}) => {
  const headingId = `${sectionId}-h`;
  return (
    <Section id={sectionId} aria-labelledby={headingId}>
      <BandShell>
        <div data-reveal="">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title id={headingId}>
            <HeadingText parts={title} />
          </Title>
        </div>

        <Grid $compact={compactOnPhone}>
          {outcomes.map((outcome, index) => (
            <Cell key={outcome} data-reveal="" $compact={compactOnPhone}>
              <CellNumber $compact={compactOnPhone}>{String(index + 1).padStart(2, "0")}</CellNumber>
              <h3>{outcome}</h3>
            </Cell>
          ))}
          <CtaCell data-reveal="" $compact={compactOnPhone}>
            <CtaInner $compact={compactOnPhone}>
              <CtaText $compact={compactOnPhone}>
                {ctaLines.map((line, index) => (
                  <React.Fragment key={line}>
                    {index > 0 && " "}
                    <span>{line}</span>
                  </React.Fragment>
                ))}
              </CtaText>
              <CtaButton href="#contact">
                {ctaLabel} <span aria-hidden="true">→</span>
              </CtaButton>
            </CtaInner>
          </CtaCell>
        </Grid>
      </BandShell>
    </Section>
  );
};

export default Impact;
