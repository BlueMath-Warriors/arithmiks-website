import styled, { css } from "styled-components";
import { colors } from "../../../../styles/tokens";
import { sweep } from "../Hero/index.styled";

const MONO = "ui-monospace, 'JetBrains Mono', Menlo, monospace";
const HAIRLINE = "#EEF1F6";
const QUIET = "#8A93A6";

/** Status colours: ink for text, plus the pill's fill, outline and dot. */
export const TONES = {
  clean: { ink: "#15803D", fill: "#ECFDF3", line: "#BBF7D0", dot: "#22C55E" },
  suspicious: { ink: "#B45309", fill: "#FFFBEB", line: "#FDE68A", dot: "#F59E0B" },
  infected: { ink: "#B91C1C", fill: "#FEF2F2", line: "#FECACA", dot: "#EF4444" },
  neutral: { ink: QUIET, fill: colors.surface, line: colors.border, dot: QUIET },
  active: { ink: colors.primary, fill: "#EEF3FF", line: "#C9D6FF", dot: colors.primary },
};

export const Card = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: clamp(14px, 1.4vw, 20px);
  border-radius: 26px;
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 0 40px 90px -50px rgba(7, 11, 24, 0.55);
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;

/* ── Idle: drop zone ─────────────────────────────────────────────────── */

const dropzoneLine = ({ $dragging, $rejected }) => {
  if ($dragging) return colors.primary;
  return $rejected ? "#EF4444" : "#C9D6FF";
};

export const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  padding: clamp(40px, 5vw, 68px) 24px;
  border-radius: 18px;
  border: 1.5px dashed ${dropzoneLine};
  background: ${({ $dragging }) =>
    $dragging ? "rgba(19,85,255,.06)" : "linear-gradient(180deg, #FAFBFF, #F4F7FF)"};
  cursor: pointer;
  transition:
    background 0.25s ease,
    border-color 0.25s ease;

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 3px;
  }
`;

export const DropIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: linear-gradient(135deg, #3f74dc 0%, #7e7bd6 40%, #a96fc8 70%, #ec4a9e 100%);
  box-shadow: 0 14px 30px -14px rgba(126, 123, 214, 0.9);
`;

export const DropTitle = styled.span`
  margin-top: 6px;
  font-size: clamp(19px, 1.6vw, 23px);
  font-weight: 650;
  letter-spacing: -0.014em;
  color: ${({ $rejected }) => ($rejected ? TONES.infected.ink : colors.text)};
`;

export const DropNote = styled.span`
  font-size: 14px;
  color: ${colors.textFaint};
`;

export const DropButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 12px 24px;
  border-radius: 100px;
  background: ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 600;
`;

/* ── Shared panel layout (busy, result, error) ───────────────────────── */

const panelPadding = css`
  padding: clamp(24px, 3vw, 40px);
`;

export const BusyPanel = styled.div`
  ${panelPadding}
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: clamp(20px, 3vw, 40px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ResultPanel = styled.div`
  ${panelPadding}
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(20px, 3vw, 40px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ErrorPanel = styled.div`
  ${panelPadding}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

/* ── Busy ────────────────────────────────────────────────────────────── */

export const Radar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const RadarRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid ${colors.border};
`;

export const RadarSweep = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(126, 123, 214, 0) 0deg,
    rgba(126, 123, 214, 0) 290deg,
    rgba(19, 85, 255, 0.28) 360deg
  );
  animation: ${sweep} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const RadarMark = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BusyBody = styled.div`
  min-width: 0;
`;

export const FileName = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 650;
  color: ${colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ActivityRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-top: 3px;
`;

export const Activity = styled.span`
  min-width: 0;
  font-size: 13.5px;
  color: ${colors.textFaint};
`;

export const ProgressList = styled.ul`
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`;

export const ProgressRow = styled.li`
  display: grid;
  grid-template-columns: 120px minmax(0, 1fr) 86px;
  gap: 14px;
  align-items: center;
  padding: 14px 0;
  border-top: 1px solid ${HAIRLINE};
`;

export const EngineName = styled.span`
  display: block;
  font-size: 14.5px;
  font-weight: 600;
  color: ${colors.text};
`;

export const Track = styled.span`
  display: block;
  height: 6px;
  border-radius: 6px;
  background: ${HAIRLINE};
  overflow: hidden;
`;

export const Fill = styled.span`
  display: block;
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(90deg, #3f74dc, #a96fc8, #ec4a9e);
  /* A running engine creeps slowly (there's no real progress to show); a
     finished one snaps to full. */
  transition: width ${({ $running }) => ($running ? "8s cubic-bezier(.15,.7,.3,1)" : ".35s ease")};
`;

export const ProgressStatus = styled.span`
  text-align: right;
  font-size: 13px;
  font-weight: 550;
  color: ${({ $tone }) => TONES[$tone].ink};
`;

// Sits on the status line, so it keeps that line's height.
export const TextButton = styled.button`
  flex: none;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  font-size: 13.5px;
  line-height: inherit;
  font-weight: 600;
  color: ${colors.textFaint};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

/* ── Result ──────────────────────────────────────────────────────────── */

export const Summary = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

export const VerdictPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 100px;
  background: ${({ $tone }) => TONES[$tone].fill};
  border: 1px solid ${({ $tone }) => TONES[$tone].line};
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ $tone }) => TONES[$tone].ink};
`;

export const VerdictDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $tone }) => TONES[$tone].dot};
`;

export const VerdictTitle = styled.h2`
  margin: 0;
  font-size: clamp(24px, 2.2vw, 32px);
  font-weight: 650;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: ${colors.text};
