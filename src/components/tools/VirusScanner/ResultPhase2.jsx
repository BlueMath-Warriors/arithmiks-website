import React from "react";
import {
  ResultCard,
  StatusPill,
  DetailRow,
  IndicatorList,
} from "./index.styled";

const FRIENDLY_SKIP = {
  clean_clamav: "Not needed — signatures and patterns already cleared this file.",
  timeout: "Took too long to analyze this file.",
  error: "AI analysis is temporarily unavailable.",
};

function friendlySkip(reason) {
  if (!reason) return "AI analysis was not run for this file.";
  if (FRIENDLY_SKIP[reason]) return FRIENDLY_SKIP[reason];
  return "AI analysis was not run for this file.";
}

/**
 * @param {{ phase2: object }} props
 */
const ResultPhase2 = ({ phase2 }) => {
  const p2 = phase2 || {};
  const verdict = p2.verdict || {};
  const risk = verdict.risk_level || "low";
  const indicators = Array.isArray(verdict.indicators)
    ? verdict.indicators
    : [];

  const pill = p2.skipped
    ? { label: "Not run", bg: "#f5f7fb", color: "#5c5c5c" }
    : risk === "high"
    ? { label: "High risk", bg: "#fdecec", color: "#c0261a" }
    : risk === "medium"
    ? { label: "Medium risk", bg: "#fff5d6", color: "#8a5a00" }
    : { label: "Low risk", bg: "#e9f8ef", color: "#0f7a3a" };

  return (
    <ResultCard>
      <h3>
        AI analysis
        <StatusPill $bg={pill.bg} $color={pill.color}>
          {pill.label}
        </StatusPill>
      </h3>
      {p2.skipped ? (
        <DetailRow>{friendlySkip(p2.skip_reason)}</DetailRow>
      ) : (
        <>
          {verdict.summary && <DetailRow>{verdict.summary}</DetailRow>}
          {indicators.length > 0 && (
            <>
              <DetailRow style={{ marginTop: 8 }}>
                <strong>What the AI noticed</strong>
              </DetailRow>
              <IndicatorList>
                {indicators.map((ind, i) => (
                  <li key={i}>{ind}</li>
                ))}
              </IndicatorList>
            </>
          )}
        </>
      )}
    </ResultCard>
  );
};

export default ResultPhase2;
