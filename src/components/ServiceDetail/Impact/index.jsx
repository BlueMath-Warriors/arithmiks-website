import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import {
  Section,
  Grid,
  Cell,
  CellNumber,
  CtaCell,
  CtaInner,
  CtaText,
  CtaButton,
  Chips,
  Chip,
  ChipLink,
} from "./index.styled";

/**
 * "Outcomes": what the engagement delivers, as a numbered grid that ends in
 * a consultation call to action.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   outcomes: (string | { label: string, title: string })[], ctaLines: string[],
 *   ctaLabel: string, sectionId?: string, compactOnPhone?: boolean, ctaSpan?: number,
 *   padBottom?: boolean,
 *   extraCell?: { label: string, chips: { label: string, href?: string }[] } }} props
 *   outcomes: a plain string is numbered 01, 02…; an object names its own label;
 *   ctaLines: the CTA sentence in pieces that each stay on one line;
 *   compactOnPhone: pair the cells up on phones (most pages) rather than stack them;
 *   ctaSpan: fix the grid at four columns and let the CTA fill this many of the
 *   last row's, as the AI service designs set it;
 *   padBottom: close the band with its own bottom padding;
 *   extraCell: a tile before the CTA listing related items as chips, linked
 *   ones opening in a new tab.
 */
const Impact = ({
  eyebrow,
  title,
  outcomes,
  ctaLines,
  ctaLabel,
  sectionId = "impact",
  compactOnPhone = true,
  ctaSpan,
  padBottom = false,
  extraCell,
}) => {
  const headingId = `${sectionId}-h`;
  return (
    <Section id={sectionId} aria-labelledby={headingId} $padBottom={padBottom}>
      <BandShell>
        <div data-reveal="">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title id={headingId}>
            <HeadingText parts={title} />
          </Title>
        </div>

        <Grid $compact={compactOnPhone} $ctaSpan={ctaSpan}>
          {outcomes.map((outcome, index) => {
            const named = typeof outcome !== "string";
            const { label, title: outcomeTitle } = named
              ? outcome
              : { label: String(index + 1).padStart(2, "0"), title: outcome };
            return (
              <Cell key={outcomeTitle} data-reveal="" $compact={compactOnPhone} $ctaSpan={ctaSpan}>
                <CellNumber $compact={compactOnPhone} $named={named}>
                  {label}
                </CellNumber>
                <h3>{outcomeTitle}</h3>
              </Cell>
            );
          })}
          {extraCell && (
            <Cell data-reveal="" $compact={compactOnPhone} $ctaSpan={ctaSpan}>
              <CellNumber $compact={compactOnPhone} $named>
                {extraCell.label}
              </CellNumber>
              <Chips>
                {extraCell.chips.map((chip) =>
                  chip.href ? (
                    <ChipLink key={chip.label} href={chip.href} target="_blank" rel="noopener">
                      {chip.label} <span aria-hidden="true">↗</span>
                    </ChipLink>
                  ) : (
                    <Chip key={chip.label}>{chip.label}</Chip>
                  )
                )}
              </Chips>
            </Cell>
          )}
          <CtaCell data-reveal="" $compact={compactOnPhone} $ctaSpan={ctaSpan}>
            <CtaInner $compact={compactOnPhone} $ctaSpan={ctaSpan}>
              <CtaText $compact={compactOnPhone} $ctaSpan={ctaSpan}>
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
