import React from "react";
import { Shell } from "../../shared/Section/index.styled";
import { Eyebrow, Title, Grad } from "../index.styled";
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
  Closing,
} from "./index.styled";
import { OPPORTUNITIES } from "../content";

const ServiceOverview = () => (
  <Section id="about" aria-labelledby="about-h">
    <Shell>
      <Intro data-reveal="">
        <IntroHead>
          <Eyebrow>The service</Eyebrow>
          <Title id="about-h">
            What is <Grad>AI Discovery, Strategy &amp; Roadmap?</Grad>
          </Title>
        </IntroHead>
        <IntroCopy>
          <p>
            AI Discovery, Strategy &amp; Roadmap helps businesses identify where AI can solve real
            operational problems, and where it may not be the right fit.
          </p>
          <p>
            We start by understanding how your business works, the challenges your teams face, and
            where time or resources are being lost. From there, we identify practical AI
            opportunities and assess what it would take to implement them.
          </p>
        </IntroCopy>
      </Intro>

      <Diagram />

      <OppRow data-reveal="">
        <OppLead>Depending on your business, these opportunities may include:</OppLead>
        <OppGrid>
          {OPPORTUNITIES.map((opportunity) => (
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

      <Closing data-reveal="">
        <p>
          We then assess each opportunity for feasibility, looking at the available data, required
          integrations, governance, and solution requirements.
        </p>
        <p>
          The outcome is a practical AI roadmap that shows which opportunities are worth pursuing,
          what it will take to implement them, and how to move toward a working AI MVP.
        </p>
      </Closing>
    </Shell>
  </Section>
);

export default ServiceOverview;