`;

export const Advice = styled.p`
  margin: 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const FileLine = styled.p`
  margin: 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: ${colors.textMuted};
  overflow-wrap: anywhere;

  strong {
    font-weight: 600;
    color: ${colors.text};
  }
`;

export const MetaLine = styled.p`
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
  color: ${colors.textFaint};
`;

export const OutlineButton = styled.button`
  margin-top: 6px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 100px;
  border: 1.5px solid ${colors.primary};
  background: #fff;
  color: ${colors.primary};
  font: inherit;
  font-size: 14.5px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const Breakdown = styled.div`
  min-width: 0;
`;

export const BreakdownLabel = styled.h3`
  margin: 0;
  padding-bottom: 4px;
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${QUIET};
`;

export const BreakdownList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BreakdownRow = styled.li`
  padding: 14px 0;
  border-top: 1px solid ${HAIRLINE};
`;

export const RowHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
`;

export const EngineText = styled.div`
  min-width: 0;
`;

export const EngineNote = styled.span`
  display: block;
  margin-top: 2px;
  font-size: 13px;
  line-height: 1.5;
  color: ${colors.textFaint};
`;

export const EngineStatus = styled.span`
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ $tone }) => TONES[$tone].ink};

  svg,
  svg * {
    color: inherit;
  }
`;

export const MatchList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
`;

export const Match = styled.li`
  padding: 10px 12px;
  border-radius: 10px;
  background: #f7f9fc;
  border: 1px solid ${HAIRLINE};
`;

export const MatchRule = styled.span`
  display: block;
  font-family: ${MONO};
  font-size: 12.5px;
  font-weight: 600;
  color: ${colors.text};
  overflow-wrap: anywhere;
`;

export const MatchNote = styled.span`
  display: block;
  margin-top: 2px;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${colors.textFaint};
`;

export const MatchTags = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 6px;

  span {
    padding: 2px 8px;
    border-radius: 100px;
    background: #fff;
    border: 1px solid ${colors.border};
    font-size: 11px;
    font-weight: 600;
    color: ${colors.textFaint};
  }
`;

export const ArchivePath = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  margin-top: 6px;
  font-family: ${MONO};
  font-size: 11.5px;
  color: ${colors.textMuted};
  overflow-wrap: anywhere;
`;

export const PathSeparator = styled.span`
  color: ${QUIET};
`;

export const Indicators = styled.ul`
  margin: 8px 0 0;
  padding-left: 16px;
  font-size: 13px;
  line-height: 1.5;
  color: ${colors.textMuted};

  li + li {
    margin-top: 2px;
  }
`;

/* ── Error ───────────────────────────────────────────────────────────── */

export const ErrorBody = styled.p`
  margin: 0;
  max-width: 560px;
  font-size: 14.5px;
  line-height: 1.6;
  color: ${colors.textMuted};
`;

/* ── Privacy note ────────────────────────────────────────────────────── */

export const Privacy = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: clamp(12px, 1.2vw, 16px) clamp(4px, 0.6vw, 8px) 2px;
  font-size: 13.5px;
  line-height: 1.6;
  color: ${colors.textMuted};

  svg {
    flex: none;
    margin-top: 1px;
  }

  strong {
    font-weight: 650;
    color: ${colors.text};
  }
`;
