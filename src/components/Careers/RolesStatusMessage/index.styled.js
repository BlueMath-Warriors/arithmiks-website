import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 44px 0 20px;
  max-width: 52ch;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.018em;
`;

export const Text = styled.p`
  font-size: 15.5px;
  line-height: 1.65;
  color: ${colors.textMuted};
`;

export const RetryButton = styled.button`
  align-self: flex-start;
  margin-top: 6px;
  padding: 11px 22px;
  font-size: 14.5px;
  font-weight: 600;
  color: ${colors.primary};
  background: transparent;
  border: 1.5px solid ${colors.primary};
  border-radius: 100px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;
