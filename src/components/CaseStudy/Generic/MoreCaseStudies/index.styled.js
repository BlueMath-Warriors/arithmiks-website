import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../../styles/tokens";
import { bandPadding } from "../layout.styled";

export const MoreSection = styled.section`
  ${bandPadding}
  background: #fff;
`;

export const HeadRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px 40px;
`;

export const ViewAllLink = styled(Link)`
  white-space: nowrap;
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 100px;
  border: 1.5px solid ${colors.primary};
  color: ${colors.primary};
  font-size: 15px;
  font-weight: 600;
  transition: background 0.25s ease, color 0.25s ease;

  span {
    color: inherit;
  }

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(24px, 2.4vw, 52px) clamp(24px, 2.6vw, 56px);
  align-items: stretch;
  margin-top: clamp(32px, 3.2vw, 48px);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  overflow: hidden;
  color: ${colors.text};
  box-shadow: 0 8px 24px rgba(10, 15, 31, 0.06);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 26px 52px -20px rgba(19, 85, 255, 0.34);
    border-color: ${colors.primary};
    color: ${colors.text};
  }
`;

export const CardImageFrame = styled.span`
  position: relative;
  display: block;
  aspect-ratio: 5 / 4;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.border};
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const CardBody = styled.span`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 26px 26px;
`;

export const CardTopRow = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 26px;

  img {
    display: block;
    height: 24px;
    width: auto;
    max-width: 140px;
    object-fit: contain;
  }
`;

export const CardChip = styled.span`
  padding: 5px 12px;
  border-radius: 100px;
  background: #eaf0ff;
  font-size: 12px;
  font-weight: 600;
  color: ${colors.primary};
`;

export const CardName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.text};
`;

export const CardTitle = styled.span`
  font-size: clamp(20px, 1.34vw, 22.5px);
  font-weight: 700;
  letter-spacing: -0.016em;
  line-height: 1.25;
`;

export const CardText = styled.span`
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const CardCta = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 9px;
  margin-top: auto;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 550;
  color: ${colors.primary};

  span {
    color: inherit;
  }
`;

export const RelatedService = styled.p`
  margin-top: clamp(24px, 2.4vw, 36px);
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.textFaint};
  text-align: center;

  a {
    color: ${colors.primary};
    font-weight: 550;
  }
`;
