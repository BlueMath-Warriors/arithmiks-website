import React, { forwardRef } from "react";
import { Rail, Ticks, Tick, TickBar, TickFill, TickLabel } from "./index.styled";

const tickState = (index, activeIndex) => {
  if (index === activeIndex) return "active";
  return index < activeIndex ? "past" : "upcoming";
};

/** Progress rail under the pinned stages; each tick jumps to its stage. */
const StageRail = forwardRef(({ stages, activeIndex, onSelect }, ref) => (
  <Rail as="nav" ref={ref} $visible={activeIndex >= 0} aria-label="Stages">
    <Ticks>
      {stages.map((stage, index) => (
        <Tick
          key={stage.number}
          type="button"
          aria-label={`Go to stage ${stage.number}: ${stage.title}`}
          aria-current={index === activeIndex ? "step" : undefined}
          onClick={() => onSelect(index)}
        >
          <TickBar aria-hidden="true">
            <TickFill data-tick-fill="" />
          </TickBar>
          <TickLabel $state={tickState(index, activeIndex)}>
            {stage.number} · {stage.title}
          </TickLabel>
        </Tick>
      ))}
    </Ticks>
  </Rail>
));

StageRail.displayName = "StageRail";

export default StageRail;
