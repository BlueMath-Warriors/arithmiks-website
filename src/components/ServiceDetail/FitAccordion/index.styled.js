import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { brandGradient } from "../../shared/Section/index.styled";

const EASE = "cubic-bezier(.16,1,.3,1)";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(40px, 6vw, 110px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Intro = styled.p`
  margin: 22px 0 0;
  max-width: 520px;
  font-size: 16px;
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Photo = styled.div`
  margin-top: clamp(26px, 2.6vw, 36px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  aspect-ratio: 16 / 10;
  background: #eaf0ff;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const List = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: clamp(0px, 1vw, 10px);
`;

export const Item = styled.div`
  position: relative;
  padding-left: 24px;
`;

export const Rail = styled.span`
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 3px;
  border-radius: 3px;
  background: ${({ $open }) =>
    $open ? "linear-gradient(180deg,#5C8CFF,#1355FF 55%,#A96FC8)" : "#D5DCEA"};
  transition: background 0.4s ease;
`;

export const QuestionText = styled.span`
  font-size: clamp(17px, 1.4vw, 21px);
  font-weight: 550;
  letter-spacing: -0.014em;
  line-height: 1.3;
  color: ${({ $open }) => ($open ? colors.text : colors.textMuted)};
  text-wrap: balance;
  transition: color 0.3s ease;
`;

export const Question = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 0;
  background: none;
  border: 0;
  text-align: left;
  cursor: pointer;
  color: ${colors.text};

  &:hover ${QuestionText} {
    color: ${colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 4px;
    border-radius: 8px;
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  transition: grid-template-rows 0.5s ${EASE},
    visibility 0s linear ${({ $open }) => ($open ? "0s" : "0.5s")};

  > div {
    min-height: 0;
    overflow: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const PanelBody = styled.div`
  padding: 0 0 18px 0;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) => ($open ? "none" : "translate3d(0,-6px,0)")};
  transition: ${({ $open }) =>
    $open
      ? `opacity .4s ease .12s, transform .5s ${EASE} .08s`
      : `opacity .3s ease, transform .45s ${EASE}`};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Answer = styled.p`
  margin: ${({ $first }) => ($first ? 0 : "12px 0 0")};
  font-size: 15px;
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Callout = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(19, 85, 255, 0.05);
  border: 1px solid rgba(19, 85, 255, 0.1);
`;

export const CalloutTerm = styled.span`
  flex: none;
  font-size: clamp(20px, 1.7vw, 24px);
  line-height: 1.1;
  font-weight: 750;
  letter-spacing: -0.02em;
  background: ${brandGradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${colors.primary};
`;

export const CalloutText = styled.span`
  min-width: 0;
  font-size: 14px;
  line-height: 1.5;
  color: ${colors.textMuted};
`;
