import React, { useState } from "react";
import { BandShell, Eyebrow, Title } from "../Band/index.styled";
import HeadingText from "../Band/HeadingText";
import {
  Section,
  Layout,
  Aside,
  AsideNote,
  List,
  Item,
  Question,
  QuestionText,
  Toggle,
  Panel,
  Answer,
} from "./index.styled";

/**
 * @typedef {{ question: string, answer: (string | { text: string, href: string })[] }} FaqItem
 * @param {{
 *   eyebrow?: string,
 *   title: import("../Band/HeadingText").HeadingPart[],
 *   note: string,
 *   items: FaqItem[],
 * }} props
 */
const Faq = ({ eyebrow = "FAQs", title, note, items }) => {
  // Any number of answers can be open at once, as in the design.
  const [open, setOpen] = useState(() => new Set());

  const toggle = (index) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <Section id="faq" aria-labelledby="faq-h">
      <BandShell>
        <Layout>
          <Aside data-reveal="">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Title id="faq-h">
              <HeadingText parts={title} />
            </Title>
            <AsideNote>{note}</AsideNote>
          </Aside>

          <List>
            {items.map((faq, index) => {
              const isOpen = open.has(index);
              const panelId = `faq-panel-${index}`;
              const questionId = `faq-question-${index}`;
              return (
                <Item key={faq.question} $open={isOpen} data-reveal="">
                  <Question
                    id={questionId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <QuestionText>{faq.question}</QuestionText>
                    <Toggle $open={isOpen} aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </Toggle>
                  </Question>
                  <Panel id={panelId} role="region" aria-labelledby={questionId} $open={isOpen}>
                    <div>
                      <Answer>
                        {faq.answer.map((part, i) =>
                          typeof part === "string" ? (
                            <React.Fragment key={i}>{part}</React.Fragment>
                          ) : (
                            <a key={i} href={part.href}>
                              {part.text}
                            </a>
                          )
                        )}
                      </Answer>
                    </div>
                  </Panel>
                </Item>
              );
            })}
          </List>
        </Layout>
      </BandShell>
    </Section>
  );
};

export default Faq;
