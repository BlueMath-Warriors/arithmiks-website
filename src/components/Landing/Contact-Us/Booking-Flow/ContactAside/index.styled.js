import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

const ON_BLUE_MUTED = "rgba(255, 255, 255, 0.75)";
const TESTIMONIAL_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 2vw, 36px);
  padding: clamp(28px, 2.6vw, 52px) clamp(22px, 2.6vw, 52px) clamp(24px, 2.2vw, 40px);
  color: #fff;
  min-width: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${ON_BLUE_MUTED};
  margin-bottom: ${({ $tight }) => ($tight ? "-6px" : "5px")};
`;

export const Badges = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;

  img {
    height: 100px;
    width: auto;
    display: block;
  }
`;

export const Divider = styled.div`
  height: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(22px, 1.8vw, 30px);
`;

const detailText = `
  font-size: clamp(16px, 1.02vw, 17.5px);
  font-weight: 550;
  color: #fff;
`;

export const DetailLink = styled.a`
  ${detailText}

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const DetailText = styled.div`
  ${detailText}
`;

export const Socials = styled.span`
  display: flex;
  gap: 10px;
  margin-top: clamp(6px, 0.6vw, 12px);
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 44px;
  height: 44px;
  color: #fff;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  transition: background 0.25s ease, color 0.25s ease;

  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: #fff;
    color: ${colors.primary};
    border-color: #fff;
  }
`;

export const Testimonial = styled.figure`
  margin: 0;
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

export const QuoteMark = styled.svg`
  display: block;
  margin-bottom: clamp(14px, 1.2vw, 18px);
  opacity: 0.5;
  overflow: visible;
`;

export const Stack = styled.div`
  display: grid;
`;

export const Slide = styled.div`
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 1.3vw, 20px);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: translateY(${({ $active }) => ($active ? "0" : "8px")});
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  transition: opacity 0.6s ${TESTIMONIAL_EASE}, transform 0.6s ${TESTIMONIAL_EASE};
`;

export const Quote = styled.blockquote`
  margin: 0;
  font-size: clamp(15.5px, 1.1vw, 18.5px);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.005em;
  color: #fff;
  text-wrap: pretty;
`;

export const Author = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 14px;

  img {
    flex: none;
    width: 46px;
    height: 46px;
    border-radius: 10px;
    object-fit: cover;
    display: block;
  }
`;

export const AuthorText = styled.span`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const AuthorName = styled.span`
  font-size: clamp(15px, 0.96vw, 16px);
  font-weight: 650;
  line-height: 1.3;
  color: #fff;
`;

export const AuthorRole = styled.span`
  font-size: 13.5px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.78);
`;
