import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import {
  Section,
  Row,
  Copy,
  Lead,
  Panel,
  Cells,
  Cell,
  IconTile,
  CellText,
  CellLabel,
  CellClaim,
  Closing,
} from "./index.styled";

/**
 * The cost of not acting: the case for moving on the left, and the stages it
 * goes wrong in on the right — each a stage label over what happens at it.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   lead: [string, string], cells: { icon: string, label: string, claim: string }[],
 *   closing: string, sectionId?: string, leadMaxWidth?: string, strongLabels?: boolean,
 *   tinted?: boolean }} props
 *   lead: the problem, then what Arithmiks does about it, the second set in medium;
 *   cells: four stages, in order; icon is a 24x24 SVG path;
 *   sectionId: "cost" on most pages, "risks" where the chapter bar names it that;
 *   leadMaxWidth: the lead lines' measure; strongLabels: the darker stage labels;
 *   tinted: set the band on the surface grey instead of white.
 */
const Stakes = ({
  eyebrow,
  title,
  lead,
  cells,
  closing,
  sectionId = "cost",
  leadMaxWidth = "380px",
  strongLabels = false,
  tinted = false,
}) => (
  <Section id={sectionId} aria-labelledby={`${sectionId}-h`} $tinted={tinted}>
    <BandShell>
      <Row>
        <Copy data-reveal="">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title id={`${sectionId}-h`} $balance>
            <HeadingText parts={title} />
          </Title>
          <Lead $maxWidth={leadMaxWidth}>
            {lead.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </Lead>
        </Copy>

        <Panel>
          <Cells>
            {cells.map((cell) => (
              <Cell key={cell.label} data-reveal="">
                <IconTile>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#1355FF"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={cell.icon} />
                  </svg>
                </IconTile>
                <CellText>
                  <CellLabel $strong={strongLabels}>{cell.label}</CellLabel>
                  <CellClaim>{cell.claim}</CellClaim>
                </CellText>
              </Cell>
            ))}
          </Cells>
          <Closing data-reveal="">{closing}</Closing>
        </Panel>
      </Row>
    </BandShell>
  </Section>
);

export default Stakes;
