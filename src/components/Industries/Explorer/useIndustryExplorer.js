import { useCallback, useEffect, useRef, useState } from "react";
import { INDUSTRIES } from "../../../constants/industries";
import { prefersReducedMotion } from "../../../utils/animations";

const INDUSTRY_SWAP_DELAY_MS = 180;
const CASE_SWAP_DELAY_MS = 200;

/**
 * Selection state for the industry explorer: which industry is open and, for
 * industries with several case studies, which case is showing. Changes fade
 * out, swap content, then fade back in (`fadeScope` says which layer is faded)
 * unless the visitor prefers reduced motion.
 */
export const useIndustryExplorer = () => {
  const [selection, setSelection] = useState({ industryIndex: 0, caseIndex: 0 });
  const [fadeScope, setFadeScope] = useState(null);
  const [isPanelOffscreen, setIsPanelOffscreen] = useState(false);
  const panelRef = useRef(null);
  const swapTimerRef = useRef(null);

  const { industryIndex, caseIndex } = selection;
  const industry = INDUSTRIES[industryIndex];
  const activeCase = industry.cases[Math.min(caseIndex, industry.cases.length - 1)];

  const applySelection = useCallback((nextSelection, scope, swapDelayMs) => {
    clearTimeout(swapTimerRef.current);
    if (prefersReducedMotion()) {
      setSelection(nextSelection);
      return;
    }
    setFadeScope(scope);
    swapTimerRef.current = setTimeout(() => {
      setSelection(nextSelection);
      requestAnimationFrame(() => setFadeScope(null));
    }, swapDelayMs);
  }, []);

  const selectIndustry = useCallback(
    (nextIndex) => {
      if (nextIndex === industryIndex) return;
      applySelection({ industryIndex: nextIndex, caseIndex: 0 }, "panel", INDUSTRY_SWAP_DELAY_MS);
    },
    [industryIndex, applySelection]
  );

  const selectCase = useCallback(
    (nextIndex) => {
      if (nextIndex === caseIndex) return;
      applySelection({ industryIndex, caseIndex: nextIndex }, "split", CASE_SWAP_DELAY_MS);
    },
    [industryIndex, caseIndex, applySelection]
  );

  const showNextCase = useCallback(
    () => selectCase((caseIndex + 1) % industry.cases.length),
    [selectCase, caseIndex, industry.cases.length]
  );

  useEffect(() => () => clearTimeout(swapTimerRef.current), []);

  // The case rotation is driven by a CSS animation, so it is paused while the
  // panel is off screen to keep it from advancing unseen.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setIsPanelOffscreen(!entry.isIntersecting));
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return {
    industryIndex,
    caseIndex,
    industry,
    activeCase,
    fadeScope,
    isPanelOffscreen,
    panelRef,
    selectIndustry,
    selectCase,
    showNextCase,
  };
};

export default useIndustryExplorer;
