import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { Eyebrow } from "../../shared/Section/index.styled";

// Shared pieces of the case-study page design: every band uses the same
// eyebrow, h2 and body-copy sizes.
export const SectionEyebrow = styled(Eyebrow)`
  margin-bottom: 18px;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(26px, 2.9vw, 46px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ $onDark }) => ($onDark ? "#fff" : colors.text)};
  text-wrap: balance;
`;

export const bandPadding = `
  padding: clamp(72px, 6.4vw, 120px) 0;

  @media (max-width: 900px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;
