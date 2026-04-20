import React from "react";
import {
  Section,
  SectionInner,
  SectionHead,
  SectionEyebrow,
  SectionHeading,
  SectionSub,
  FaqGrid,
  FaqItem,
} from "./index.styled";

/**
 * @param {{ faq: { question: string; answer: string }[] }} props
 */
const FAQ = ({ faq }) => {
  if (!faq || faq.length === 0) return null;
  return (
    <Section alt>
      <SectionInner>
        <SectionHead>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <SectionHeading>Frequently asked questions</SectionHeading>
          <SectionSub>
            Everything you need to know before you upload a file — privacy,
            detection engines, size limits, and more.
          </SectionSub>
        </SectionHead>
        <FaqGrid>
          {faq.map((item) => (
            <FaqItem key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </FaqItem>
          ))}
        </FaqGrid>
      </SectionInner>
    </Section>
  );
};

export default FAQ;
