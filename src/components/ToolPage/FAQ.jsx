import React from "react";
import { Section, SectionInner, SectionHeading, FaqItem } from "./index.styled";

/**
 * @param {{ faq: { question: string; answer: string }[] }} props
 */
const FAQ = ({ faq }) => {
  if (!faq || faq.length === 0) return null;
  return (
    <Section alt>
      <SectionInner>
        <SectionHeading>Frequently asked questions</SectionHeading>
        {faq.map((item) => (
          <FaqItem key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </FaqItem>
        ))}
      </SectionInner>
    </Section>
  );
};

export default FAQ;
