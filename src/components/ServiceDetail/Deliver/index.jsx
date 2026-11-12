import React from "react";
import { BandShell } from "../../shared/Band/index.styled";
import { Card, Copy, Text, Chip } from "../ValueCard/index.styled";
import { Section, Chips } from "./index.styled";

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
 * "What you get": the engagement's deliverables as a checklist of chips, in
 * the value card's styling.
 *
 * @param {{ title: string, text: string, items: string[] }} props
 */
const Deliver = ({ title, text, items }) => (
  <Section id="deliver" aria-labelledby="deliver-h">
    <BandShell>
      <Card data-reveal="">
        <Copy>
          <h3 id="deliver-h">{title}</h3>
          <Text>{text}</Text>
        </Copy>
        <Chips>
          {items.map((item) => (
            <Chip key={item}>
              <Tick />
              {item}
            </Chip>
          ))}
        </Chips>
      </Card>
    </BandShell>
  </Section>
);

export default Deliver;
