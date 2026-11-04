import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { BandShell } from "../../shared/Band/index.styled";

const TAB_TRACK = "#F1F3F8";

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: clamp(150px, 17vh, 196px) 0 clamp(72px, 6.4vw, 120px);
  background: #fff;
  color: ${colors.text};
  overflow-x: clip;
  overflow-y: visible;

  /* Short desktop windows: 17vh would leave the heading crowding the header. */
  @media (max-height: 600px) and (min-width: 961px) {
    padding-top: 120px;
  }

  @media (max-width: 640px) {
    padding-top: 120px;
  }
`;

export const Shell = styled(BandShell)`
  z-index: 1;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Eyebrow = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: clamp(32px, 4.2vw, 64px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.08;
  text-wrap: balance;
  color: ${colors.text};
`;

export const TabsRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: clamp(36px, 3.4vw, 52px);
`;

export const TabList = styled.div`
  display: inline-flex;
  gap: 4px;
  padding: 5px;
  border-radius: 100px;
  background: ${TAB_TRACK};
  border: 1px solid ${colors.border};
  max-width: 100%;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button`
  flex: none;
  padding: 10px 20px;
  border: 0;
  border-radius: 100px;
  background: ${({ $selected }) => ($selected ? colors.primary : "transparent")};
  color: ${({ $selected }) => ($selected ? "#fff" : colors.textMuted)};
  font: inherit;
  font-size: 14.5px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease;

  /* Inset enough to stay inside the scrolling track, which clips overflow. */
  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(48px, 4.4vw, 76px) clamp(32px, 3.6vw, 64px);
  margin: clamp(52px, 4.6vw, 80px) 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  gap: 22px;
  align-items: start;
`;

export const Body = styled.div`
  min-width: 0;
  padding-top: 2px;
`;

const nameType = `
  font-size: clamp(18px, 1.4vw, 21px);
  font-weight: 650;
  letter-spacing: -0.014em;
  line-height: 1.3;
  color: ${colors.text};
`;

export const Name = styled.h2`
  margin: 0;
  ${nameType}
`;

export const NameRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const NameLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  ${nameType}
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 5px;
  text-decoration-color: rgba(10, 15, 31, 0.25);
  transition:
    color 0.2s ease,
    text-decoration-color 0.2s ease;

  /* global.module.css sets color:#000 on every element, svg parts included,
     which would stop the arrow following the link colour. */
  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    color: ${colors.primary};
    text-decoration-color: ${colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const SoonPill = styled.span`
  padding: 4px 10px;
  border-radius: 100px;
  background: ${TAB_TRACK};
  border: 1px solid ${colors.border};
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textFaint};
  white-space: nowrap;
`;

export const Description = styled.p`
  margin: 12px 0 0;
  font-size: 15.5px;
  line-height: 1.6;
  color: ${colors.textFaint};
  text-wrap: pretty;
`;
