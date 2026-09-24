import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../styles/tokens";

export const Section = styled.section`
  padding: 0 0 clamp(64px, 5.9vw, 109px);
  background: #fff;

  @media (max-width: 900px) {
    padding: 64px 0;
  }

  @media (max-width: 640px) {
    padding: 48px 0;
  }
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
  font-size: clamp(24px, 2.55vw, 40px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  white-space: nowrap;
  color: ${colors.text};

  @media (max-width: 640px) {
    white-space: normal;
    text-wrap: balance;
  }
`;

export const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primary};
  border: 1.5px solid ${colors.primary};
  border-radius: 999px;
  white-space: nowrap;
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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 2.2vw, 36px);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CoverFrame = styled.span`
  display: block;
  aspect-ratio: 16 / 9;
  border-radius: clamp(14px, 1.2vw, 20px);
  overflow: hidden;
  background: #edf1f8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(18px, 1.35vw, 23px);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.28;
  text-wrap: pretty;
  color: ${colors.text};
  transition: color 0.25s ease;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;

  &:hover ${CoverFrame} img {
    transform: scale(1.04);
  }

  &:hover ${CardTitle} {
    color: ${colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 6px;
    border-radius: 12px;
  }
`;

export const Category = styled.span`
  align-self: flex-start;
  margin-top: 4px;
  padding: 5px 10px;
  border-radius: 6px;
  background: #eaf0ff;
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Excerpt = styled.p`
  font-size: clamp(14.5px, 0.95vw, 16px);
  line-height: 1.6;
  color: ${colors.textFaint};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Meta = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 6px;
`;

export const Author = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: ${colors.textMuted};
`;

export const Avatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5c8cff 0%, #1355ff 50%, #a96fc8 100%);
  font-size: 11px;
  font-weight: 700;
  color: #fff;
`;

export const PublishedAt = styled.span`
  font-size: 13px;
  color: ${colors.textFaint};
  white-space: nowrap;
`;
