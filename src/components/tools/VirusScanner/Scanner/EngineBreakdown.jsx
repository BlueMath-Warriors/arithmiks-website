import React from "react";
import StatusIcon from "./StatusIcon";
import {
  Breakdown,
  BreakdownLabel,
  BreakdownList,
  BreakdownRow,
  RowHead,
  EngineText,
  EngineName,
  EngineNote,
  EngineStatus,
  MatchList,
  Match,
  MatchRule,
  MatchNote,
  MatchTags,
  ArchivePath,
  PathSeparator,
  Indicators,
} from "./index.styled";

const PatternMatch = ({ match }) => (
  <Match>
    <MatchRule>{match.rule}</MatchRule>
    {match.description && <MatchNote>{match.description}</MatchNote>}
    {match.tags.length > 0 && (
      <MatchTags>
        {match.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </MatchTags>
    )}
    {match.archivePath.length > 0 && (
      <ArchivePath aria-label={`Found inside ${match.archivePath.join(", then ")}`}>
        {match.archivePath.map((segment, index) => (
          // Segments can repeat (a.zip::a.zip), so position is part of the key.
          <React.Fragment key={`${index}-${segment}`}>
            {index > 0 && <PathSeparator aria-hidden="true">▸</PathSeparator>}
            <span>{segment}</span>
          </React.Fragment>
        ))}
      </ArchivePath>
    )}
  </Match>
);

/**
 * What each engine concluded, with the YARA rule matches and the AI's
 * indicators listed under their engine when there are any.
 *
 * @param {{ rows: import("../scanReport").EngineRow[] }} props
 */
const EngineBreakdown = ({ rows }) => (
  <Breakdown>
    <BreakdownLabel>Engine breakdown</BreakdownLabel>
    <BreakdownList>
      {rows.map((row) => (
        <BreakdownRow key={row.id}>
          <RowHead>
            <EngineText>
              <EngineName>{row.name}</EngineName>
              <EngineNote>{row.note}</EngineNote>
            </EngineText>
            <EngineStatus $tone={row.tone}>
              <StatusIcon tone={row.tone} />
              {row.status}
            </EngineStatus>
          </RowHead>
          {row.matches.length > 0 && (
            <MatchList>
              {row.matches.map((match, index) => (
                <PatternMatch key={`${index}-${match.rule}`} match={match} />
              ))}
            </MatchList>
          )}
          {row.indicators.length > 0 && (
            <Indicators aria-label="What the AI noticed">
              {row.indicators.map((indicator) => (
                <li key={indicator}>{indicator}</li>
              ))}
            </Indicators>
          )}
        </BreakdownRow>
      ))}
    </BreakdownList>
  </Breakdown>
);

export default EngineBreakdown;
