import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const WIDE_QUERY = "(min-width: 901px)";

export const Section = styled.section`
  padding: 72px 0 104px;
  background: #fff;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: 560px) {
    padding: 48px 0 64px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px clamp(40px, 4.4vw, 72px);
  align-items: center;
  padding: clamp(28px, 3vw, 44px);
  border-radius: 24px;
  background: ${colors.surface};
  border: 1px solid ${colors.border};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 22px;
  }

  @media (max-width: 560px) {
    padding: 24px 20px;
    border-radius: 20px;
  }
`;

export const Copy = styled.div`
  flex: 2 1 340px;
  min-width: 0;

  @media ${WIDE_QUERY} {
    flex: 1 1 300px;
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
  }

  h3 {
    margin: 0;
    font-size: clamp(22px, 2.2vw, 30px);
    font-weight: 550;
    letter-spacing: -0.018em;
    line-height: 1.2;
    color: ${colors.text};
    text-wrap: balance;
  }
`;

export const Text = styled.p`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.7;
  color: ${colors.textFaint};

  @media ${WIDE_QUERY} {
    max-width: none;
    width: 100%;
  }
`;

export const LineBreak = styled.br`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Chips = styled.div`
  flex: 3 1 460px;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: center;

  @media ${WIDE_QUERY} {
    justify-content: flex-start;
    flex: 0 0 auto;
    margin-left: auto;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
    justify-content: flex-end;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 560px) {
    gap: 8px;
  }
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 100px;
  background: #fff;
  border: 1px solid ${colors.border};
  font-size: 14.5px;
  font-weight: 550;
  letter-spacing: -0.01em;
  color: ${colors.text};

  @media (max-width: 560px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;
