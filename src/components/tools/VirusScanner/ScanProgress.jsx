import React from "react";
import {
  ProgressShell,
  ProgressLabel,
  ProgressTrack,
  ProgressFill,
  PhaseRow,
  PhasePill,
  GhostBtn,
  Spinner,
  FileMeta,
} from "./index.styled";
import { formatBytes } from "./scanFormat";

const PHASES = [
  { label: "ClamAV signatures" },
  { label: "YARA rules" },
  { label: "AI analysis" },
];

/**
 * @param {{ status: "uploading"|"scanning"; progress: number; file: File; onCancel: () => void }} props
 */
const ScanProgress = ({ status, progress, file, onCancel }) => {
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
            <strong>{progress}%</strong>
          </ProgressLabel>
          <ProgressTrack
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Upload progress"
          >
            <ProgressFill $pct={progress} />
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

      <PhaseRow aria-label="Scan phases">
        {PHASES.map((phase, i) => (
          <PhasePill key={phase.label} $active={!isUploading}>
            <span className="num">{i + 1}</span>
            {phase.label}
          </PhasePill>
        ))}
      </PhaseRow>

      <div>
        <GhostBtn type="button" onClick={onCancel}>
          Cancel
        </GhostBtn>
      </div>
    </ProgressShell>
  );
};

export default ScanProgress;
