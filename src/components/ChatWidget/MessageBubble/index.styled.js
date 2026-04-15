import { styled, keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const BubbleRow = styled.div`
  display: flex;
  justify-content: ${({ $role }) => ($role === "user" ? "flex-end" : "flex-start")};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Bubble = styled.div`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: ${({ $role }) =>
    $role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};
  background: ${({ $role }) => ($role === "user" ? "#1355FF" : "#f5f5f7")};
  color: ${({ $role }) => ($role === "user" ? "#fff" : "#5C5C5C")};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.55;
  word-break: break-word;

  p {
    margin: 0 0 8px;
    &:last-child { margin-bottom: 0; }
  }

  ul, ol {
    margin: 4px 0 8px;
    padding-left: 20px;
    &:last-child { margin-bottom: 0; }
  }

  li {
    margin-bottom: 4px;
    &:last-child { margin-bottom: 0; }
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: currentColor;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 0.7s step-end infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
  }
`;
