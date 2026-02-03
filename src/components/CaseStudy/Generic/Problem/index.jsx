import React from "react";
import {
  ProblemSection,
  ProblemFrame,
  ProblemContent,
  ProblemTitle,
  ProblemText,
} from "./index.styled";

/**
 * @param {Object} props
 * @param {string} props.title 
 * @param {string} props.text 
 * @param {string} props.frameImageSrc 
 */
const Problem = ({
  title = "The Problem",
  text,
  frameImageSrc = "/projectProblemFrame.svg",
}) => {
  return (
    <ProblemSection>
      <ProblemFrame>
        <img 
          src={frameImageSrc} 
          alt={`Visual representation of ${title}`}
          width={600}
          height={400}
          loading="lazy"
          style={{ width: '100%', height: 'auto' }}
        />
        <ProblemContent>
          <ProblemTitle>{title}</ProblemTitle>
          <ProblemText>{text}</ProblemText>
        </ProblemContent>
      </ProblemFrame>
    </ProblemSection>
  );
};

export default Problem;
