import styled from "styled-components";
import { colors, shellPadding } from "../../../styles/tokens";

const STACKED = "(max-width: 860px)";

export const Section = styled.section`
  background: #fafbfd;
  padding: 112px 0;

  @media ${STACKED} {
    padding: 72px 0;
  }
`;

export const Head = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(8px, 1.4vw, 28px);
  border-bottom: 1px solid ${colors.border};

  @media ${STACKED} {
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
    margin: 0 calc(-1 * ${shellPadding});
    padding: 0 ${shellPadding};

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Tab = styled.button`
  position: relative;
  flex: none;
  padding: 16px clamp(8px, 1vw, 16px) 18px;
  background: transparent;
  border: 0;
  font-family: inherit;
  font-size: clamp(15px, 1.05vw, 16.5px);
  font-weight: ${({ $active }) => ($active ? 650 : 550)};
  letter-spacing: -0.01em;
  color: ${({ $active }) => ($active ? colors.primary : colors.textMuted)};
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.25s ease;

  &:hover {
    color: ${colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transition: opacity 0.25s ease;
  }
`;

export const Panels = styled.div`
  margin-top: clamp(40px, 4vw, 56px);
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  @media ${STACKED} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 28px;
  }
`;

export const Cell = styled.div`
  flex: 0 1 170px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 6px clamp(6px, 0.8vw, 12px);
  border-left: 1px solid ${colors.border};
  text-align: center;

  &:first-child {
    border-left: 0;
  }

  img {
    display: block;
    width: 44px;
    height: 44px;
    object-fit: contain;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover img {
    transform: translateY(-3px);
  }

  span {
    font-size: clamp(12.5px, 1vw, 14.5px);
    font-weight: 550;
    letter-spacing: -0.008em;
    line-height: 1.3;
    color: ${colors.text};
    white-space: nowrap;
  }

  @media ${STACKED} {
    width: auto;
    border-left: 0;
    padding: 6px 12px;

    &:nth-child(2n) {
      border-left: 1px solid ${colors.border};
    }
  }

  @media (max-width: 700px) {
    span {
      font-size: 13.5px;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;
