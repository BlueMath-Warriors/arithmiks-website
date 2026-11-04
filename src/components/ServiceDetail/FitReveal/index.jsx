import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { Section, Glow as BandGlow, Head, HeadRow, HeadIntro } from "../Fit/index.styled";
import {
  GlowLeft,
  GlowRight,
  Grid,
  Card,
  Glow,
  Label,
  ArtWrap,
  Art,
  Text,
  Body,
  Paragraph,
  Link,
} from "./index.styled";

/**
 * "The service" as reveal cards: each card shows a label, an illustration and
 * a title, and opens its detail on hover or focus (always open on touch).
 *
 * @param {{
 *   eyebrow: string,
 *   title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   intro: string,
 *   cards: { label: string, art: string, title: string, text: string,
 *     link?: { href: string, label: string } }[],
 * }} props art: a static SVG path under /services/.
 */
const FitReveal = ({ eyebrow, title, intro, cards }) => (
  <Section id="fit" aria-labelledby="fit-h">
    <BandGlow aria-hidden="true" />
    <GlowLeft aria-hidden="true" />
    <GlowRight aria-hidden="true" />
    <BandShell>
      <Head data-reveal="">
        <Eyebrow $gap="20px">{eyebrow}</Eyebrow>
        <HeadRow>
          <Title id="fit-h" $balance>
            <HeadingText parts={title} />
          </Title>
          <HeadIntro>{intro}</HeadIntro>
        </HeadRow>
      </Head>

      <Grid data-reveal="">
        {cards.map((card) => (
          // Focusable so keyboard users can open the detail the way hover does.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <Card key={card.title} tabIndex={0}>
            <Glow aria-hidden="true" />
            <Label>{card.label}</Label>
            <ArtWrap>
              <Art src={card.art} alt="" width="240" height="192" loading="lazy" decoding="async" />
            </ArtWrap>
            <Text>
              <h3>{card.title}</h3>
              <Body>
                <div>
                  <Paragraph>{card.text}</Paragraph>
                  {card.link && (
                    <Link href={card.link.href}>
                      {card.link.label} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </Body>
            </Text>
          </Card>
        ))}
      </Grid>
    </BandShell>
  </Section>
);

export default FitReveal;
