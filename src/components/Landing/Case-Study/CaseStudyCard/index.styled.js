import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "../../../../styles/tokens";

// Declared before CardRoot so its hover rule below can reference this
// styled component directly (a nested-selector reference needs the target
// already defined at that point).
export const CardLogo = styled.img`
  flex: none;
  max-height: 18px;
  height: auto;
  width: auto;
  max-width: 104px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.62;
  transition: filter 0.3s ease, opacity 0.3s ease;
`;

export const CardReadMoreArrow = styled.span`
  // global.module.css's "* { color: #000 }" targets this span directly, which
  // otherwise beats CardReadMore's inherited primary blue the moment this
  // wrapper element exists — same gotcha as Hero's HeadlineText.
  color: inherit;
  transition: transform 0.25s ease;
`;

export const CardRoot = styled(Link)`
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

  &:hover ${CardReadMoreArrow} {
    transform: translateX(4px);
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
  text-wrap: pretty;
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
