import React, { useState } from "react";
import { Shell, Eyebrow, GradientText, ArrowGlyph } from "../../shared/Section/index.styled";
import {
  Section,
  Intro,
  Title,
  TableScroller,
  Table,
  CornerCell,
  ColumnHead,
  RowLabel,
  Cell,
  FootLabel,
  FootCell,
  CtaLink,
} from "./index.styled";

const MODELS = [
  { name: "AI readiness audit", cta: "Book an audit" },
  { name: "Fixed-scope project", cta: "Scope a project" },
  { name: "Retainer", cta: "Start a retainer" },
  { name: "Pay as you go", cta: "Get started" },
];

const ROWS = [
  {
    label: "Best when",
    values: [
      "The idea is clear but the data is not",
      "The first version is well defined",
      "Work is steady and ongoing",
      "Needs are small, varied or unpredictable",
    ],
  },
  {
    label: "Scope",
    values: [
      "One question, one report",
      "Fixed at proposal; changes priced",
      "Agreed monthly hours, planned with you",
      "Task by task, as needs come up",
    ],
  },
  {
    label: "Team",
    values: [
      "1 senior AI engineer",
      "Lead + 1–3 engineers, designer as needed",
      "A consistent team that knows your product",
      "Engineers matched to each request",
    ],
  },
  {
    label: "Billing",
    values: [
      "Fixed price on delivery",
      "Milestones, typically 3–4",
      "Fixed monthly retainer",
      "Hourly, for time actually used",
    ],
  },
  {
    label: "Typical start",
    values: ["1–2 weeks", "Within 2 weeks of sign-off", "1–2 weeks", "Within a week"],
  },
  {
    label: "You end up with",
    values: [
      "A decision you can defend",
      "A shipped product and a date met",
      "Reliable capacity at a predictable cost",
      "Expert help only when you need it",
    ],
  },
];

// The most-chosen model is highlighted until the visitor points at another.
const DEFAULT_HIGHLIGHT = 1;

const EngagementModels = () => {
  const [highlighted, setHighlighted] = useState(DEFAULT_HIGHLIGHT);

  // The highlight follows the hovered column so the table reads as something
  // to compare with, not a fixed recommendation.
  const handlePointerOver = (event) => {
    const cell = event.target.closest("[data-column]");
    if (cell) setHighlighted(Number(cell.getAttribute("data-column")));
  };

  return (
    <Section id="models" aria-labelledby="models-h">
      <Shell data-shell="">
        <Intro>
          <Eyebrow $onDark>Engagement models</Eyebrow>
          <Title id="models-h">
            Four ways to start, <GradientText $onDark>compared side by side.</GradientText>
          </Title>
        </Intro>

        <TableScroller>
          <Table onPointerOver={handlePointerOver}>
            <thead>
              <tr>
                <CornerCell scope="col">
                  <span>Compare</span>
                </CornerCell>
                {MODELS.map((model, index) => (
                  <ColumnHead key={model.name} scope="col" data-column={index} $highlighted={highlighted === index}>
                    <span>{model.name}</span>
                  </ColumnHead>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <RowLabel scope="row">
                    <span>{row.label}</span>
                  </RowLabel>
                  {row.values.map((value, index) => (
                    <Cell key={MODELS[index].name} data-column={index} $highlighted={highlighted === index}>
                      <span>{value}</span>
                    </Cell>
                  ))}
                </tr>
              ))}
              <tr>
                <FootLabel scope="row" aria-label="Get started" />
                {MODELS.map((model, index) => (
                  <FootCell key={model.name} data-column={index} $highlighted={highlighted === index}>
                    <CtaLink to="/contact" $highlighted={highlighted === index}>
                      {model.cta} <ArrowGlyph aria-hidden="true">→</ArrowGlyph>
                    </CtaLink>
                  </FootCell>
                ))}
              </tr>
            </tbody>
          </Table>
        </TableScroller>
      </Shell>
    </Section>
  );
};

export default EngagementModels;
