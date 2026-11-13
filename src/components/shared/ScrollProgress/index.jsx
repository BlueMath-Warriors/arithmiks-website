import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// Scaled rather than resized so each scroll frame is a compositor-only update.
const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${colors.primary};
  z-index: 99;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.1s linear;
  pointer-events: none;
`;

/** A 2px reading-progress line along the top of the viewport. */
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const paint = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <Bar ref={barRef} aria-hidden="true" />;
};

export default ScrollProgress;
