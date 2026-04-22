import React from "react";
import {
  ResultCard,
  StatusPill,
  DetailRow,
  MatchList,
  MatchItem,
  ArchiveBreadcrumb,
} from "./index.styled";

/**
 * @param {{ yara: object }} props
 */
const ResultYara = ({ yara }) => {
  const y = yara || {};
  const skipped = y.skipped === true;
  const severity = y.severity || "low";
  const matches = Array.isArray(y.matches) ? y.matches : [];
  const matchCount =
    typeof y.match_count === "number" ? y.match_count : matches.length;

  const pill = skipped
    ? { label: "Not run", bg: "#f5f7fb", color: "#5c5c5c" }
    : matchCount === 0
    ? { label: "No matches", bg: "#e9f8ef", color: "#0f7a3a" }
    : severity === "high"
    ? { label: "High severity", bg: "#fdecec", color: "#c0261a" }
    : severity === "medium"
    ? { label: "Medium severity", bg: "#fff5d6", color: "#8a5a00" }
    : { label: "Low severity", bg: "#f5f7fb", color: "#5c5c5c" };

  return (
    <ResultCard>
      <h3>
        YARA rules
        <StatusPill $bg={pill.bg} $color={pill.color}>
          {pill.label}
        </StatusPill>
      </h3>

      {skipped ? (
        <DetailRow>Pattern-matching was not run for this file.</DetailRow>
      ) : matchCount === 0 ? (
        <DetailRow>
          No suspicious patterns matched in this file.
        </DetailRow>
      ) : (
        <>
          <DetailRow>
            <strong>
              {matchCount} suspicious pattern{matchCount === 1 ? "" : "s"}
            </strong>{" "}
            found in this file.
          </DetailRow>

          {matches.length > 0 && (
            <MatchList>
              {matches.map((m, i) => (
                <MatchItem key={i}>
                  <div className="rule">{m.rule}</div>
                  {m.description && (
                    <div className="desc">{m.description}</div>
                  )}
                  {Array.isArray(m.tags) && m.tags.length > 0 && (
                    <div className="tags">
                      {m.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {m.source && m.source.includes("::") && (
                    <ArchiveBreadcrumb aria-label="Archive path">
                      {m.source.split("::").map((seg, idx, arr) => (
                        <React.Fragment key={idx}>
                          <span>{seg}</span>
                          {idx < arr.length - 1 && (
                            <span className="sep">▸</span>
                          )}
                        </React.Fragment>
                      ))}
                    </ArchiveBreadcrumb>
                  )}
                </MatchItem>
              ))}
            </MatchList>
          )}
        </>
      )}
    </ResultCard>
  );
};

export default ResultYara;
