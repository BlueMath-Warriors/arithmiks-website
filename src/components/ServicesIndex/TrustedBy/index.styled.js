import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  padding: 0 0 4px;
  background: #fff;
`;

export const Row = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
  display: flex;
  align-items: center;
  gap: 34px;
  border-top: 1px solid ${colors.border};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

export const Label = styled.span`
  flex: none;
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.16em;
  color: ${colors.textFaint};
  padding: 30px 0;

  @media (max-width: 900px) {
    padding: 24px 0 4px;
  }

  @media (max-width: 640px) {
    font-size: 11px;
  }
`;

export const Track = styled.div`
  flex: 1 1 auto;
  min-width: 0;
`;

export const ClientLogo = styled.img`
  max-height: 32px;
  max-width: 128px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  filter: grayscale(1) brightness(0.35);
  opacity: 0.55;
  transition: filter 0.4s ease, opacity 0.4s ease;

  &:hover {
    filter: none;
    opacity: 1;
  }
`;
