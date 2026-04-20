import React, { useCallback, useEffect, useReducer, useRef } from "react";
import UploadDropzone from "./UploadDropzone";
import ScanProgress from "./ScanProgress";
import ResultBanner from "./ResultBanner";
import ResultPhase1 from "./ResultPhase1";
import ResultYara from "./ResultYara";
import ResultPhase2 from "./ResultPhase2";
import ErrorState from "./ErrorState";
import HowItWorks from "./HowItWorks";
import PrivacyNote from "./PrivacyNote";
import {
  ScannerCard,
  ResultGrid,
  ActionsRow,
  PrimaryBtn,
  GhostBtn,
  FileMeta,
} from "./index.styled";
import { useScanUpload } from "../../hooks/useScanUpload";
import {
  validateFile,
  deriveVerdict,
  formatBytes,
} from "../../utils/scanFormat";

const initial = {
  status: "idle",
  file: null,
  progress: 0,
  result: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "PICK":
      return { ...initial, status: "validating", file: action.file };
    case "VALIDATE_OK":
      return { ...state, status: "uploading", progress: 0 };
    case "VALIDATE_ERR":
      return { ...state, status: "error", error: action.error };
    case "PROGRESS":
      return { ...state, progress: action.progress };
    case "SCANNING":
      return { ...state, status: "scanning", progress: 100 };
    case "RESULT":
      return { ...state, status: "result", result: action.result };
    case "ERROR":
      return { ...state, status: "error", error: action.error };
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

  const onProgress = useCallback(
    (p) => dispatch({ type: "PROGRESS", progress: p }),
    []
  );
  const onScanning = useCallback(() => dispatch({ type: "SCANNING" }), []);
  const onResult = useCallback(
    (r) => dispatch({ type: "RESULT", result: r }),
    []
  );
  const onError = useCallback(
    (err) => dispatch({ type: "ERROR", error: err }),
    []
  );

  const { upload, abort } = useScanUpload({
    onProgress,
    onScanning,
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
      dispatch({ type: "RESULT", result: mod.default || mod });
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

  const { status, file, progress, result, error } = state;
  const verdict = result ? deriveVerdict(result) : null;
  const filename = file?.name || result?.meta?.original_filename;

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
            progress={progress}
            file={file}
            onCancel={handleCancel}
          />
        )}

        {status === "error" && (
          <ErrorState error={error} onRetry={handleReset} />
        )}

        {status === "result" && result && (
          <div>
            <ResultBanner verdict={verdict} filename={filename} />
            {(file || result?.meta?.original_filename) && (
              <FileMeta>
                <strong>{filename}</strong>
                {file && <span>{formatBytes(file.size)}</span>}
              </FileMeta>
            )}
            <ResultGrid>
              <ResultPhase1 phase1={result.phase1} />
              <ResultYara yara={result.yara} />
              <ResultPhase2 phase2={result.phase2} />
            </ResultGrid>
            <ActionsRow style={{ marginTop: 20 }}>
              <PrimaryBtn type="button" onClick={handleReset}>
                Scan another file
              </PrimaryBtn>
              <GhostBtn
                type="button"
                onClick={() => {
                  const text = JSON.stringify(result, null, 2);
                  navigator.clipboard && navigator.clipboard.writeText(text);
                }}
              >
                Copy full report
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
