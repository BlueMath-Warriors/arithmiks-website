import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// Below this the diagram reflows into a single column instead of scaling.
export const STACK_QUERY = "(max-width: 700px)";
// The width the diagram is drawn at; narrower boxes scale it down to fit.
export const DIAGRAM_WIDTH = 1260;

const mono = `font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;`;

export const Frame = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  height: var(--diagram-height, auto);
  border: 1px solid ${colors.border};
  background: linear-gradient(120deg, #f7f9fd 0%, #eef2fb 46%, #f3eef9 100%);

  @media ${STACK_QUERY} {
    height: auto;
  }
`;

export const FrameGlow = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(42% 60% at 8% 30%, rgba(19, 85, 255, 0.12), transparent 70%),
    radial-gradient(36% 50% at 92% 78%, rgba(169, 111, 200, 0.16), transparent 72%);
`;

export const Stage = styled.div`
  position: relative;
  padding: clamp(36px, 3.6vw, 60px) clamp(20px, 2.4vw, 40px) clamp(28px, 3vw, 44px);
  transform-origin: 0 0;

  @media ${STACK_QUERY} {
    padding: 28px 18px 22px;
  }
`;

export const Flow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0 clamp(4px, 0.5vw, 8px);

  @media ${STACK_QUERY} {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const Column = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: ${({ $flex }) => $flex};
  padding-top: ${({ $topLevel }) => ($topLevel ? "19.5px" : 0)};

  @media ${STACK_QUERY} {
    flex: none;
    width: 100%;
  }
`;

export const Context = styled.div`
  height: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;

  @media ${STACK_QUERY} {
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px 6px;

    &:empty {
      display: none;
    }
  }
`;

export const ContextLabel = styled.span`
  ${mono}
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const Logos = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    display: block;
    height: 16px;
    width: ${({ $wide }) => ($wide ? "auto" : "16px")};
    opacity: 0.32;
    filter: brightness(0);
  }
`;

export const Arrow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: ${({ $narrow }) => ($narrow ? "28px" : "36px")};
  margin-top: ${({ $narrow }) => ($narrow ? "141px" : "160px")};
  color: #8a93a6;

  @media ${STACK_QUERY} {
    width: 100%;
    height: 40px;
    margin: 0;
    align-self: stretch;

    svg {
      transform: rotate(90deg);
    }
  }
`;

// The "Traffic in" endpoint: a gradient ring around a centred white card.
export const SourceRing = styled.div`
  position: relative;
  padding: 2px;
  border-radius: 18px;
  background: linear-gradient(135deg, #5c8cff 0%, #1355ff 40%, #a96fc8 78%, #ec4a9e 100%);
`;

export const SourceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 9px;
  padding: clamp(20px, 2vw, 28px) 14px;
  border-radius: 16px;
  background: #fff;
`;

export const SourceLabel = styled.span`
  ${mono}
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const SourceTitle = styled.span`
  font-size: clamp(16px, 1.25vw, 19px);
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.2;
  color: ${colors.text};
`;

export const SourceText = styled.span`
  max-width: 18ch;
  font-size: clamp(13px, 1vw, 14px);
  line-height: 1.5;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Card = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 0 8px 24px rgba(10, 15, 31, 0.06);
`;

export const CardAccent = styled.span`
  display: block;
  height: 6px;
  background: ${({ $color }) => $color};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(14px, 1.4vw, 20px) clamp(12px, 1.2vw, 16px) clamp(14px, 1.4vw, 18px);

  > svg {
    display: block;
    flex: none;
  }
`;

export const CardHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 10px;
`;

export const CardTitle = styled.span`
  font-size: clamp(13.5px, 1.05vw, 15.5px);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.text};
`;

export const CardTag = styled.span`
  ${mono}
  font-size: 10px;
  font-weight: 550;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  white-space: nowrap;
`;

export const CardText = styled.p`
  margin: 0;
  font-size: clamp(13px, 1vw, 14.5px);
  line-height: 1.5;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 0;
  border-top: 1px solid #eef1f6;

  svg {
    flex: none;
  }
`;

export const ItemText = styled.span`
  min-width: 0;
  font-size: 13.5px;
  line-height: 1.35;

  span {
    display: block;
  }

  span:first-child {
    font-weight: 600;
    color: ${colors.text};
  }

  span:last-child {
    font-size: 12.5px;
    color: ${colors.textFaint};
  }
`;

export const Workloads = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
`;

export const Workload = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 10px;
  border-radius: 10px;
  background: #f7f9fd;
  border: 1px solid ${colors.border};
  font-size: 13px;
  font-weight: 550;
  color: ${colors.text};
  white-space: nowrap;
  min-width: 0;

  svg {
    flex: none;
  }
`;

export const ExternalNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px dashed #c9b6ea;
  background: #fbf9fe;

  > span:first-child {
    font-size: 12.5px;
    color: ${colors.textFaint};
  }

  strong {
    font-weight: 600;
    color: ${colors.text};
  }
`;

export const Network = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  padding: 18px clamp(12px, 1.4vw, 20px) 20px;
  border-radius: 22px;
  border: 1.5px dashed rgba(19, 85, 255, 0.3);
  background: rgba(255, 255, 255, 0.42);

  @media ${STACK_QUERY} {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-top: 14px;
    padding: 16px 14px 16px;
  }
`;

export const NetworkLink = styled.span`
  position: absolute;
  left: 50%;
  bottom: -24px;
  height: 22px;
  border-left: 1.5px dashed #c9d6ff;

  @media ${STACK_QUERY} {
    display: none;
  }
`;

export const NetworkLabel = styled.span`
  ${mono}
  position: absolute;
  top: -12px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 11px;
  border-radius: 100px;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  ${({ $outline }) =>
    $outline
      ? `right: 18px; background: #fff; border: 1px solid #C9D6FF; color: ${colors.primary};`
      : `left: 18px; background: ${colors.primary}; color: #fff;`}

  img {
    height: 12px;
    width: 12px;
    opacity: 0.7;
  }

  @media ${STACK_QUERY} {
    position: static;
    align-self: flex-start;
    margin: 0 0 ${({ $outline }) => ($outline ? "14px" : "8px")};
  }
`;

export const Below = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-top: 4px;

  @media ${STACK_QUERY} {
    margin-top: 10px;
  }
`;

export const Pipeline = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1.5px solid ${colors.primary};
  background: #fff;
  color: ${colors.primary};
  font-size: 13px;
  font-weight: 550;
  white-space: nowrap;

  svg {
    flex: none;
  }
`;

export const Observability = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 20px;
  margin-top: 22px;
  padding: 14px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid ${colors.border};

  @media ${STACK_QUERY} {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
  }
`;

export const Signals = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 10px;
`;

export const SignalsLabel = styled.span`
  ${mono}
  margin-right: 6px;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Signal = styled.span`
  padding: 7px 11px;
  border-radius: 9px;
  background: ${({ $alert }) => ($alert ? "#EEF3FF" : "#fff")};
  border: 1px solid ${({ $alert }) => ($alert ? "#C9D6FF" : colors.border)};
  font-size: 13px;
  font-weight: ${({ $alert }) => ($alert ? 600 : 550)};
  color: ${({ $alert }) => ($alert ? colors.primary : colors.text)};
`;

export const SignalArrow = styled.span`
  color: #8a93a6;
`;
