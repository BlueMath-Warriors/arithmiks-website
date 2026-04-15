import { styled, keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
`;

export const IndicatorRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const IndicatorBubble = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  border-radius: 18px 18px 18px 4px;
  background: #f5f5f7;
`;

export const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #42526b;
  animation: ${bounce} 1.2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || "0ms"};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.6;
  }
`;
