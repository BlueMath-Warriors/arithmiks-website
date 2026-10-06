import React, { useState } from "react";
import { Shell } from "../../shared/Section/index.styled";
import { Eyebrow, Title, Grad } from "../index.styled";
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
import { FAQS } from "../content";

const Faq = () => {
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
      <Shell>
        <Layout>
          <Aside data-reveal="">
            <Eyebrow>FAQs</Eyebrow>
            <Title id="faq-h">
              <Grad>Asked before</Grad>
              <br />
              we start
            </Title>
            <AsideNote>Anything else, bring it to the first call. It's free.</AsideNote>
          </Aside>

          <List>
            {FAQS.map((faq, index) => {
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
                  <Panel
                    id={panelId}
                    role="region"
                    aria-labelledby={questionId}
                    $open={isOpen}
                  >
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
      </Shell>
    </Section>
  );
};

export default Faq;
