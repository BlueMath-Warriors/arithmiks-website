import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../index.styled";

const OPEN_EASE = "cubic-bezier(.16,1,.3,1)";

export const Section = styled.section`
  ${bandPadding}
  background: #fff;
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 90px;
  align-items: flex-start;
`;

export const Aside = styled.div`
  flex: 1 1 320px;
  min-width: 0;
  position: sticky;
  top: calc(var(--chrome-offset, 140px) + 10px);
  align-self: flex-start;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const AsideNote = styled.p`
  margin-top: 20px;
  max-width: 340px;
  font-size: 15px;
  line-height: 1.7;
  color: ${colors.textFaint};
`;

export const List = styled.div`
  flex: 1 1 520px;
  min-width: 0;
`;

export const Item = styled.div`
  border-bottom: 1px solid ${colors.border};
  background: ${({ $open }) => ($open ? "#fff" : "transparent")};
  transition: background 0.4s ease;
`;

export const QuestionText = styled.h3`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: clamp(16px, 1.3vw, 18.5px);
  font-weight: 550;
  letter-spacing: -0.013em;
  line-height: 1.35;
  color: inherit;
`;

export const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 16px;
  background: transparent;
  border: 0;
  text-align: left;
  color: ${colors.text};
  cursor: pointer;
  transition: background 0.35s ease, color 0.35s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
    color: ${colors.primary};
  }

  @media (max-width: 640px) {
    padding: 20px 4px;
  }
`;

export const Toggle = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${({ $open }) => ($open ? colors.primary : colors.border)};
  background: ${({ $open }) => ($open ? colors.primary : "#fff")};
  color: ${({ $open }) => ($open ? "#fff" : colors.textFaint)};
  font-size: 17px;
  font-weight: 300;
  line-height: 1;
  transition: all 0.35s ${OPEN_EASE};
`;

// Animating grid-template-rows 0fr → 1fr opens the answer to its natural height.
// A closed answer is also visibility:hidden, so its links leave the tab order
// and the accessibility tree; on close that waits for the collapse to finish.
export const Panel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  overflow: hidden;
  transition: grid-template-rows 0.5s ${OPEN_EASE}, opacity 0.4s ease,
    visibility 0s linear ${({ $open }) => ($open ? "0s" : "0.5s")};

  > div {
    min-height: 0;
  }
`;

export const Answer = styled.p`
  max-width: 620px;
  padding: 0 16px 28px;
  font-size: 14.5px;
  line-height: 1.72;
  color: ${colors.textMuted};
  text-wrap: pretty;

  a {
    color: ${colors.primary};
    font-weight: 550;
    text-decoration: underline;
    text-decoration-color: rgba(19, 85, 255, 0.35);
    text-underline-offset: 2px;
    transition: text-decoration-color 0.25s ease;
  }

  a:hover {
    color: ${colors.primary};
    text-decoration-color: ${colors.primary};
  }

  @media (max-width: 640px) {
    padding: 0 4px 24px;
  }
`;
