import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../styles/tokens";
import { bandPadding, ArrowGlyph } from "../../shared/Section/index.styled";

const OPEN_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const Section = styled.section`
  ${bandPadding}
  background: #fff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(40px, 4.6vw, 90px);
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Aside = styled.div`
  position: sticky;
  top: 120px;
  align-self: start;

  h2 {
    max-width: 14ch;
  }

  @media (max-width: 1100px) {
    position: static;
  }
`;

export const AskLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 26px;
  font-size: 15px;
  font-weight: 550;
  color: ${colors.primary};

  &:hover {
    color: ${colors.primaryHover};
  }

  &:hover ${ArrowGlyph} {
    transform: translateX(4px);
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.border};
`;

export const Item = styled.div`
  border-bottom: 1px solid ${colors.border};
`;

export const Question = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: clamp(18px, 1.8vw, 26px) 0;
  background: transparent;
  border: 0;
  text-align: left;
  cursor: pointer;
`;

export const QuestionText = styled.span`
  font-size: clamp(16px, 1.2vw, 20px);
  font-weight: 650;
  letter-spacing: -0.014em;
  line-height: 1.35;
  color: ${colors.text};
`;

export const Toggle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid ${({ $open }) => ($open ? colors.primary : colors.border)};
  background: ${({ $open }) => ($open ? colors.primary : "transparent")};
  color: ${({ $open }) => ($open ? "#fff" : colors.textFaint)};
  transform: ${({ $open }) => ($open ? "rotate(45deg)" : "none")};
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  svg,
  svg * {
    color: inherit;
  }
`;

// Animating grid-template-rows 0fr → 1fr opens the answer to its natural height.
export const Panel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.4s ${OPEN_EASE};

  > div {
    min-height: 0;
    overflow: hidden;
  }
`;

export const Answer = styled.p`
  max-width: 60ch;
  padding: 0 0 clamp(20px, 2vw, 28px);
  font-size: clamp(14.5px, 0.97vw, 17px);
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;
