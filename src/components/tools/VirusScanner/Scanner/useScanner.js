import { useCallback, useEffect, useReducer, useRef } from "react";
import { fileExtension, fileSizeBucket, track } from "../../../../utils/analytics";
import { useScanUpload } from "../useScanUpload";
import { deriveVerdict, validateFile } from "../scanFormat";
import { initialScanState, scanReducer } from "./scanReducer";

// Development only: ?mock=<name> renders a stored report without the API.
const FIXTURES = {
  clean: () => import("../__fixtures__/clean.json"),
  "infected-clamav": () => import("../__fixtures__/infected-clamav.json"),
  "infected-yara": () => import("../__fixtures__/infected-yara.json"),
  "infected-yara-archive": () => import("../__fixtures__/infected-yara-archive.json"),
  "suspicious-escalated": () => import("../__fixtures__/suspicious-escalated.json"),
  "phase2-skipped": () => import("../__fixtures__/phase2-skipped.json"),
};

/**
 * The scan card's state machine wired to the streaming scanner API, with
 * analytics for start, completion and failure.
 *
 * @returns {{ state: typeof initialScanState, pick: (file: File | undefined) => void,
 *   cancel: () => void, reset: () => void }}
 */
export const useScanner = () => {
  const [state, dispatch] = useReducer(scanReducer, initialScanState);
  const startedAtRef = useRef(0);

  const onScanning = useCallback(() => dispatch({ type: "SCANNING" }), []);
  const onPhaseStart = useCallback((phase) => dispatch({ type: "PHASE_START", phase }), []);
  const onPhaseComplete = useCallback((phase) => dispatch({ type: "PHASE_COMPLETE", phase }), []);
  const onResult = useCallback((result) => {
    const durationMs = Date.now() - startedAtRef.current;
    track("tool_scan_complete", {
      verdict: deriveVerdict(result),
      duration_s: Math.round(durationMs / 1000),
    });
    dispatch({ type: "RESULT", result, durationMs });
  }, []);
  const onError = useCallback((error) => {
    track("tool_scan_error", { error_code: String(error?.code || "network") });
    dispatch({ type: "ERROR", error });
  }, []);

  const { upload, abort } = useScanUpload({
    onScanning,
    onPhaseStart,
    onPhaseComplete,
    onResult,
    onError,
  });

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return undefined;
    const mock = new URLSearchParams(window.location.search).get("mock");
    if (!mock || !FIXTURES[mock]) return undefined;
    let cancelled = false;
    FIXTURES[mock]().then((module) => {
      if (!cancelled) dispatch({ type: "RESULT", result: module.default || module });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const pick = useCallback(
    (file) => {
      if (!file) return;
      const check = validateFile(file);
      if (!check.ok) {
        track("tool_scan_error", { error_code: "validation" });
        dispatch({ type: "REJECT", code: check.error });
        return;
      }
      dispatch({ type: "START", file });
      // Extension and size bucket only: file names can carry personal data.
      track("tool_scan_start", {
        file_ext: fileExtension(file.name),
        file_size_kb: fileSizeBucket(file.size),
      });
      startedAtRef.current = Date.now();
      upload(file);
    },
    [upload],
  );

  const cancel = useCallback(() => {
    abort();
    dispatch({ type: "RESET" });
  }, [abort]);

  const reset = useCallback(() => dispatch({ type: "RESET" }), []);

  return { state, pick, cancel, reset };
};
