import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const STACKED = "(max-width: 900px)";
const TITLE_WRAPS = "(max-width: 760px)";

export const Section = styled.section`
  position: relative;
  z-index: 2;
  padding: clamp(132px, 15vh, 178px) 0 clamp(40px, 4vw, 64px);
  background: #fff;

  /* Clears the fixed header; the design's 48px band padding would sit under it. */
  @media ${STACKED} {
    padding-top: 110px;
    padding-bottom: 48px;
  }

  @media (max-height: 500px) {
    padding-bottom: 34px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px clamp(32px, 5vw, 96px);
`;

export const TitleSlot = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

export const Title = styled.h1`
  font-size: clamp(28px, 3.6vw, 58px);
  font-weight: 750;
  letter-spacing: -0.022em;
  line-height: 1.06;
  color: ${colors.text};
  white-space: nowrap;

  @media ${TITLE_WRAPS} {
    white-space: normal;
    text-wrap: balance;
  }
`;
