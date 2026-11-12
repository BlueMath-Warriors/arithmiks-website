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
 *   intro?: string,
 *   lead: { icon: string, label: string, question: string, text: string, cta: string,
 *     href?: string, textMaxWidth?: string },
 *   tiles: object[],
 *   sectionId?: string,
 *   tileHeadings?: boolean,
 * }} props
 *   intro: omitted where the design sets the title alone;
 *   lead.href: where the CTA goes (the contact form unless set);
 *   sectionId: the band's anchor, which the chapter bar links to;
 *   tileHeadings: mark tile titles up as h3 and their text as paragraphs.
 */
const Fit = ({ eyebrow, title, intro, lead, tiles, sectionId = "fit", tileHeadings = false }) => (
  <Section id={sectionId} aria-labelledby={`${sectionId}-h`}>
    <Glow aria-hidden="true" />
    <BandShell>
      <Head data-reveal="">
        <Eyebrow $gap="20px">{eyebrow}</Eyebrow>
        <HeadRow>
          <Title id={`${sectionId}-h`} $balance>
            <HeadingText parts={title} />
          </Title>
          {intro && <HeadIntro>{intro}</HeadIntro>}
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
            <LeadText $maxWidth={lead.textMaxWidth}>{lead.text}</LeadText>
            <LeadCta href={lead.href || "#contact"}>
              {lead.cta} <span aria-hidden="true">→</span>
            </LeadCta>
          </LeadBody>
        </Lead>
        {tiles.map((tile) => (
          <FitTile key={tile.n} tile={tile} asHeadings={tileHeadings} />
        ))}
      </Bento>
    </BandShell>
  </Section>
);

export default Fit;
