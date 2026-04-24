import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import UploadDropzone from "./UploadDropzone";
import ScanProgress from "./ScanProgress";
import ResultBanner from "./ResultBanner";
import UserReportSummary from "./UserReportSummary";
import ResultPhase1 from "./ResultPhase1";
import ResultYara from "./ResultYara";
import ResultPhase2 from "./ResultPhase2";
import ErrorState from "./ErrorState";
import HowItWorks from "./HowItWorks";
import PrivacyNote from "./PrivacyNote";
import {
  ScannerCard,
  ResultGrid,
  TechnicalDetails,
  ActionsRow,
  PrimaryBtn,
  GhostBtn,
  FileMeta,
} from "./index.styled";
import { useScanUpload } from "./useScanUpload";
import {
  validateFile,
  deriveVerdict,
  formatBytes,
  createInitialPhases,
  reconcilePhasesFromResult,
  markRunningPhasesFailed,
  isPhaseId,
  getUserSummaryParts,
  getScanResultFilename,
} from "./scanFormat";

const CheckSmallIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 8 3.5 3.5L13 4.5" />
  </svg>
);

const initial = {
  status: "idle",
  file: null,
  result: null,
  error: null,
  phases: createInitialPhases(),
};

function reducer(state, action) {
  switch (action.type) {
    case "PICK":
      return {
        ...initial,
        status: "validating",
        file: action.file,
        phases: createInitialPhases(),
      };
    case "VALIDATE_OK":
      return { ...state, status: "uploading" };
    case "VALIDATE_ERR":
      return {
        ...state,
        status: "error",
        error: action.error,
        phases: createInitialPhases(),
      };
    case "SCANNING":
      return { ...state, status: "scanning" };
    case "PHASE_START": {
      if (!isPhaseId(action.phase)) return state;
      return {
        ...state,
        phases: { ...state.phases, [action.phase]: "running" },
      };
    }
    case "PHASE_COMPLETE": {
      if (!isPhaseId(action.phase)) return state;
      return {
        ...state,
        phases: { ...state.phases, [action.phase]: "completed" },
      };
    }
    case "RESULT":
      return {
        ...state,
        status: "result",
        result: action.result,
        phases: reconcilePhasesFromResult(state.phases, action.result),
      };
    case "ERROR":
      return {
        ...state,
        status: "error",
        error: action.error,
        phases: markRunningPhasesFailed(state.phases),
      };
    case "RESET":
      return initial;
    default:
      return state;
  }
}

const FIXTURES = {
  clean: () => import("./__fixtures__/clean.json"),
  "infected-clamav": () => import("./__fixtures__/infected-clamav.json"),
  "infected-yara": () => import("./__fixtures__/infected-yara.json"),
  "infected-yara-archive": () =>
    import("./__fixtures__/infected-yara-archive.json"),
  "suspicious-escalated": () =>
    import("./__fixtures__/suspicious-escalated.json"),
  "phase2-skipped": () => import("./__fixtures__/phase2-skipped.json"),
};

/**
 * @param {{ howToSteps?: { name: string; text: string }[] }} props
 */
