import React, { forwardRef } from "react";
import { Slide, StageNumber, StageCopy, When, StageTitle, StageBody, Art } from "./index.styled";

/** @param {{ stage: object, position: "active" | "past" | "upcoming" }} props */
const StageSlide = forwardRef(({ stage, position }, ref) => (
  <Slide ref={ref} $position={position}>
    <StageNumber aria-hidden="true">{stage.number}</StageNumber>
    <StageCopy>
      <When>{stage.when}</When>
      <StageTitle>{stage.title}</StageTitle>
      <StageBody>{stage.body}</StageBody>
    </StageCopy>
    <Art $active={position === "active"} aria-hidden="true">
      <img src={stage.art} alt="" width={107} height={107} />
    </Art>
  </Slide>
));

StageSlide.displayName = "StageSlide";

export default StageSlide;
