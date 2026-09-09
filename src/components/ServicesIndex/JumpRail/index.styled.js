import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// flex-basis: calc((760px - 100%) * 999) is the design's own container-query
// stand-in: the rail takes its 284px column while the row has room for both,
// and wraps to full width once it does not.
export const Aside = styled.aside`
  flex: 0 1 calc((760px - 100%) * 999);
  min-width: 284px;
  max-width: 100%;
  position: sticky;
  top: 100px;
  padding: 4px 0 26px;
  background: #fff;
  z-index: 30;
  display: flex;
  flex-wrap: wrap;
  gap: 0 26px;
  align-items: flex-start;

  @media (max-width: 900px) {
    position: static;
    top: auto;
    flex: 1 1 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 14px;
    padding: 0 0 30px;
    z-index: auto;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.div`
  flex: 1 0 100%;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.16em;
  color: ${colors.textFaint};
  margin-bottom: 22px;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
`;

export const RailLink = styled.a`
  flex: 1 1 172px;
  display: flex;
  gap: 14px;
  padding: 17px 14px 17px 13px;
  border-top: 1px solid ${(p) => (p.$active ? "transparent" : colors.border)};
  border-left: 3px solid ${(p) => (p.$active ? colors.primary : "transparent")};
  border-radius: 0 8px 8px 0;
  background: ${(p) => (p.$active ? "#EAF0FF" : "transparent")};
  color: ${(p) => (p.$active ? colors.primary : colors.textFaint)};
  transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease,
    padding-left 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: ${(p) => (p.$active ? colors.primary : colors.text)};
    padding-left: 5px;
  }

  svg {
    flex: none;
    margin-top: 2px;
    opacity: 0.85;
  }

  @media (max-width: 900px) {
    flex: none;
    min-height: 52px;
    align-items: center;
    padding: 14px 10px;
  }
`;

export const RailName = styled.span`
  flex: 1;
  min-width: 0;
  font-size: 17px;
  font-weight: 550;
  letter-spacing: -0.006em;
  line-height: 1.34;
  color: inherit;
`;

export const RailCount = styled.span`
  flex: none;
  font-size: 12px;
  font-weight: 550;
  color: ${(p) => (p.$active ? colors.primary : "#8A93A6")};
  margin-top: 4px;
  transition: color 0.3s ease;
`;

export const Divider = styled.div`
  flex: 1 0 100%;
  height: 1px;
  background: ${colors.border};
`;

export const Footnote = styled.div`
  flex: 1 1 190px;
  margin-top: 38px;
  font-size: 13px;
  line-height: 1.6;
  color: ${colors.textFaint};

  a {
    font-weight: 550;
    color: ${colors.primary};
  }

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    margin-top: 24px;
  }
`;
