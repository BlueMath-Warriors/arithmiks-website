import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import {
  Section,
  Layout,
  Intro,
  Lines,
  Line,
  Types,
  Grid,
  Type,
  TypeIcon,
  TypeName,
  Note,
} from "./index.styled";

/**
 * "What we build": the kinds of project the service covers, beside a short
 * prompt and a closing note.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   lines: [string, string], types: { icon: string, name: string }[], note: string }} props
 *   lines: the prompt's plain line, then its emphasised one.
 */
const BuildTypes = ({ eyebrow, title, lines, types, note }) => (
  <Section id="outcomes" aria-labelledby="outcomes-h">
    <BandShell>
      <Layout>
        <Intro data-reveal="">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title id="outcomes-h" $balance>
            <HeadingText parts={title} />
          </Title>
          <Lines>
            <Line>{lines[0]}</Line>
            <Line $strong>{lines[1]}</Line>
          </Lines>
        </Intro>
        <Types>
          <Grid>
            {types.map((type) => (
              <Type key={type.name} data-reveal="">
                <TypeIcon>
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
                    <path d={type.icon} />
                  </svg>
                </TypeIcon>
                <TypeName>{type.name}</TypeName>
              </Type>
            ))}
          </Grid>
          <Note data-reveal="">{note}</Note>
        </Types>
      </Layout>
    </BandShell>
  </Section>
);

export default BuildTypes;