const VirusScanner = ({ howToSteps = [] }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const dropzoneRef = useRef(null);

  const onUploading = useCallback(() => {}, []);
  const onScanning = useCallback(() => dispatch({ type: "SCANNING" }), []);
  const onPhaseStart = useCallback(
    (phase) => dispatch({ type: "PHASE_START", phase }),
    []
  );
  const onPhaseComplete = useCallback(
    (phase) => dispatch({ type: "PHASE_COMPLETE", phase }),
    []
  );
  const onResult = useCallback(
    (r) => dispatch({ type: "RESULT", result: r }),
    []
  );
  const onError = useCallback(
    (err) => dispatch({ type: "ERROR", error: err }),
    []
  );

  const { upload, abort } = useScanUpload({
    onUploading,
    onScanning,
    onPhaseStart,
    onPhaseComplete,
    onResult,
    onError,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (process.env.NODE_ENV === "production") return;
    const params = new URLSearchParams(window.location.search);
    const mock = params.get("mock");
    if (!mock || !FIXTURES[mock]) return;
    let cancelled = false;
    FIXTURES[mock]().then((mod) => {
      if (cancelled) return;
      const result = mod.default || mod;
      dispatch({ type: "RESULT", result });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handlePick = useCallback(
    (file) => {
      dispatch({ type: "PICK", file });
      const check = validateFile(file);
      if (!check.ok) {
        dispatch({ type: "VALIDATE_ERR", error: { error: check.error } });
        return;
      }
      dispatch({ type: "VALIDATE_OK" });
      upload(file);
    },
    [upload]
  );

  const handleCancel = useCallback(() => {
    abort();
    dispatch({ type: "RESET" });
  }, [abort]);

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  const { status, file, result, error, phases } = state;
  const verdict = result ? deriveVerdict(result) : null;
  const resolvedName = getScanResultFilename(result);
  const filename = file?.name || resolvedName;
  const summaryParts = result ? getUserSummaryParts(result) : { headline: null, bullets: [] };
  const bannerTitle = summaryParts.headline || undefined;
  const userSummaryText =
    result && typeof result.user_summary === "string" ? result.user_summary.trim() : "";

  const [copied, setCopied] = useState(null); // "summary" | "report" | null
  const copyTimerRef = useRef(null);

  const handleCopy = useCallback((kind, text) => {
    if (!text) return;
    const write =
      navigator.clipboard && navigator.clipboard.writeText
        ? navigator.clipboard.writeText(text)
        : Promise.reject(new Error("clipboard unavailable"));
    Promise.resolve(write)
      .then(() => {
        setCopied(kind);
        if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
        copyTimerRef.current = setTimeout(() => setCopied(null), 1800);
      })
      .catch(() => {
        /* silently swallow — user can retry */
      });
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  return (
    <>
      <ScannerCard aria-label="Virus scanner">
        {status === "idle" || status === "validating" ? (
          <div ref={dropzoneRef}>
            <UploadDropzone onPick={handlePick} />
          </div>
        ) : null}

        {(status === "uploading" || status === "scanning") && (
          <ScanProgress
            status={status}
            phases={phases}
            file={file}
            onCancel={handleCancel}
          />
        )}

        {status === "error" && (
          <ErrorState error={error} onRetry={handleReset} />
        )}

        {status === "result" && result && (
          <div>
            <ResultBanner
              verdict={verdict}
              filename={filename}
              title={bannerTitle}
            />
            {(file || resolvedName) && (
              <FileMeta>
                <strong>{filename}</strong>
                {file && <span>{formatBytes(file.size)}</span>}
              </FileMeta>
            )}
            <UserReportSummary bullets={summaryParts.bullets} />
            <TechnicalDetails>
              <summary>Technical details</summary>
              <ResultGrid>
                <ResultPhase1 phase1={result.phase1} />
                <ResultYara yara={result.yara} />
                <ResultPhase2 phase2={result.phase2} />
              </ResultGrid>
            </TechnicalDetails>
            <ActionsRow style={{ marginTop: 20 }}>
              <PrimaryBtn type="button" onClick={handleReset}>
                Scan another file
              </PrimaryBtn>
              {userSummaryText ? (
                <GhostBtn
                  type="button"
                  aria-live="polite"
                  onClick={() => handleCopy("summary", userSummaryText)}
                >
                  {copied === "summary" ? (
                    <>
                      <CheckSmallIcon />
                      Summary copied
                    </>
                  ) : (
                    "Copy summary"
                  )}
                </GhostBtn>
              ) : null}
              <GhostBtn
                type="button"
                aria-live="polite"
                onClick={() =>
                  handleCopy("report", JSON.stringify(result, null, 2))
                }
              >
                {copied === "report" ? (
                  <>
                    <CheckSmallIcon />
                    Report copied
                  </>
                ) : (
                  "Copy full report"
                )}
              </GhostBtn>
            </ActionsRow>
          </div>
        )}
      </ScannerCard>

      <PrivacyNote />
      <HowItWorks steps={howToSteps} />
    </>
  );
};

export default VirusScanner;
