import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import {
  Section,
  Glow,
  Grid,
  Intro,
  IntroText,
  Cta,
  List,
  Row,
  Tile,
  Body,
  Tag,
  Name,
  Claim,
  SourceLink,
  ApproachTitle,
  Steps,
  Step,
} from "./index.styled";

const SPARKLE =
  "M12 3c1.2 5.4 3.6 7.8 9 9-5.4 1.2-7.8 3.6-9 9-1.2-5.4-3.6-7.8-9-9 5.4-1.2 7.8-3.6 9-9Z";

/**
 * @typedef {string | { label: string, href: string }} ClaimPart plain text, or the
 *   published source, linked where it falls in the sentence.
 * @typedef {{ icon: string, tag?: string, name: string, claim: ClaimPart[],
 *   approach: string[] }} ProofRow
 */

/**
 * Published results from other companies, each matched to how Arithmiks would
 * build the same thing: an intro that holds its place on the left while the
 * rows scroll past on the right.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   intro: string, cta: { label: string, href: string }, approachLabel: string,
 *   rows: ProofRow[], sectionId: string }} props
 *   approachLabel: the sub-heading over each row's steps;
 *   sectionId: the band's anchor, which the chapter bar links to.
 */
const ProofGrid = ({ eyebrow, title, intro, cta, approachLabel, rows, sectionId }) => {
  const headingId = `${sectionId}-h`;
  // One gradient per band, referenced by every icon in it.
  const gradientId = `${sectionId}-icon-grad`;

  return (
    <Section id={sectionId} aria-labelledby={headingId}>
      <Glow aria-hidden="true" />
      <BandShell>
        <Grid>
          <Intro>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Title id={headingId} $balance>
              <HeadingText parts={title} />
            </Title>
            <IntroText>{intro}</IntroText>
            <Cta href={cta.href}>
              {cta.label} <span aria-hidden="true">→</span>
            </Cta>
          </Intro>

          <List>
            <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#5C8CFF" />
                  <stop offset=".55" stopColor="#1355FF" />
                  <stop offset="1" stopColor="#A96FC8" />
                </linearGradient>
              </defs>
            </svg>
            {rows.map((row) => (
              <Row key={row.name} data-reveal="">
                <Tile aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="1.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={row.icon} />
                  </svg>
                </Tile>
                <Body>
                  {row.tag && <Tag>{row.tag}</Tag>}
                  <Name $afterTag={Boolean(row.tag)}>{row.name}</Name>
                  <Claim>
                    {row.claim.map((part) =>
                      typeof part === "string" ? (
                        <React.Fragment key={part}>{part}</React.Fragment>
                      ) : (
                        <SourceLink key={part.href} href={part.href} target="_blank" rel="noopener">
                          {part.label}
                        </SourceLink>
                      )
                    )}
                  </Claim>
                  <ApproachTitle>
                    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d={SPARKLE} fill={`url(#${gradientId})`} />
                    </svg>
                    {approachLabel}
                  </ApproachTitle>
                  <Steps>
                    {row.approach.map((step) => (
                      <Step key={step}>
                        <span aria-hidden="true">→</span>
                        <span>{step}</span>
                      </Step>
                    ))}
                  </Steps>
                </Body>
              </Row>
            ))}
          </List>
        </Grid>
      </BandShell>
    </Section>
  );
};

export default ProofGrid;
