import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const NARROW = "(max-width: 620px)";
const TRANSLUCENT_WHITE = "rgba(255, 255, 255, 0.3)";

export const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 95;
  padding: 0 clamp(12px, 3vw, 28px) clamp(12px, 3vw, 28px);
  pointer-events: none;
`;

export const Card = styled.div`
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  max-width: 1180px;
  margin: 0 auto;
  background: linear-gradient(135deg, #1e5bff 0%, #1355ff 52%, #0b3ad1 100%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: clamp(14px, 1.2vw, 20px);
  box-shadow: 0 28px 64px -24px rgba(11, 58, 209, 0.6);
  overflow: hidden;
  transform: translateY(${({ $open }) => ($open ? "0" : "16px")});
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: transform 0.45s ${EASE}, opacity 0.35s ease;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px clamp(24px, 3vw, 48px);
  padding: clamp(18px, 1.7vw, 26px) clamp(20px, 2vw, 32px);
`;

export const Intro = styled.div`
  flex: 1 1 420px;
  min-width: 0;
  display: flex;
  gap: 16px;
  align-items: flex-start;

  > div {
    min-width: 0;
  }
`;

export const IconTile = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
`;

export const Heading = styled.p`
  font-size: clamp(15px, 1.05vw, 17px);
  font-weight: 650;
  letter-spacing: -0.012em;
  line-height: 1.35;
  color: #fff;
`;

export const Message = styled.p`
  margin-top: 5px;
  max-width: 64ch;
  font-size: clamp(13.5px, 0.95vw, 15px);
  line-height: 1.6;
  color: #fff;
  text-wrap: pretty;

  a {
    font-weight: 600;
    color: #fff;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Actions = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  @media ${NARROW} {
    width: 100%;
  }
`;

const buttonBase = `
  font-family: inherit;
  font-size: 14.5px;
  font-weight: 550;
  border-radius: 999px;
  cursor: pointer;
`;

export const ManageButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: 14.5px;
  font-weight: 550;
  color: #fff;
  background: transparent;
  border: 0;
  padding: 12px 6px;
  cursor: pointer;

  svg {
    flex: none;
    color: inherit;
    transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});
    transition: transform 0.35s ${EASE};
  }

  svg * {
    color: inherit;
  }
`;

export const RejectButton = styled.button`
  ${buttonBase}
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.55);
  padding: 12px 24px;
  transition: border-color 0.25s ease, background 0.25s ease;

  &:hover {
    border-color: #fff;
    background: rgba(255, 255, 255, 0.14);
  }

  @media ${NARROW} {
    flex: 1 1 140px;
  }
`;

export const AcceptButton = styled.button`
  ${buttonBase}
  color: ${colors.primary};
  background: #fff;
  border: 1px solid #fff;
  padding: 12px 24px;
  transition: background 0.25s ease, transform 0.25s ease, color 0.25s ease;

  &:hover {
    background: #eaf0ff;
    color: ${colors.primaryHover};
    transform: translateY(-1px);
  }

  @media ${NARROW} {
    flex: 1 1 140px;
  }
`;

// Animating grid-template-rows 0fr → 1fr opens the panel to its natural height.
export const Panel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  overflow: hidden;
  transition: grid-template-rows 0.45s ${EASE};

  > div {
    min-height: 0;
  }
`;

export const PanelBody = styled.div`
  padding: 0 clamp(20px, 2vw, 32px) clamp(18px, 1.7vw, 26px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  padding-top: clamp(16px, 1.5vw, 22px);

  @media ${NARROW} {
    grid-template-columns: 1fr;
  }
`;

export const Category = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
`;

const track = `
  flex: none;
  width: 44px;
  height: 26px;
  border-radius: 999px;
  margin-top: 2px;
`;

export const LockedSwitch = styled.span`
  ${track}
  display: flex;
  align-items: center;
  background: ${TRANSLUCENT_WHITE};

  &::after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.75);
    margin-left: auto;
    margin-right: 3px;
  }
`;

export const Switch = styled.button`
  ${track}
  position: relative;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: ${({ $on }) => ($on ? "#fff" : TRANSLUCENT_WHITE)};
  transition: background 0.3s ease;
`;

export const Knob = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $on }) => ($on ? colors.primary : "#fff")};
  box-shadow: 0 1px 3px rgba(10, 15, 31, 0.2);
  transform: translateX(${({ $on }) => ($on ? "18px" : "0")});
  transition: transform 0.3s ${EASE};
`;

export const CategoryText = styled.div`
  min-width: 0;
`;

export const CategoryTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
`;

export const CategoryName = styled.span`
  font-size: 14.5px;
  font-weight: 650;
  letter-spacing: -0.012em;
  color: #fff;
`;

export const AlwaysOn = styled.span`
  font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;
  font-size: 10px;
  font-weight: 550;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
`;

export const CategoryDescription = styled.p`
  margin-top: 4px;
  font-size: 13px;
  line-height: 1.55;
  color: #fff;
  text-wrap: pretty;
`;

export const PanelFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  margin-top: 16px;

  a {
    font-size: 13px;
    color: #fff;
  }

  a span {
    color: inherit;
  }
`;

export const SaveButton = styled.button`
  ${buttonBase}
  color: #fff;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.55);
  padding: 11px 22px;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: #fff;
    color: ${colors.primary};
    border-color: #fff;
  }
`;
