import React, { useState } from "react";
import {
  AnswerText,
  OuterContainer,
  QuestionContainer,
  QuestionText,
  ArrowImg
} from "./index.styled";
import ArrowUp from "../../../../images/arrow-up.svg";
import ArrowDown from "../../../../images/arrow-down.svg";

const Question = (props) => {
  const {question, answer} = props;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <OuterContainer showAnswer={showAnswer}>
      <QuestionContainer>
        <QuestionText>{question}</QuestionText>
        <ArrowImg onClick={()=>{setShowAnswer(!showAnswer)}} src={showAnswer ? ArrowUp : ArrowDown}/>
      </QuestionContainer>
      {showAnswer && (
        <AnswerText>
          {answer}
        </AnswerText>
      )}
    </OuterContainer>
  );
};

export default Question;
