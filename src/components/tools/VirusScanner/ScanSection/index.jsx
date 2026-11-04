import React from "react";
import { colors } from "../../../../styles/tokens";
import { Eyebrow, Title } from "../../../shared/Band/index.styled";
import HeadingText from "../../../shared/Band/HeadingText";
import Scanner from "../Scanner";
import { THREATS } from "../content";
import {
  Section,
  Shell,
  Threats,
  ThreatsHead,
  ThreatGrid,
  Threat,
  ThreatText,
  ThreatName,
  ThreatNote,
} from "./index.styled";

/** The scan card, lifted over the hero, then "What it catches". */
const ScanSection = () => (
  <Section id="scan">
    <Shell>
      <Scanner />

      <Threats>
        <ThreatsHead data-reveal="">
          <div>
            <Eyebrow $gap="20px">{THREATS.eyebrow}</Eyebrow>
            <Title $balance>
              <HeadingText parts={THREATS.title} />
            </Title>
          </div>
        </ThreatsHead>
        <ThreatGrid>
          {THREATS.items.map((threat) => (
            <Threat key={threat.name} data-reveal="">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke={colors.primary}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={threat.icon} />
              </svg>
              <ThreatText>
                <ThreatName>{threat.name}</ThreatName>
                <ThreatNote>{threat.note}</ThreatNote>
              </ThreatText>
            </Threat>
          ))}
        </ThreatGrid>
      </Threats>
    </Shell>
  </Section>
);

export default ScanSection;
