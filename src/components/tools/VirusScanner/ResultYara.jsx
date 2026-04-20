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
  const archive = y.archive_scan || null;

  const pill = skipped
    ? { label: "Not run", bg: "#f5f7fb", color: "#5c5c5c" }
    : matches.length === 0
    ? { label: "No matches", bg: "#e9f8ef", color: "#0f7a3a" }
    : severity === "high"
    ? { label: "High severity", bg: "#fdecec", color: "#c0261a" }
    : severity === "medium"
    ? { label: "Medium severity", bg: "#fff5d6", color: "#8a5a00" }
    : { label: "Low severity", bg: "#f5f7fb", color: "#5c5c5c" };

  const grouped = matches.reduce((acc, m) => {
    const ns = m.namespace || "other";
    (acc[ns] = acc[ns] || []).push(m);
    return acc;
  }, {});

  return (
    <ResultCard>
      <h3>
        YARA rules
        <StatusPill $bg={pill.bg} $color={pill.color}>
          {pill.label}
        </StatusPill>
      </h3>

      {skipped ? (
        <DetailRow>
          YARA was skipped{y.skip_reason ? ` — ${y.skip_reason}` : ""}.
        </DetailRow>
      ) : (
        <>
          <DetailRow>
            <strong>{y.match_count || matches.length || 0}</strong> rule
            {(y.match_count || matches.length) === 1 ? "" : "s"} matched
            {typeof y.rules_loaded === "number" && (
              <> · {y.rules_loaded} rules loaded</>
            )}
          </DetailRow>
          {y.severity_escalated && (
            <DetailRow>
              <strong>Escalated</strong> from {y.severity_base} to {severity}
              {y.correlation_reason ? ` (${y.correlation_reason})` : ""}
            </DetailRow>
          )}

          {matches.length > 0 && (
            <MatchList>
              {Object.keys(grouped).map((ns) => (
                <React.Fragment key={ns}>
                  <DetailRow>
                    <strong>{ns}</strong>
                  </DetailRow>
                  {grouped[ns].map((m, i) => (
                    <MatchItem key={`${ns}-${i}`}>
                      <div className="rule">{m.rule}</div>
                      {m.description && <div className="desc">{m.description}</div>}
                      {Array.isArray(m.tags) && m.tags.length > 0 && (
                        <div className="tags">
                          {m.tags.map((t) => (
                            <span key={t} className="tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      {m.source && (
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
                </React.Fragment>
              ))}
            </MatchList>
          )}

          {archive && (
            <DetailRow style={{ marginTop: 12 }}>
              <strong>Archive:</strong>{" "}
              {archive.members_scanned != null
                ? `${archive.members_scanned} members scanned · `
                : ""}
              {archive.nested_archives || 0} nested · depth{" "}
              {archive.max_depth ?? 0}
            </DetailRow>
          )}
        </>
      )}
    </ResultCard>
  );
};

export default ResultYara;
