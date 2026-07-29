import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../Landing/index.styled";

export const PageHeader = styled.div`
  width: 1120px;
  margin: 48px auto 0;
  text-align: center;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const Eyebrow = styled.p`
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 12px;
`;

export const Title = styled.h1`
  color: #170f49;
  font-family: Poppins;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 16px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  color: #596780;
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  width: 1120px;
  margin: 64px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #e7eaee;
  background: #fff;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0px 8px 24px rgba(19, 85, 255, 0.12);
    transform: translateY(-4px);
  }
`;

export const CardTitle = styled.h2`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 12px;
`;

export const CardDescription = styled.p`
  color: #596780;
  font-family: Poppins;
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 20px;
  flex: 1;
`;

export const CardCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
`;

export const ContactSection = styled.div`
  margin-top: 96px;
`;
