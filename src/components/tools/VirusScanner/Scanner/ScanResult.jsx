import React from "react";
import { deriveVerdict, formatBytes, getScanResultFilename } from "../scanFormat";
import {
  buildEngineRows,
  describeVerdict,
  formatScanTime,
  getScanSummary,
} from "../scanReport";
import EngineBreakdown from "./EngineBreakdown";
import {
  ResultPanel,
  Summary,
  VerdictPill,
  VerdictDot,
  VerdictTitle,
  SummaryPoints,
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
  const summary = getScanSummary(result);

  return (
    <ResultPanel role="status" aria-live="polite">
      <Summary>
        <VerdictPill $tone={verdict.tone}>
          <VerdictDot $tone={verdict.tone} aria-hidden="true" />
          {verdict.label}
        </VerdictPill>
        <VerdictTitle $sentence={Boolean(summary)}>{summary?.headline ?? verdict.title}</VerdictTitle>
        {summary ? (
          summary.bullets.length > 0 && (
            <SummaryPoints>
              {summary.bullets.map((bullet, index) => (
                <li key={`${index}-${bullet}`}>{bullet}</li>
              ))}
            </SummaryPoints>
          )
        ) : (
          verdict.advice && <Advice>{verdict.advice}</Advice>
        )}
        {name && (
          <FileLine>
            <strong>{name}</strong>
            {file && ` · ${formatBytes(file.size)}`}
          </FileLine>
        )}
        <MetaLine>
          {scanTime ? `Scanned in ${scanTime} · file deleted after the scan` : "File deleted after the scan"}
        </MetaLine>
        {result.job_id && <MetaLine>Scan ID: {result.job_id}</MetaLine>}
        <OutlineButton type="button" onClick={onReset}>
          Scan another file
        </OutlineButton>
      </Summary>
      <EngineBreakdown rows={buildEngineRows(result)} />
    </ResultPanel>
  );
};

export default ScanResult;
