import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const TWO_COLUMNS = "(max-width: 1100px)";
const ONE_COLUMN = "(max-width: 600px)";
const GROUP_GAP = "clamp(34px, 3vw, 48px)";
const LINK_TRANSITION = "color 0.22s ease";

export const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: 0 0 clamp(64px, 5.9vw, 109px);
  background: #fff;

  @media (max-width: 900px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${GROUP_GAP} clamp(28px, 3.4vw, 64px);
  align-items: start;
  padding-top: clamp(36px, 3.4vw, 56px);
  border-top: 1px solid ${colors.border};

  @media ${TWO_COLUMNS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${ONE_COLUMN} {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${GROUP_GAP};
`;

export const Group = styled.section`
  margin: 0;
  scroll-margin-top: 110px;
`;

export const GroupTitle = styled.h2`
  margin: 0 0 8px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ExternalMark = styled.span`
  margin-left: 6px;
  font-size: 0.82em;
  color: #9aa3b5;
`;
