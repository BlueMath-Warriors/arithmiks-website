import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../styles/tokens";
import { inheritIconColor } from "../shared";

export const Row = styled(Link)`
  display: grid;
  grid-template-columns: 172px minmax(0, 1fr) auto;
  gap: clamp(16px, 2vw, 32px);
  align-items: center;
  padding: clamp(20px, 2vw, 26px) clamp(12px, 1.2vw, 18px);
  border-bottom: 1px solid #edeff5;
  color: ${colors.text};
  transition: background 0.2s;

  &:hover {
    background: ${colors.surface};
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr auto;

    > :first-child {
      display: none;
    }
  }
`;

export const Department = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const Main = styled.span`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
`;

export const Title = styled.span`
  font-size: clamp(17px, 1.3vw, 22px);
  font-weight: 700;
  letter-spacing: -0.016em;
  line-height: 1.28;
`;

export const Summary = styled.span`
  font-size: clamp(14px, 0.95vw, 15.5px);
  line-height: 1.55;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const TagRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 3px;
`;

export const Arrow = styled.span`
  justify-self: end;
  color: ${colors.primary};
  ${inheritIconColor}

  svg {
    display: block;
    transition: transform 0.25s;
  }
`;
