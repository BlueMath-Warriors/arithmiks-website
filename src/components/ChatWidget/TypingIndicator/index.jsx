import React from "react";
import { IndicatorRow, IndicatorBubble, Dot } from "./index.styled";

export default function TypingIndicator() {
  return (
    <IndicatorRow aria-label="Arithmiks AI is typing" role="status">
      <IndicatorBubble>
        <Dot $delay="0ms" />
        <Dot $delay="150ms" />
        <Dot $delay="300ms" />
      </IndicatorBubble>
    </IndicatorRow>
  );
}
