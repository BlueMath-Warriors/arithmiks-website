import React from "react";
import {
  ResultCard,
  StatusPill,
  DetailRow,
  IndicatorList,
  MutedText,
} from "./index.styled";

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
  const notes = Array.isArray(p2.risk_notes) ? p2.risk_notes : [];

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
        <DetailRow>
          AI analysis was skipped
          {p2.skip_reason ? ` — ${p2.skip_reason.replace(/_/g, " ")}` : ""}.
        </DetailRow>
      ) : (
        <>
          {verdict.summary && <DetailRow>{verdict.summary}</DetailRow>}
          {indicators.length > 0 && (
            <>
              <DetailRow style={{ marginTop: 8 }}>
                <strong>Indicators</strong>
              </DetailRow>
              <IndicatorList>
                {indicators.map((ind, i) => (
                  <li key={i}>{ind}</li>
                ))}
              </IndicatorList>
            </>
          )}
          {p2.analysis && <MutedText>{p2.analysis}</MutedText>}
          {notes.length > 0 && (
            <MutedText>
              {notes.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </MutedText>
          )}
        </>
      )}
    </ResultCard>
  );
};

export default ResultPhase2;
