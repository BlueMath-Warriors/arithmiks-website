import React from "react";
import {
  ProblemSection,
  ProblemFrame,
  ProblemContent,
  ProblemTitle,
  ProblemText,
} from "./index.styled";

const Problem = () => {
  return (
    <ProblemSection>
      <ProblemFrame>
        <img src="/projectProblemFrame.svg" alt="Problem Frame" />
        <ProblemContent>
          <ProblemTitle>The Problem</ProblemTitle>
          <ProblemText>
            Traditional loan processing is scattered across emails, spreadsheets, and separate storage tools, leading to lost documents, miscommunication, and slow approvals. SBA Loans HQ solves this by unifying the entire workflow into one efficient digital system.
          </ProblemText>
        </ProblemContent>
      </ProblemFrame>
    </ProblemSection>
  );
};

export default Problem;

