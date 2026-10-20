import { useCallback, useEffect, useRef, useState } from "react";
import { INDUSTRIES } from "../../../constants/industries";
import { prefersReducedMotion } from "../../../utils/animations";

const INDUSTRY_SWAP_DELAY_MS = 180;
const CASE_SWAP_DELAY_MS = 200;
const IMAGE_READY_FALLBACK_MS = 2000;

export const useIndustryExplorer = () => {
  const [selection, setSelection] = useState({ industryIndex: 0, caseIndex: 0 });
  const [fadeScope, setFadeScope] = useState(null);
  const [isPanelOffscreen, setIsPanelOffscreen] = useState(false);
  const panelRef = useRef(null);
  const caseImageRef = useRef(null);
  const swapTimerRef = useRef(null);
  const revealTokenRef = useRef(0);

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
    swapTimerRef.current = setTimeout(() => setSelection(nextSelection), swapDelayMs);
  }, []);

  // Runs once per selection, after the case card's <img> already has the new
  // src (effects fire post-commit). A token guards against a later selection
  // — or an unmount — resolving after this one.
  useEffect(() => {
    const token = (revealTokenRef.current += 1);
    let fallbackTimer;
    const reveal = () => {
      clearTimeout(fallbackTimer);
      if (revealTokenRef.current === token) setFadeScope(null);
    };
    const image = caseImageRef.current;
    if (!image || (image.complete && image.naturalWidth > 0)) {
      reveal();
      return undefined;
    }
    image.addEventListener("load", reveal);
    image.addEventListener("error", reveal);
    fallbackTimer = setTimeout(reveal, IMAGE_READY_FALLBACK_MS);
    return () => {
      image.removeEventListener("load", reveal);
      image.removeEventListener("error", reveal);
      clearTimeout(fallbackTimer);
    };
  }, [industryIndex, caseIndex]);

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

  // Warm the cache so a swap does not have to wait on the next case's image.
  useEffect(() => {
    INDUSTRIES.forEach(({ cases }) =>
      cases.forEach(({ image }) => {
        new Image().src = image;
      })
    );
  }, []);

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
    caseImageRef,
    selectIndustry,
    selectCase,
    showNextCase,
  };
};

export default useIndustryExplorer;
