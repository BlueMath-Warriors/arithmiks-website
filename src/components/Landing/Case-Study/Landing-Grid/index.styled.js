import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";

export const Stage = styled.section`
  position: relative;
  padding-top: 110px;
  background: #fff;
`;

export const Pin = styled.div`
  position: sticky;
  top: 104px;
  padding: 0 0 40px;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px 56px;
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: clamp(28px, 3.23vw, 50px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }
`;

export const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: none;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 550;
  color: ${colors.primary};
  padding: 14px 24px;
  border: 1.5px solid ${colors.primary};
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const View = styled.div`
  margin-top: 44px;
  padding: 14px 0 28px;
  overflow: visible;

  @media (max-width: 900px) {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    margin: 20px -${shellPadding} 0;
    padding-left: ${shellPadding};
    padding-right: ${shellPadding};
  }
`;

export const Track = styled.div`
  display: flex;
  gap: 24px;
  overflow: visible;
  will-change: transform;
`;

// Declared before CaseCard so its hover rule below can reference this
// styled component directly (a nested-selector reference needs the target
// already defined at that point).
export const CardLogo = styled.img`
  flex: none;
  height: 18px;
  width: auto;
  max-width: 170px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.62;
  transition: filter 0.3s ease, opacity 0.3s ease;
`;

export const CaseCard = styled(Link)`
  flex: 0 0 clamp(288px, 31.4%, 452px);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  overflow: hidden;
  color: ${colors.text};
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(10, 15, 31, 0.06);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 52px -20px rgba(19, 85, 255, 0.34);
    border-color: ${colors.primary};
  }

  &:hover ${CardLogo} {
    filter: none;
    opacity: 1;
  }
`;

export const CardImage = styled.img`
  display: block;
  position: relative;
  aspect-ratio: 5 / 4;
  width: 100%;
  object-fit: contain;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.border};
`;

export const CardBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 26px 26px;
`;

export const CardTopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 26px;
`;

export const CardChip = styled.span`
  flex: none;
  font-size: 12px;
  font-weight: 550;
  color: #fff;
  background: linear-gradient(120deg, #1e5bff, #0b3ad1);
  padding: 6px 12px;
  border-radius: 999px;
  white-space: nowrap;
`;

export const CardClientName = styled.span`
  flex: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${colors.text};
  opacity: 0.42;
`;

export const CardTitle = styled.span`
  font-size: clamp(20px, 1.34vw, 22.5px);
  font-weight: 700;
  letter-spacing: -0.016em;
  line-height: 1.25;
  color: ${colors.text};
`;

export const CardOutcome = styled.span`
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const CardReadMore = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 9px;
  margin-top: auto;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 550;
  color: ${colors.primary};
`;
