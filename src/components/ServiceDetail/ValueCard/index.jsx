import React from "react";
import { BandShell } from "../../shared/Band/index.styled";
import { useValueChipFit } from "./useValueChipFit";
import { Section, Card, Copy, Text, LineBreak, Chips, Chip } from "./index.styled";

const Tick = () => (
  <svg
    viewBox="0 0 16 16"
    width="14"
    height="14"
    fill="none"
    stroke="#1355FF"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 8.4 3.2 3.2L13 4.8" />
  </svg>
);

/**
 * "Where could X help?": a short prompt beside the areas the service pays back in.
 *
 * @param {{ title: string, text: [string, string], areas: string[], chipsPerRow?: number }} props
 *   text: the paragraph split where the design breaks the line on wide screens.
 */
const ValueCard = ({ title, text, areas, chipsPerRow = 2 }) => {
  const { chipsRef, breakRef } = useValueChipFit(chipsPerRow);

  return (
    <Section id="value" aria-label={title}>
      <BandShell>
        <Card data-reveal="">
          <Copy>
            <h3>{title}</h3>
            <Text>
              {text[0]}
              <LineBreak ref={breakRef} /> {text[1]}
            </Text>
          </Copy>
          <Chips ref={chipsRef}>
            {areas.map((area) => (
              <Chip key={area}>
                <Tick />
                {area}
              </Chip>
            ))}
          </Chips>
        </Card>
      </BandShell>
    </Section>
  );
};

export default ValueCard;
