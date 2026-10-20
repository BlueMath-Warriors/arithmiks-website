import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Pill = styled.span`
  font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
`;
