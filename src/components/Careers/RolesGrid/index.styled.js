import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  position: relative;
  padding: clamp(64px, 5.9vw, 109px) 0;
  background: ${colors.surface};
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 1.7vw, 28px);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SeeAllWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: clamp(38px, 3.8vw, 64px);
`;

export const SeeAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: ${colors.primary};
  border-radius: 100px;
  white-space: nowrap;
  transition: background 0.25s;

  &:hover {
    background: ${colors.primaryHover};
  }
`;
