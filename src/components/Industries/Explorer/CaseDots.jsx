import React from "react";
import { DotRow, CaseDot, CaseDotFill } from "./index.styled";

// The current dot's fill animation doubles as the rotation timer: when it
// finishes, `onCurrentFillEnd` advances to the next case.
const CaseDots = ({ cases, currentIndex, onSelect, onCurrentFillEnd }) => (
  <DotRow role="group" aria-label="Case studies in this industry">
    {cases.map((caseStudy, index) => {
      const isCurrent = index === currentIndex;
      return (
        <CaseDot
          key={caseStudy.client}
          type="button"
          aria-label={`Show the ${caseStudy.client} case study`}
          aria-current={isCurrent}
          $isCurrent={isCurrent}
          onClick={() => onSelect(index)}
        >
          {isCurrent && <CaseDotFill data-dotfill="" aria-hidden="true" onAnimationEnd={onCurrentFillEnd} />}
        </CaseDot>
      );
    })}
  </DotRow>
);

export default CaseDots;
