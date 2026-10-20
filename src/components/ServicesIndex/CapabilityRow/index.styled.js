import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Row = styled.div`
  border-bottom: 1px solid ${colors.border};
  background: ${(p) => (p.$open ? colors.surface : "transparent")};
  transition: background 0.4s ease;
`;

export const Toggle = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 16px 20px 22px;
  background: transparent;
  border: 0;
  text-align: left;
  color: ${(p) => (p.$open ? colors.primary : colors.text)};
  cursor: pointer;
  transition: background 0.35s ease, color 0.35s ease;

  &:hover {
    background: ${colors.surface};
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    padding: 18px 6px 18px 16px;
    gap: 14px;
  }

  @media (max-width: 640px) {
    padding: 16px 4px 16px 14px;
  }
`;

export const Num = styled.span`
  flex: none;
  width: 22px;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.08em;
  color: ${(p) => (p.$activeGroup ? colors.primary : colors.textFaint)};
  transition: color 0.45s ease;
  font-variant-numeric: tabular-nums;
`;

export const TitleWrap = styled.span`
  flex: 1;
  min-width: 0;
  /* Without this, global.module.css's "* { color: #000 }" colours this span
     black and the h3 then inherits the black from it. */
  color: inherit;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: clamp(17px, 1.4vw, 21px);
  font-weight: 550;
  letter-spacing: -0.013em;
  line-height: 1.3;
  color: inherit;
`;

export const Chevron = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${(p) => (p.$open ? colors.primary : colors.border)};
  background: ${(p) => (p.$open ? colors.primary : "#fff")};
  color: ${(p) => (p.$open ? "#fff" : colors.textFaint)};
  font-size: 17px;
  font-weight: 300;
  line-height: 1;
  transform: ${(p) => (p.$open ? "rotate(135deg)" : "none")};
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
`;

// 0fr -> 1fr animates a grid row to its auto height, which plain height
// cannot do without measuring the content first.
export const Panel = styled.div`
  display: grid;
  grid-template-rows: ${(p) => (p.$open ? "1fr" : "0fr")};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  overflow: hidden;
  transition: grid-template-rows 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.4s ease;
`;

export const PanelClip = styled.div`
  min-height: 0;
`;

export const PanelBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  padding: 2px 16px 30px 58px;

  @media (max-width: 768px) {
    padding: 2px 6px 26px 16px;
    gap: 20px;
  }

  @media (max-width: 640px) {
    padding: 2px 4px 26px 14px;
  }
`;

export const Desc = styled.p`
  flex: 1 1 340px;
  font-size: 14.5px;
  line-height: 1.72;
  color: ${colors.textMuted};
  margin: 0;
  max-width: 600px;
  text-wrap: pretty;
`;

export const TagsBlock = styled.div`
  flex: 0 1 260px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const TagsLabel = styled.div`
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.15em;
  color: ${colors.textFaint};
  margin-bottom: 12px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const Tag = styled.span`
  font-size: 12.5px;
  color: ${colors.textMuted};
  padding: 7px 13px;
  border-radius: 7px;
  background: #fff;
  border: 1px solid ${colors.border};
`;

export const Actions = styled.div`
  flex: 1 0 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 26px;
  margin-top: 4px;
`;

export const ExploreCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 13.5px;
  font-weight: 550;
  color: #fff;
  background: ${colors.primary};
  padding: 12px 22px;
  border-radius: 999px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-2px);
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    min-height: 50px;
  }

  /* global.module.css's "* { color: #000 }" hits this arrow span directly,
     beating the colour inherited from the link. */
  span {
    color: inherit;
  }
`;

export const RelatedLink = styled.a`
  font-size: 12.5px;
  color: ${colors.textFaint};

  span {
    color: ${colors.primary};
    font-weight: 550;
  }
`;
