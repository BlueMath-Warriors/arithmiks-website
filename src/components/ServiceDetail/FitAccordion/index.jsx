import React, { useState } from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { Section, Glow } from "../Fit/index.styled";
import AccordionItem from "./AccordionItem";
import { Grid, Intro, Photo, List } from "./index.styled";

/**
 * "What it is" as questions: the heading and a photo beside an accordion of
 * the questions clients ask, one open at a time.
 *
 * @param {{
 *   eyebrow: string,
 *   title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   intro: string,
 *   photo: { src: string, srcSet: string, alt: string },
 *   items: { question: string, paragraphs: string[], callout?: { term: string, text: string } }[],
 *   initialOpen?: number,
 * }} props
 */
const FitAccordion = ({ eyebrow, title, intro, photo, items, initialOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState(initialOpen);
  const toggle = (index) => setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <Section id="fit" aria-labelledby="fit-h">
      <Glow aria-hidden="true" />
      <BandShell>
        <Grid>
          <div data-reveal="">
            <Eyebrow $gap="20px">{eyebrow}</Eyebrow>
            <Title id="fit-h" $balance>
              <HeadingText parts={title} />
            </Title>
            <Intro>{intro}</Intro>
            <Photo>
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(max-width: 900px) 100vw, 48vw"
                alt={photo.alt}
                width="1280"
                height="800"
                decoding="async"
              />
            </Photo>
          </div>
          <List data-reveal="">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                item={item}
                index={index}
                open={index === openIndex}
                onToggle={toggle}
              />
            ))}
          </List>
        </Grid>
      </BandShell>
    </Section>
  );
};

export default FitAccordion;
