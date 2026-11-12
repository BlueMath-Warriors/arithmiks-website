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
 *   cards: { label?: string, art: string, title: string, text: string,
 *     link?: { href: string, label: string } }[],
 *   sectionId?: string,
 *   evenHead?: boolean,
 *   largeText?: boolean,
 *   whiteSurface?: boolean,
 * }} props art: a static SVG path under /services/; label: omitted where the
 *   design numbers nothing;
 *   sectionId: the band's anchor, which the chapter bar links to;
 *   evenHead: title and intro in equal columns, as the AI service designs set it;
 *   largeText: the larger card type of the three-card designs;
 *   whiteSurface: the white-band version, with one glow and a ruled card frame.
 */
const FitReveal = ({
  eyebrow,
  title,
  intro,
  cards,
  sectionId = "fit",
  evenHead = false,
  largeText = false,
  whiteSurface = false,
}) => (
  <Section id={sectionId} aria-labelledby={`${sectionId}-h`} $white={whiteSurface}>
    {!whiteSurface && <BandGlow aria-hidden="true" />}
    <GlowLeft aria-hidden="true" $white={whiteSurface} />
    {!whiteSurface && <GlowRight aria-hidden="true" />}
    <BandShell>
      <Head data-reveal="">
        <Eyebrow $gap="20px">{eyebrow}</Eyebrow>
        <HeadRow $even={evenHead}>
          <Title id={`${sectionId}-h`} $balance>
            <HeadingText parts={title} />
          </Title>
          <HeadIntro $even={evenHead}>{intro}</HeadIntro>
        </HeadRow>
      </Head>

      <Grid data-reveal="" $columns={cards.length} $white={whiteSurface}>
        {cards.map((card) => (
          // Focusable so keyboard users can open the detail the way hover does.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          <Card key={card.title} tabIndex={0} $oddCount={cards.length % 2 === 1}>
            <Glow aria-hidden="true" />
            {card.label && <Label>{card.label}</Label>}
            <ArtWrap>
              <Art src={card.art} alt="" width="240" height="192" loading="lazy" decoding="async" />
            </ArtWrap>
            <Text $large={largeText}>
              <h3>{card.title}</h3>
              <Body>
                <div>
                  <Paragraph $large={largeText} $white={whiteSurface}>
                    {card.text}
                  </Paragraph>
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
