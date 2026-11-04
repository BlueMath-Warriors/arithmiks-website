import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import Diagram from "./Diagram";
import {
  Section,
  Intro,
  IntroHead,
  IntroCopy,
  OppRow,
  OppLead,
  OppGrid,
  OppCard,
  OppIcon,
  OppName,
} from "./index.styled";

/**
 * "The service": what the engagement is, the flow from inputs to a working
 * MVP, and the kinds of opportunity it tends to surface.
 *
 * @param {{
 *   eyebrow: string,
 *   title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   lead: string,
 *   body: string,
 *   diagram: { inputs: string[], stages: object[] },
 *   opportunities: { lead: string, items: { name: string, icon: string }[] },
 * }} props
 */
const AboutDiagram = ({ eyebrow, title, lead, body, diagram, opportunities }) => (
  <Section id="about" aria-labelledby="about-h">
    <BandShell>
      <Intro data-reveal="">
        <IntroHead>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title id="about-h" $balance>
            <HeadingText parts={title} />
          </Title>
        </IntroHead>
        <IntroCopy>
          <p>{lead}</p>
          <p>{body}</p>
        </IntroCopy>
      </Intro>

      <Diagram inputs={diagram.inputs} stages={diagram.stages} />

      <OppRow data-reveal="">
        <OppLead>{opportunities.lead}</OppLead>
        <OppGrid>
          {opportunities.items.map((opportunity) => (
            <OppCard key={opportunity.name}>
              <OppIcon>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d={opportunity.icon} />
                </svg>
              </OppIcon>
              <OppName>{opportunity.name}</OppName>
            </OppCard>
          ))}
        </OppGrid>
      </OppRow>
    </BandShell>
  </Section>
);

export default AboutDiagram;
