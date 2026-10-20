import React from "react";
import { Shell } from "../../shared/Section/index.styled";
import { Eyebrow, Title, Grad, Lead, PrimaryButton } from "../index.styled";
import {
  OutcomesSection,
  Grid,
  Cell,
  CellNumber,
  CellTitle,
  CtaCell,
  CtaInner,
  CtaLine,
  Closing,
  ValueSection,
  ValueCard,
  ValueCopy,
  ValueTitle,
  ValueText,
  ValueChips,
  ValueChip,
} from "./index.styled";
import { OUTCOMES, VALUE_AREAS } from "../content";

export const Outcomes = () => (
  <OutcomesSection id="outcomes" aria-labelledby="outcomes-h">
    <Shell>
      <div data-reveal="">
        <Eyebrow>Outcomes</Eyebrow>
        <Title id="outcomes-h">
          From AI ideas to a
          <br />
          <Grad>clear path forward</Grad>
        </Title>
        <Lead>By the end of the engagement, you will have:</Lead>
      </div>

      <Grid data-stagger="up">
        {OUTCOMES.map((outcome, i) => (
          <Cell key={outcome} data-reveal="">
            <CellNumber>{String(i + 1).padStart(2, "0")}</CellNumber>
            <CellTitle>{outcome}</CellTitle>
          </Cell>
        ))}
        <CtaCell data-reveal="">
          <CtaInner>
            <CtaLine>
              See how quickly you can reach these{" "}
              <br />
              outcomes
            </CtaLine>
            <PrimaryButton href="#contact">
              Book a Free AI Consultation <span aria-hidden="true">→</span>
            </PrimaryButton>
          </CtaInner>
        </CtaCell>
      </Grid>

      <Closing data-reveal="">
        With the use case assessed and the requirements clear, your team knows what it takes to move
        forward with development.
      </Closing>
    </Shell>
  </OutcomesSection>
);

export const ValueBand = () => (
  <ValueSection aria-labelledby="value-h">
    <Shell>
      <ValueCard data-reveal="">
        <ValueCopy>
          <ValueTitle id="value-h">Where could AI create value?</ValueTitle>
          <ValueText>
            We focus on finding where AI can genuinely improve the way your business works, and
            where it makes sense to invest.
          </ValueText>
        </ValueCopy>
        <ValueChips>
          {VALUE_AREAS.map((area) => (
            <ValueChip key={area}>
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="m3 8.4 3.2 3.2L13 4.8" />
              </svg>
              {area}
            </ValueChip>
          ))}
        </ValueChips>
      </ValueCard>
    </Shell>
  </ValueSection>
);
