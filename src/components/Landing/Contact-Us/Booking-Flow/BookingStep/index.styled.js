import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

export const StepWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-size: clamp(17px, 1.51vw, 22.5px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: ${colors.text};
`;

export const BackButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 550;
  white-space: nowrap;
  color: ${colors.primary};
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  span {
    color: inherit;
  }
`;

export const DetailsLine = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 14px;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${colors.textFaint};
  word-break: break-word;

  svg {
    flex: none;
  }

  span {
    color: inherit;
  }
`;

// Calendly's recommended inline height; it scrolls inside the iframe below that.
// No 320px min-width (Calendly's snippet default): the card is narrower than
// that on small phones once its padding is taken out.
export const CalendlyFrame = styled.div`
  height: 700px;
  margin-top: 14px;
  border: 1px solid ${colors.border};
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
`;
