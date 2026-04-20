import React from "react";
import { ResultCard, StatusPill, DetailRow } from "./index.styled";

/**
 * @param {{ phase1: object }} props
 */
const ResultPhase1 = ({ phase1 }) => {
  const p1 = phase1 || {};
  const skipped = p1.skipped === true;
  const infected = !!p1.infected;

  const pill = skipped
    ? { label: "Not run", bg: "#f5f7fb", color: "#5c5c5c" }
    : infected
    ? { label: "Infected", bg: "#fdecec", color: "#c0261a" }
    : { label: "Clean", bg: "#e9f8ef", color: "#0f7a3a" };

  return (
    <ResultCard>
      <h3>
        ClamAV signatures
        <StatusPill $bg={pill.bg} $color={pill.color}>
          {pill.label}
        </StatusPill>
      </h3>
      {skipped ? (
        <DetailRow>
          This engine was not run for this scan.
        </DetailRow>
      ) : infected ? (
        <>
          <DetailRow>
            <strong>Threat:</strong> {p1.threat_name || "Unknown"}
          </DetailRow>
          {typeof p1.raw_exit_code === "number" && (
            <DetailRow>
              <strong>Exit code:</strong> {p1.raw_exit_code}
            </DetailRow>
          )}
          {p1.details && <DetailRow>{p1.details}</DetailRow>}
        </>
      ) : (
        <DetailRow>No known malware signatures matched this file.</DetailRow>
      )}
    </ResultCard>
  );
};

export default ResultPhase1;
