import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../../shared/Band/index.styled";

// The label greys the designs use: the lighter one matches the Markdown link,
// the darker one some pages use for stronger stage labels. Local to this band
// rather than widened into the palette.
const labelGrey = "#8A93A6";
const labelGreyStrong = "#6B7385";

export const Section = styled.section`
  ${bandPadding}
  background: ${({ $tinted }) => ($tinted ? colors.surface : "#fff")};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 90px;
  align-items: center;
`;

export const Copy = styled.div`
  flex: 1 1 320px;
  min-width: 0;
`;

export const Lead = styled.div`
  margin-top: 24px;
  max-width: ${({ $maxWidth }) => $maxWidth};
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.45;
  letter-spacing: -0.01em;

  /* Set on the lines themselves: the global paragraph colour would otherwise
     win over a colour inherited from this wrapper. */
  p {
    color: ${colors.text};
  }

  /* The design sets the second line — the answer — in medium. */
  p:last-child {
    font-weight: 550;
  }
`;

export const Panel = styled.div`
  flex: 1 1 520px;
  min-width: 0;
`;

export const Cells = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 clamp(24px, 2.4vw, 40px);
  border-top: 1px solid ${colors.border};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Cell = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 24px 24px 24px 0;
  border-bottom: 1px solid ${colors.border};
`;

export const IconTile = styled.span`
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #eaf0ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CellText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`;

export const CellLabel = styled.span`
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $strong }) => ($strong ? labelGreyStrong : labelGrey)};
`;

export const CellClaim = styled.span`
  font-size: clamp(16px, 1.35vw, 18.5px);
  font-weight: 550;
  letter-spacing: -0.013em;
  line-height: 1.4;
  color: ${colors.text};
  text-wrap: pretty;
`;

export const Closing = styled.p`
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;
