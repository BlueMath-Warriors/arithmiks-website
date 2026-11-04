import { useEffect, useRef } from "react";
import { DIAGRAM_WIDTH, STACK_QUERY } from "./index.styled";

const SETTLE_DELAYS_MS = [0, 300, 1200];

/**
 * Draws the diagram at its design width and scales it down to fit narrower
 * frames, reserving the scaled height so the band doesn't keep the unscaled
 * one. Phones get the stacked layout instead, so nothing is scaled there.
 */
export const useDiagramScale = () => {
  const frameRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const fit = () => {
      const frame = frameRef.current;
      const stage = stageRef.current;
      if (!frame || !stage) return;
      stage.style.width = `${DIAGRAM_WIDTH}px`;
      stage.style.transform = "";
      frame.style.removeProperty("--diagram-height");
      if (window.matchMedia(STACK_QUERY).matches) {
        stage.style.width = "";
        return;
      }
      const scale = Math.min(1, frame.clientWidth / DIAGRAM_WIDTH);
      if (scale < 1) {
        stage.style.transform = `scale(${scale})`;
        frame.style.setProperty("--diagram-height", `${Math.ceil(stage.offsetHeight * scale)}px`);
      } else {
        stage.style.width = "";
      }
    };
    const timers = SETTLE_DELAYS_MS.map((delay) => setTimeout(fit, delay));
    window.addEventListener("resize", fit);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return { frameRef, stageRef };
};

export default useDiagramScale;
