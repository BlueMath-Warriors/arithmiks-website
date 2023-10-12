import React from "react";
import { PrimaryText, Secondary, SmallTxt } from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Question from "./Question";

const Questions = () => {
  return (
    <section className={containerStyles.questions_section}>
      <SmallTxt>FAQ's</SmallTxt>
      <PrimaryText>
        Frequently Asked <Secondary>Questions</Secondary>
      </PrimaryText>
      <Question
        question={"Add commonly asked questions here"}
        answer={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus."
        }
      />
      <Question
        question={"Add commonly asked questions here"}
        answer={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus."
        }
      />
      <Question
        question={"Add commonly asked questions here"}
        answer={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus."
        }
      />
      <Question
        question={"Add commonly asked questions here"}
        answer={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut lorem quilectus molestie malesuada vitae vel purus."
        }
      />
    </section>
  );
};

export default Questions;
