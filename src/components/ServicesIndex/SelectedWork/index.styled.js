import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";
import CaseStudyCard from "../../Landing/Case-Study/CaseStudyCard";

export const Section = styled.section`
  background: #fafbfd;
  padding: 112px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Head = styled.div`
  margin-bottom: 56px;
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const HeadRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px 64px;

  @media (max-width: 768px) {
    gap: 22px;
  }
`;

export const Title = styled.h2`
  flex: 0 1 auto;
  margin: 0;
  font-size: clamp(28px, 3.23vw, 50px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${colors.text};

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
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    min-height: 52px;
  }

  /* global.module.css's "* { color: #000 }" hits this arrow span directly,
     beating the colour inherited from the link. */
  span {
    color: inherit;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 2.4vw, 52px) clamp(24px, 2.6vw, 56px);
  align-items: stretch;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const WorkCard = styled(CaseStudyCard)`
  height: 100%;

  @media (max-width: 768px) {
    img {
      aspect-ratio: 4 / 3;
    }
  }
`;
