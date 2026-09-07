import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";

export const Section = styled.section`
  padding: clamp(56px, 4.82vw, 90.5px) 0 clamp(60px, 5.34vw, 101px);
  background: ${colors.surface};
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: clamp(40px, 3.02vw, 56px) clamp(40px, 3.55vw, 76.5px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: clamp(18px, 1.5vw, 26px);
  box-shadow: 0 10px 30px rgba(10, 15, 31, 0.07);
  padding: clamp(26px, 2.6vw, 54px);
  min-width: 0;
`;

export const ProgressBar = styled.span`
  height: 4px;
  border-radius: 999px;
  background: #e3e8f2;
  overflow: hidden;
  display: block;
`;

export const ProgressFill = styled.span`
  display: block;
  height: 100%;
  width: ${(p) => p.$percent}%;
  border-radius: 999px;
  background: linear-gradient(90deg, #5c8cff, #1355ff 60%, #0b3ad1);
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ProgressLabels = styled.span`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  margin-bottom: 24px;

  span:first-child {
    font-size: clamp(13px, 0.98vw, 16.5px);
    font-weight: 650;
    color: ${colors.primary};
  }
  span:last-child {
    font-size: clamp(13px, 0.98vw, 16.5px);
    font-weight: 500;
    color: ${colors.textFaint};
  }
`;

export const Step1 = styled.div``;

export const Heading = styled.h2`
  font-size: clamp(23px, 2.22vw, 35px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.18;

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }
`;

export const Intro = styled.p`
  margin-top: 11px;
  max-width: 56ch;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.2vw, 20px);
  margin-top: clamp(22px, 1.9vw, 34px);
`;

export const FieldPair = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(14px, 1.2vw, 20px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// Field-level styling (text/textarea/dropdown) now lives in ./Input —
// this file only keeps layout wrappers used directly by index.jsx.

export const ErrorText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #b42318;
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
  background: ${colors.primary};
  color: #fff;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 600;
  padding: 14px 30px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover:not(:disabled) {
    background: ${colors.primaryHover};
    transform: translateY(-2px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(26px, 2.2vw, 40px);

  h3 {
    font-size: clamp(12.5px, 0.95vw, 16px);
    font-weight: 650;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.primary};
    margin-bottom: clamp(16px, 1.4vw, 24px);
  }
`;

export const NextUpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(14px, 1.2vw, 20px);
`;

export const NextUpItem = styled.p`
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-size: clamp(15px, 0.96vw, 16.5px);
  line-height: 1.6;
  color: ${colors.textMuted};

  &::before {
    content: "✓";
    color: #12b76a;
    flex: none;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 24px;
  border-top: 1px solid ${colors.border};

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  span:first-child {
    font-size: 11.5px;
    font-weight: 650;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${colors.textFaint};
  }

  a {
    font-size: clamp(16px, 1.02vw, 17.5px);
    font-weight: 550;
    color: ${colors.text};
    text-decoration: none;
  }
`;

export const BadgeRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;

  img {
    height: 86px;
    width: auto;
    display: block;
  }
`;
