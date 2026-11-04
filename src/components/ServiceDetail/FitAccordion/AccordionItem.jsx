import React from "react";
import {
  Item,
  Rail,
  Question,
  QuestionText,
  Panel,
  PanelBody,
  Answer,
  Callout,
  CalloutTerm,
  CalloutText,
} from "./index.styled";

/**
 * @param {{
 *   item: { question: string, paragraphs: string[], callout?: { term: string, text: string } },
 *   index: number,
 *   open: boolean,
 *   onToggle: (index: number) => void,
 * }} props
 */
const AccordionItem = ({ item, index, open, onToggle }) => {
  const buttonId = `fit-acc-q-${index}`;
  const panelId = `fit-acc-p-${index}`;
  return (
    <Item>
      <Rail $open={open} aria-hidden="true" />
      <Question
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
      >
        <QuestionText $open={open}>{item.question}</QuestionText>
      </Question>
      <Panel id={panelId} role="region" aria-labelledby={buttonId} $open={open}>
        <div>
          <PanelBody $open={open}>
            {item.paragraphs.map((paragraph, n) => (
              <Answer key={paragraph} $first={n === 0}>
                {paragraph}
              </Answer>
            ))}
            {item.callout && (
              <Callout>
                <CalloutTerm>{item.callout.term}</CalloutTerm>
                <CalloutText>{item.callout.text}</CalloutText>
              </Callout>
            )}
          </PanelBody>
        </div>
      </Panel>
    </Item>
  );
};

export default AccordionItem;
