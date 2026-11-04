import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { Section, Head, Cards, Card, Icon, Tag, Name, Description } from "./index.styled";

/**
 * "Use cases": the kinds of product the service is used for, one card each.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   cases: { icon: string, tag: string, name: string, text: string }[] }} props
 */
const UseCases = ({ eyebrow, title, cases }) => (
  <Section id="usecases" aria-labelledby="uc-h">
    <BandShell>
      <Head data-reveal="">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title id="uc-h">
          <HeadingText parts={title} />
        </Title>
      </Head>
      <Cards data-reveal="">
        {cases.map((useCase) => (
          <Card key={useCase.name}>
            <Icon>
              <svg
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="none"
                stroke="#1355FF"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={useCase.icon} />
              </svg>
            </Icon>
            <Tag>{useCase.tag}</Tag>
            <Name>{useCase.name}</Name>
            <Description>{useCase.text}</Description>
          </Card>
        ))}
      </Cards>
    </BandShell>
  </Section>
);

export default UseCases;
