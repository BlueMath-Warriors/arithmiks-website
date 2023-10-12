import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 1120px;
  gap: 8px;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
  }
`;
export const PrimaryText = styled.h2`
  color: #fff;
  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -1.2px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 32px;
    letter-spacing: -0.96px;
  }
`;

export const Secondary = styled.span`
  color: #1355ff;
`;

export const Caption = styled.p`
  color: #fff;
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  max-width: 544px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 352px;
  height: 338px;
  flex-direction: column;

  border-radius: 12px;
  background: #0b63e5;
  backdrop-filter: blur(75px);

  @media screen and (max-width: ${breakpoints.large}) {
    height: 406px;
    width: 243px;
    align-items: center;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    height: 338px;
    align-items: flex-start;
    padding-left: 24px;
  }
`;

export const CardImg = styled.img`
  width: 98px;
  height: 98px;
  margin: 32px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin: 24px;
  }
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-family: Plus Jakarta Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.72px;
  margin-left: 24px;
  @media screen and (max-width: ${breakpoints.large}) {
    text-align: center;
    margin-left: 0;
    margin-bottom: 8px;
  }
`;

export const List = styled.ul`
  color: #596780;
  margin-left: 40px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: 30px;

  }
`;
export const ListItem = styled.li`
  color: rgba(255, 255, 255, 0.6);
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.32px;
`;
