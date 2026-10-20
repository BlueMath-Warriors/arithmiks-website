import styled from "styled-components";
import { bandPadding } from "../index.styled";

export const Section = styled.section`
  position: relative;
  ${bandPadding}
  background: #070b18;
  overflow: hidden;
`;

export const Wash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, #0b3ad1 0%, #1355ff 55%, #0a2aa0 100%);
  opacity: 0.96;
`;

export const Head = styled.div`
  max-width: 720px;
`;

export const Body = styled.p`
  margin-top: 22px;
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  text-wrap: pretty;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  margin-top: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Cell = styled.div`
  padding: 38px 34px 34px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-right: 0;
  }

  /* Stacked cells read better divided by rules than by a column edge. */
  @media (max-width: 640px) {
    padding: 32px 0 30px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const Figure = styled.div`
  font-size: clamp(60px, 7vw, 104px);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: #fff;
  font-variant-numeric: tabular-nums;

  span {
    color: inherit;
  }
`;

export const Claim = styled.p`
  margin-top: 22px;
  max-width: 290px;
  font-size: 15.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  text-wrap: pretty;
`;

export const Source = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
  margin-top: 20px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.62);
  transition: color 0.25s ease;

  strong {
    font-weight: 550;
    color: #fff;
  }

  span {
    color: inherit;
  }

  &:hover {
    color: #fff;
  }
`;
