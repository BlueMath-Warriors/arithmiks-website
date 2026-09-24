import React, { useState } from "react";
import { Shell, Eyebrow, SectionTitle, GradientText, ArrowGlyph } from "../../shared/Section/index.styled";
import {
  Section,
  Grid,
  Aside,
  AskLink,
  List,
  Item,
  Question,
  QuestionText,
  Toggle,
  Panel,
  Answer,
} from "./index.styled";

const FAQS = [
  {
    question: "How soon can you start?",
    answer: "Pay-as-you-go work can start within a week, and an audit within one to two. A fixed-scope project starts once the proposal is signed — typically two weeks after the first call, since scoping takes one.",
  },
  {
    question: "What if the audit says the idea is not feasible?",
    answer: "Then you have saved the cost of building it. The report explains what the data can support today and what would need to change; many clients use it to fix the data and come back.",
  },
  {
    question: "Who will actually work on our product?",
    answer: "The engineer who joins your first call. We do not have a sales layer — the person who scopes the work is the person who leads it, and the team is named in the proposal.",
  },
  {
    question: "How do you handle changes mid-project?",
    answer: "Openly. A change is written up with its effect on scope, cost and date, and agreed before anything moves. Nothing is absorbed silently and billed later.",
  },
  {
    question: "Which time zone do you work in?",
    answer: "We are in Lahore (PKT, UTC+5). Stand-ups and demos are scheduled to overlap with your working day; written reports mean you are never waiting on a meeting to know where things stand.",
  },
  {
    question: "Do we own everything you build?",
    answer: "Yes — code, models, infrastructure and documentation, in your accounts, with no licence back to us. Handover is part of every stage, not a separate purchase.",
  },
];

const Faq = () => {
  // Single-open accordion; null means every answer is closed.
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Section id="faq" aria-labelledby="faq-h">
      <Shell data-shell="">
        <Grid>
          <Aside>
            <Eyebrow>Questions</Eyebrow>
            <SectionTitle id="faq-h">
              Things people ask before <GradientText>the first call.</GradientText>
            </SectionTitle>
            <AskLink to="/contact">
              Ask something else <ArrowGlyph aria-hidden="true">→</ArrowGlyph>
            </AskLink>
          </Aside>
          <List>
            {FAQS.map((faq, index) => {
              const open = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const questionId = `faq-question-${index}`;
              return (
                <Item key={faq.question}>
                  <Question
                    id={questionId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <QuestionText>{faq.question}</QuestionText>
                    <Toggle $open={open} aria-hidden="true">
                      <svg
                        viewBox="0 0 16 16"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </Toggle>
                  </Question>
                  <Panel id={panelId} $open={open} role="region" aria-labelledby={questionId} aria-hidden={!open}>
                    <div>
                      <Answer>{faq.answer}</Answer>
                    </div>
                  </Panel>
                </Item>
              );
            })}
          </List>
        </Grid>
      </Shell>
    </Section>
  );
};

export default Faq;
