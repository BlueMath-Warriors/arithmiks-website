import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../../utils/animations";
import { STATIC_QUERY } from "./index.styled";

const EASE_PER_FRAME = 0.14;
const SETTLE = 0.0008;
// Extra scroll after the last note, so it can settle before the section leaves.
const TAIL_RATIO = 0.25;

/**
 * Pins the notes board and slides its track as the page scrolls past, the
 * note nearest the centre lifting and straightening as if turned up on a
 * wheel. Phones and reduced-motion visitors get a static board instead.
 *
 * @param {number[]} tilts each note's resting rotation, in degrees
 */
export const useNotesWheel = (tilts) => {
  const sectionRef = useRef(null);
  const boardRef = useRef(null);
  const trackRef = useRef(null);
  const noteRefs = useRef([]);
  const paperRefs = useRef([]);
  const fillRef = useRef(null);
  const [isStatic, setIsStatic] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;
    let current = 0;
    let target = 0;
    let frame = 0;
    let distance = 0;
    let staticMode = false;

    const paint = () => {
      track.style.transform = `translate3d(${(-distance * current).toFixed(1)}px,0,0)`;
      const mid = window.innerWidth / 2;
      noteRefs.current.forEach((note, i) => {
        if (!note) return;
        const r = note.getBoundingClientRect();
        const off = Math.min(1, Math.abs(r.left + r.width / 2 - mid) / (r.width * 1.1));
        const lift = 1 - off;
        const tilt = tilts[i] || 0;
        note.style.transform = `translate3d(0,${(-10 * lift).toFixed(1)}px,0) rotate(${(tilt * (1 - 0.7 * lift)).toFixed(2)}deg) scale(${(1 + 0.03 * lift).toFixed(3)})`;
        const paper = paperRefs.current[i];
        if (paper) {
          paper.style.boxShadow = `0 1px 2px rgba(10,15,31,.05),0 ${(16 + 12 * lift).toFixed(0)}px ${(32 + 16 * lift).toFixed(0)}px -20px rgba(10,15,31,${(0.22 + 0.1 * lift).toFixed(2)})`;
        }
      });
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${current.toFixed(4)})`;
    };

    const measure = () => {
      const span = section.offsetHeight - window.innerHeight;
      target = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / Math.max(1, span)));
    };

    const tick = () => {
      current += (target - current) * EASE_PER_FRAME;
      if (Math.abs(target - current) < SETTLE) current = target;
      paint();
      frame = current !== target ? requestAnimationFrame(tick) : 0;
    };

    const layout = () => {
      staticMode = prefersReducedMotion() || window.matchMedia(STATIC_QUERY).matches;
      setIsStatic(staticMode);
      if (staticMode) {
        section.style.height = "";
        track.style.transform = "";
        noteRefs.current.forEach((note) => note && (note.style.transform = ""));
        paperRefs.current.forEach((paper) => paper && (paper.style.boxShadow = ""));
        return;
      }
      distance = Math.max(0, track.scrollWidth - boardRef.current.clientWidth);
      section.style.height = `${window.innerHeight + distance + Math.round(window.innerHeight * TAIL_RATIO)}px`;
      measure();
      current = target;
      paint();
    };

    const onScroll = () => {
      if (staticMode) return;
      measure();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    layout();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [tilts]);

  return { sectionRef, boardRef, trackRef, noteRefs, paperRefs, fillRef, isStatic };
};

export default useNotesWheel;
