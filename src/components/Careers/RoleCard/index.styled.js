import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../styles/tokens";
import { inheritIconColor } from "../shared";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(24px, 2.3vw, 34px);
  color: ${colors.text};
  background: #fff;
  border: 1px solid #e9edf4;
  border-radius: clamp(14px, 1.2vw, 18px);
  box-shadow: 0 8px 26px -22px rgba(10, 15, 31, 0.4);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: #c9d6ff;
    box-shadow: 0 22px 46px -28px rgba(19, 85, 255, 0.5);
    transform: translateY(-3px);
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

export const TitleRow = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const Title = styled.span`
  font-size: clamp(16.5px, 1.2vw, 20px);
  font-weight: 700;
  letter-spacing: -0.014em;
  line-height: 1.3;
  max-width: 20ch;
  text-wrap: balance;
`;

export const Arrow = styled.span`
  flex: 0 0 auto;
  margin-top: 3px;
  color: ${colors.primary};
  ${inheritIconColor}

  svg {
    display: block;
    transition: transform 0.25s;
  }
`;

export const Summary = styled.span`
  font-size: clamp(13.5px, 0.92vw, 15px);
  line-height: 1.5;
  color: ${colors.textMuted};
`;

export const TagRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: clamp(14px, 1.4vw, 20px);
`;
