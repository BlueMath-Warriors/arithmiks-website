import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import FitTile from "./FitTile";
import {
  Section,
  Glow,
  Head,
  HeadRow,
  HeadIntro,
  Bento,
  Lead,
  LeadGlow,
  LeadTop,
  LeadIcon,
  LeadLabel,
  LeadBody,
  LeadQuestion,
  LeadText,
  LeadCta,
} from "./index.styled";

/**
 * "What it is": the framing question in a gradient lead card, then the
 * service's principles as numbered tiles.
 *
 * @param {{
 *   eyebrow: string,
 *   title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   intro: string,
 *   lead: { icon: string, label: string, question: string, text: string, cta: string },
 *   tiles: object[],
 * }} props
 */
const Fit = ({ eyebrow, title, intro, lead, tiles }) => (
  <Section id="fit" aria-labelledby="fit-h">
    <Glow aria-hidden="true" />
    <BandShell>
      <Head data-reveal="">
        <Eyebrow $gap="20px">{eyebrow}</Eyebrow>
        <HeadRow>
          <Title id="fit-h" $balance>
            <HeadingText parts={title} />
          </Title>
          <HeadIntro>{intro}</HeadIntro>
        </HeadRow>
      </Head>

      <Bento>
        <Lead data-reveal="">
          <LeadGlow aria-hidden="true" />
          <LeadTop>
            <LeadIcon>
              <svg
                viewBox="0 0 24 24"
                width="27"
                height="27"
                fill="none"
                stroke="#fff"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={lead.icon} />
              </svg>
            </LeadIcon>
            <LeadLabel>{lead.label}</LeadLabel>
          </LeadTop>
          <LeadBody>
            <LeadQuestion>{lead.question}</LeadQuestion>
            <LeadText>{lead.text}</LeadText>
            <LeadCta href="#contact">
              {lead.cta} <span aria-hidden="true">→</span>
            </LeadCta>
          </LeadBody>
        </Lead>
        {tiles.map((tile) => (
          <FitTile key={tile.n} tile={tile} />
        ))}
      </Bento>
    </BandShell>
  </Section>
);

export default Fit;
