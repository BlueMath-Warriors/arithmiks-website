import React from "react";
import {
  ProgressShell,
  ProgressLabel,
  ProgressTrack,
  IndeterminateFill,
  PhaseRow,
  PhasePill,
  PhasePillSpinner,
  GhostBtn,
  FileMeta,
  Spinner,
} from "./index.styled";
import { formatBytes } from "./scanFormat";
import { CheckTinyIcon, SkipTinyIcon, FailTinyIcon } from "./icons";

const SR_ONLY = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
};

const PHASES = [
  { id: "clamav", label: "ClamAV signatures" },
  { id: "yara", label: "YARA rules" },
  { id: "ai", label: "AI analysis" },
];

/**
 * @param {string} st
 * @param {string} label
 */
function phaseAriaLabel(st, label) {
  switch (st) {
    case "pending":
      return `${label}, not started`;
    case "running":
      return `${label}, in progress`;
    case "completed":
      return `${label}, completed`;
    case "skipped":
      return `${label}, skipped`;
    case "failed":
      return `${label}, failed`;
    default:
      return label;
  }
}

/**
 * @param {object} props
 * @param {string} props.status
 * @param {Record<"clamav"|"yara"|"ai", string>} props.phases
 * @param {File|null} props.file
 * @param {() => void} props.onCancel
 */
const ScanProgress = ({ status, phases, file, onCancel }) => {
  const isUploading = status === "uploading";

  return (
    <ProgressShell>
      {file && (
        <FileMeta>
          <strong>{file.name}</strong>
          <span>{formatBytes(file.size)}</span>
        </FileMeta>
      )}

      {isUploading ? (
        <>
          <ProgressLabel>
            <span>Uploading your file…</span>
            <span style={{ opacity: 0.75, fontSize: 13, fontWeight: 500 }}>
              Sending…
            </span>
          </ProgressLabel>
          <ProgressTrack
            role="progressbar"
            aria-busy="true"
            aria-label="Uploading file"
          >
            <IndeterminateFill />
          </ProgressTrack>
        </>
      ) : (
        <ProgressLabel>
          <span>
            <Spinner aria-hidden="true" />
            Analyzing file — typically 5–30 seconds
          </span>
        </ProgressLabel>
      )}

      <div aria-live="polite" aria-atomic="false">
        <PhaseRow role="list" aria-label="Scan phases">
          {PHASES.map((phase, i) => {
            const st = phases[phase.id] || "pending";
            return (
              <PhasePill
                key={phase.id}
                role="listitem"
                $state={st}
                aria-label={phaseAriaLabel(st, phase.label)}
              >
                <span className="phaseChip">
                  {st === "pending" && <span>{i + 1}</span>}
                  {st === "running" && (
                    <>
                      <span style={SR_ONLY} role="status">
                        Running
                      </span>
                      <PhasePillSpinner aria-hidden="true" />
                    </>
                  )}
                  {st === "completed" && <CheckTinyIcon />}
                  {st === "skipped" && <SkipTinyIcon />}
                  {st === "failed" && <FailTinyIcon />}
                </span>
                <span className="phaseLabel">{phase.label}</span>
              </PhasePill>
            );
          })}
        </PhaseRow>
      </div>

      <div>
        <GhostBtn type="button" onClick={onCancel}>
          Cancel
        </GhostBtn>
      </div>
    </ProgressShell>
  );
};

export default ScanProgress;
