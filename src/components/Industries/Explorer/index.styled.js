import styled, { css, keyframes } from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../styles/tokens";
import { bandPadding, brandGradient } from "../../shared/Section/index.styled";

const STACKED = "(max-width: 1100px)";

const dotFill = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const Section = styled.section`
  position: relative;
  background: ${colors.surface};
  ${bandPadding}
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px 56px;
  margin-bottom: clamp(30px, 3vw, 52px);
`;

export const Title = styled.h2`
  font-size: clamp(26px, 2.9vw, 46px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${colors.text};
  text-wrap: balance;
`;

export const Lede = styled.p`
  flex: 0 1 420px;
  font-size: clamp(15px, 1.02vw, 18px);
  line-height: 1.6;
  color: ${colors.textFaint};
  text-wrap: pretty;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 300px) minmax(0, 1fr);
  gap: clamp(20px, 2.6vw, 48px);
  align-items: start;

  @media ${STACKED} {
    grid-template-columns: 1fr;
  }
`;

export const TabList = styled.div`
  position: sticky;
  top: 104px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: calc(100vh - 128px);
  overflow-y: auto;
  scrollbar-width: none;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${STACKED} {
    position: static;
    flex-direction: row;
    overflow-x: auto;
    margin: 0 -18px;
    padding: 0 18px 4px;
    scroll-behavior: smooth;
    -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 18px, #000 calc(100% - 56px), transparent 100%);
    mask-image: linear-gradient(90deg, transparent 0, #000 18px, #000 calc(100% - 56px), transparent 100%);

    > [data-reveal] {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
`;

export const TabSlot = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.button`
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  border-radius: 14px;
  border: 1px solid ${({ $selected }) => ($selected ? colors.border : "transparent")};
  background: ${({ $selected }) => ($selected ? "#fff" : "transparent")};
  box-shadow: ${({ $selected }) => ($selected ? "0 14px 30px -22px rgba(10, 15, 31, 0.35)" : "none")};
  text-align: left;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
`;

export const TabIcon = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${({ $selected }) => ($selected ? "#EAF0FF" : "rgba(10, 15, 31, 0.045)")};
  transition: background 0.3s ease;
`;

export const TabText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const TabName = styled.span`
  font-size: clamp(15px, 1.02vw, 17.5px);
  font-weight: 650;
  letter-spacing: -0.012em;
  line-height: 1.25;
  color: ${({ $selected }) => ($selected ? colors.text : colors.textMuted)};
  transition: color 0.3s ease;
  white-space: nowrap;
`;

export const TabCaption = styled.span`
  font-size: 12.5px;
  font-weight: 500;
  color: #8a93a6;
  white-space: nowrap;
`;

const fadeable = css`
  transition: opacity 0.22s ease;
  opacity: ${({ $isFaded }) => ($isFaded ? 0 : 1)};
`;

export const PanelSlot = styled.div`
  min-width: 0;
`;

export const Panel = styled.div`
  min-width: 0;
  padding: clamp(24px, 2.8vw, 48px);
  border-radius: 24px;
  background: #fff;
  border: 1px solid ${colors.border};
  box-shadow: 0 30px 70px -48px rgba(10, 15, 31, 0.3);
  ${fadeable}

  &:hover [data-dotfill],
  &:focus-within [data-dotfill],
  &[data-offscreen] [data-dotfill] {
    animation-play-state: paused;
  }
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: clamp(24px, 3vw, 56px);
  align-items: start;
  ${fadeable}

  @media ${STACKED} {
    grid-template-columns: 1fr;
  }
`;

export const Story = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(22px, 2.2vw, 32px);
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const chipBase = css`
  flex: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  border-radius: 100px;
  font-size: 12.5px;
  font-weight: 600;
`;

export const IndustryChip = styled.span`
  ${chipBase}
  gap: 8px;
  padding: 6px 12px 6px 9px;
  background: #eaf0ff;
  color: ${colors.primary};
`;

export const CapabilityChip = styled.span`
  ${chipBase}
  padding: 6px 12px;
  border: 1px solid #d4ddf5;
  color: ${colors.textMuted};
`;

export const Headline = styled.h3`
  margin: clamp(16px, 1.6vw, 24px) 0 0;
  font-size: clamp(22px, 2.2vw, 36px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: ${colors.text};
  max-width: 22ch;
  text-wrap: balance;
`;

export const StoryLabel = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  margin-bottom: ${({ $spacing }) => $spacing}px;
`;

export const StoryText = styled.p`
  font-size: clamp(15px, 1.05vw, 18px);
  line-height: 1.62;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const DoesItem = styled.div`
  display: flex;
  gap: 14px;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid #eef1f6;
`;

export const DoesNumber = styled.span`
  flex: none;
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.06em;
  color: ${colors.primary};
`;

export const DoesText = styled.span`
  flex: 1 1 auto;
  min-width: 0;
  font-size: clamp(14.5px, 1vw, 17px);
  font-weight: 500;
  line-height: 1.5;
  color: ${colors.text};
  text-wrap: pretty;
`;

export const CaseColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const CardArrow = styled.span`
  color: inherit;
  transition: transform 0.3s ease;
`;

export const CaseCardLink = styled(Link)`
  min-width: 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  color: ${colors.text};
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 50px -30px rgba(10, 15, 31, 0.35);
    color: ${colors.text};
  }

  &:hover ${CardArrow} {
    transform: translateX(4px);
  }
`;

export const CaseImageFrame = styled.span`
  display: block;
  overflow: hidden;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.border};

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const CaseBody = styled.span`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: clamp(18px, 1.8vw, 26px);
`;

export const CaseMeta = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  img {
    display: block;
    height: 22px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
    object-position: left center;
  }
`;

export const ClientName = styled.span`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${colors.text};
`;

export const Timeframe = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textFaint};
  white-space: nowrap;
`;

export const MetricRow = styled.span`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Metric = styled.span`
  font-size: clamp(34px, 3.4vw, 56px);
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1;
  padding: 0.04em 0.08em 0.04em 0;
  background: ${brandGradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${colors.primary};
`;

export const MetricLabel = styled.span`
  font-size: clamp(14px, 0.98vw, 16.5px);
  font-weight: 600;
  line-height: 1.35;
  color: ${colors.text};
  max-width: 18ch;

  @media (min-width: 1200px) {
    max-width: none;
    white-space: nowrap;
  }
`;

export const BeforeAfter = styled.span`
  font-size: 13.5px;
  font-weight: 500;
  color: ${colors.textFaint};
`;

export const CaseCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid ${colors.border};
  font-size: 14.5px;
  font-weight: 600;
  color: ${colors.primary};

  span {
    color: inherit;
  }
`;

export const DotRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: clamp(14px, 1.4vw, 20px);
`;

export const CaseDot = styled.button`
  position: relative;
  overflow: hidden;
  flex: none;
  width: ${({ $isCurrent }) => ($isCurrent ? "36px" : "8px")};
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 100px;
  background: ${({ $isCurrent }) => ($isCurrent ? "#DCE3F2" : "#C9D2E3")};
  cursor: pointer;
  transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
`;

export const CaseDotFill = styled.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #1355ff, #a96fc8);
  transform-origin: left center;
  animation: ${dotFill} 7s linear forwards;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
