import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const CHAPTER_BAR_HEIGHT = 52;

export const Bar = styled.nav`
  position: sticky;
  top: var(--header-height, 86px);
  z-index: 30;
  height: ${CHAPTER_BAR_HEIGHT}px;
  /* Sits over the bottom strip of the hero until it reaches the header. */
  margin-top: -${CHAPTER_BAR_HEIGHT}px;
  border-top: 1px solid ${({ $stuck }) => ($stuck ? "transparent" : colors.border)};
  border-bottom: 1px solid ${({ $stuck }) => ($stuck ? colors.border : "transparent")};
  background: ${({ $stuck }) => ($stuck ? "rgba(255,255,255,.9)" : "transparent")};
  backdrop-filter: ${({ $stuck }) => ($stuck ? "saturate(180%) blur(14px)" : "none")};
  -webkit-backdrop-filter: ${({ $stuck }) => ($stuck ? "saturate(180%) blur(14px)" : "none")};

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 4px;
  height: 100%;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChapterLink = styled.a`
  flex: none;
  display: flex;
  align-items: center;
  padding: 2px 16px 0;
  font-size: 13.5px;
  font-weight: 550;
  white-space: nowrap;
  color: ${({ $active }) => ($active ? colors.primary : colors.textFaint)};
  border-bottom: 2px solid ${({ $active }) => ($active ? colors.primary : "transparent")};
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: ${({ $active }) => ($active ? colors.primary : colors.text)};
  }
`;
