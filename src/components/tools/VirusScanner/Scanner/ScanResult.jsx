import React from "react";
import { deriveVerdict, formatBytes, getScanResultFilename } from "../scanFormat";
import { buildEngineRows, describeVerdict, formatScanTime } from "../scanReport";
import EngineBreakdown from "./EngineBreakdown";
import {
  ResultPanel,
  Summary,
  VerdictPill,
  VerdictDot,
  VerdictTitle,
  Advice,
  FileLine,
  MetaLine,
  OutlineButton,
} from "./index.styled";

/**
 * The scan card once a report is in: the verdict on the left, what each
 * engine found on the right.
 *
 * @param {{ result: object, file: File | null, durationMs: number | null,
 *   onReset: () => void }} props
 */
const ScanResult = ({ result, file, durationMs, onReset }) => {
  const verdict = describeVerdict(deriveVerdict(result));
  const name = file?.name || getScanResultFilename(result);
  const scanTime = formatScanTime(durationMs);

  return (
    <ResultPanel role="status" aria-live="polite">
      <Summary>
        <VerdictPill $tone={verdict.tone}>
          <VerdictDot $tone={verdict.tone} aria-hidden="true" />
          {verdict.label}
        </VerdictPill>
        <VerdictTitle>{verdict.title}</VerdictTitle>
        {verdict.advice && <Advice>{verdict.advice}</Advice>}
        {name && (
          <FileLine>
            <strong>{name}</strong>
            {file && ` · ${formatBytes(file.size)}`}
          </FileLine>
        )}
        <MetaLine>
          {scanTime ? `Scanned in ${scanTime} · deleted from memory` : "Deleted from memory"}
        </MetaLine>
        <OutlineButton type="button" onClick={onReset}>
          Scan another file
        </OutlineButton>
      </Summary>
      <EngineBreakdown rows={buildEngineRows(result)} />
    </ResultPanel>
  );
};

export default ScanResult;
