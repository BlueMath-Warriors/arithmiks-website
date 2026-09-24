import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../styles/tokens";
import { bandPadding, ArrowGlyph } from "../../shared/Section/index.styled";

const CELL_PAD_X = "clamp(14px, 1.4vw, 22px)";
const ROW_PAD_Y = "clamp(14px, 1.4vw, 20px)";
const FOOT_PAD_Y = "clamp(18px, 1.8vw, 26px)";
const ROW_RULE = "1px solid rgba(255, 255, 255, 0.1)";
const HIGHLIGHT_BG = "rgba(92, 140, 255, 0.16)";
const IDLE_BG = "rgba(255, 255, 255, 0.035)";
const COLUMN_TRANSITION = "background 0.28s ease";

const columnBackground = ({ $highlighted }) => ($highlighted ? HIGHLIGHT_BG : IDLE_BG);

export const Section = styled.section`
  position: relative;
  ${bandPadding}
  background: ${colors.dark};
`;

export const Intro = styled.div`
  max-width: 52ch;
`;

export const Title = styled.h2`
  font-size: clamp(26px, 2.9vw, 46px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;
  text-wrap: balance;
`;

export const TableScroller = styled.div`
  margin-top: clamp(30px, 3vw, 52px);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 820px;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;
`;

const stickyLabel = `
  position: sticky;
  left: 0;
  z-index: 2;
  background: ${colors.dark};
`;

const columnName = `
  font-size: clamp(15.5px, 1.15vw, 19px);
  font-weight: 700;
  letter-spacing: -0.014em;
  line-height: 1.25;
`;

export const CornerCell = styled.th`
  ${stickyLabel}
  padding: 0 20px 16px 0;
  vertical-align: bottom;
  width: 180px;

  span {
    ${columnName}
    color: rgba(255, 255, 255, 0.45);
  }
`;

export const ColumnHead = styled.th`
  padding: 0 ${CELL_PAD_X} 16px;
  vertical-align: bottom;
  background: ${columnBackground};
  border-radius: 14px 14px 0 0;
  transition: ${COLUMN_TRANSITION};

  span {
    display: block;
    padding-top: clamp(16px, 1.6vw, 22px);
    ${columnName}
    color: ${({ $highlighted }) => ($highlighted ? "#fff" : "rgba(255, 255, 255, 0.82)")};
  }
`;

export const RowLabel = styled.th`
  ${stickyLabel}
  padding: ${ROW_PAD_Y} 20px ${ROW_PAD_Y} 0;
  vertical-align: top;
  border-top: ${ROW_RULE};

  span {
    font-size: 12.5px;
    font-weight: 650;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Cell = styled.td`
  padding: ${ROW_PAD_Y} ${CELL_PAD_X};
  vertical-align: top;
  border-top: ${ROW_RULE};
  background: ${columnBackground};
  transition: ${COLUMN_TRANSITION};

  span {
    font-size: clamp(13.5px, 0.95vw, 15.5px);
    line-height: 1.55;
    color: ${({ $highlighted }) => ($highlighted ? "#fff" : "rgba(255, 255, 255, 0.66)")};
    transition: color 0.28s ease;
  }
`;

export const FootLabel = styled.th`
  ${stickyLabel}
  padding: ${FOOT_PAD_Y} 20px 0 0;
  border-top: ${ROW_RULE};
`;

export const FootCell = styled.td`
  padding: ${FOOT_PAD_Y} ${CELL_PAD_X};
  border-top: ${ROW_RULE};
  background: ${columnBackground};
  border-radius: 0 0 14px 14px;
  transition: ${COLUMN_TRANSITION};
`;

export const CtaLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ $highlighted }) => ($highlighted ? "#fff" : "#8FA9FF")};
  white-space: nowrap;

  &:hover {
    color: ${({ $highlighted }) => ($highlighted ? "#fff" : "#8FA9FF")};
  }

  &:hover ${ArrowGlyph} {
    transform: translateX(4px);
  }
`;
