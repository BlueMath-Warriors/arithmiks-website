import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// The design's bar: 1px rules around a 51.6px link row (16px + 14px padding,
// a 19.6px line, the 2px active underline).
export const CHAPTER_BAR_HEIGHT = 53.6;

export const Bar = styled.nav`
  position: sticky;
  top: var(--header-height, 86px);
  /* Follows the header as it slides away and back (see useChapterChrome). */
  transition: top 0.3s ease;
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
  display: block;
  padding: 16px 16px 14px;
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
