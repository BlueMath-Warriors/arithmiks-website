import styled from "styled-components";
import { Title } from "../../shared/Band/index.styled";

const PHONE = "(max-width: 560px)";

// The design's rule for every cited link in this band ("#challenges a[href^=http]").
const sourceLinkPhone = `
  @media (max-width: 700px) {
    padding: 8px 0;
    font-size: 13px;
  }

`;

const sourceLinkWrap = `
  @media (max-width: 600px) {
    flex: 1 1 auto;
    white-space: normal;
    flex-wrap: wrap;
    row-gap: 2px;
    padding: 6px 0;
  }
`;

export const Section = styled.section`
  position: relative;
  padding: clamp(72px, 6.4vw, 120px) 0;
  background: #070b18;
  color: #fff;
  overflow: hidden;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const Wash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, #0b3ad1 0%, #1355ff 55%, #0a2aa0 100%);
  opacity: 0.96;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: ${({ $rowGap }) => $rowGap} clamp(40px, 5vw, 96px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const HeadCopy = styled.div`
  max-width: 720px;
`;

export const TopStats = styled.div`
  display: grid;
  grid-template-columns: fit-content(300px) 1px fit-content(300px);
  column-gap: clamp(36px, 4vw, 64px);
  justify-content: start;

  @media (min-width: 981px) {
    margin-top: ${({ $topGap }) => $topGap || 0};
  }

  @media ${PHONE} {
    grid-template-columns: 1fr;
    border-left: 0;
  }
`;

export const Divider = styled.span`
  grid-column: 2;
  grid-row: 1;
  align-self: stretch;
  margin: 4px 0;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);

  @media ${PHONE} {
    display: none;
  }
`;

export const TopStat = styled.div`
  grid-column: ${({ $column }) => $column};
  grid-row: 1;
  padding: 4px 0;

  @media ${PHONE} {
    grid-column: 1;
    grid-row: auto;
    border-right: 0;
    padding: 18px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const TopFigure = styled.div`
  font-size: clamp(40px, 3.8vw, 60px);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: #fff;
`;

export const TopClaim = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.86);
`;

const sourceBase = `
  display: inline-flex;
  align-items: baseline;
  color: rgba(255, 255, 255, 0.62);

  &:hover {
    color: #fff;
  }

  span {
    color: inherit;
  }

  span:first-child {
    font-weight: 550;
    color: #fff;
  }
`;

export const TopSource = styled.a`
  ${sourceBase}
  gap: 6px;
  margin-top: 12px;
  font-size: 12px;
  white-space: nowrap;
  ${sourceLinkPhone}
  ${({ $wrapOnPhone }) => ($wrapOnPhone ? sourceLinkWrap : "")}
`;

export const Close = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 72px;
  align-items: flex-start;
  margin-top: clamp(40px, 4vw, 64px);
  padding-top: 56px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CloseStat = styled.div`
  flex: 1 1 320px;
  min-width: 0;
`;

export const CloseLabel = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.62);
  margin-bottom: 16px;
`;

export const CloseFigure = styled.div`
  font-size: clamp(44px, 5vw, 76px);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 0.95;
  color: #fff;
`;

export const CloseClaim = styled.p`
  margin-top: 18px;
  max-width: 340px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.78);
  text-wrap: pretty;
`;

export const CloseSource = styled.a`
  ${sourceBase}
  gap: 7px;
  margin-top: 16px;
  font-size: 12.5px;
  ${sourceLinkPhone}
  ${({ $wrapOnPhone }) => ($wrapOnPhone ? sourceLinkWrap : "")}
`;

export const CloseCopy = styled.div`
  flex: 1 1 420px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  text-wrap: pretty;
`;

export const CloseText = styled.p`
  color: rgba(255, 255, 255, 0.78);
`;

export const CloseLead = styled.p`
  font-size: clamp(19px, 1.7vw, 23px);
  font-weight: 550;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: #fff;
`;

export const CloseConclusion = styled.p`
  font-weight: 550;
  color: #fff;
`;

// A title sized down at mid widths so its unbroken gradient phrase fits.
export const CompactTitle = styled(Title)`
  span {
    white-space: nowrap;
  }

  @media (min-width: 981px) and (max-width: 1320px) {
    font-size: clamp(28px, 2.85vw, 40px);
  }

  @media (max-width: 980px) {
    font-size: clamp(24px, 5.6vw, 46px);
  }

  @media (max-width: 420px) {
    font-size: 6.2vw;
  }
`;
