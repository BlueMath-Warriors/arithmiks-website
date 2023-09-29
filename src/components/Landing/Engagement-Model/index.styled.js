import { styled } from "styled-components";

const breakpoints = {
  small: "820px",
  medium: "820px",
  large: "1040px",
  x_large: "1440px",
};

export const TextContainer = styled.div`
  display: flex;
  max-width: 544px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const CardBtn = styled.button`
  display: flex;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 7px;
  background: #0b63e5;
  border: none;
  margin-top: 24px;

  color: var(--gray-00, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 16px;
  }  

`;

export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ModelCard = styled.div`
  display: flex;
  width: 1120px;
  height: auto;
  padding: 24px;
  align-items: center;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  gap: 48px;
  border-radius: 32px;
  background: #181818;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.04);
  margin-bottom: 32px;

  @media screen and (max-width: ${breakpoints.x_large}) {
    width: 760px;
    padding: 24px;
    gap: 16px;
    border-radius: 16px;
    margin-bottom: 24px;
  }  

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    width: 382px;
    padding: 16px;
    gap: 16px;
    border-radius: 16px;
    margin-bottom: 25px;
    justify-content: flex-start;
  }  
`;

export const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: ${props => (props.right ? '63px' : '')};
  padding-left: ${props => (props.right ? '' : '63px')};
  @media screen and (max-width: ${breakpoints.x_large}) {
    margin: 24px 0;
    padding: 0;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    order: 2;
    margin: 24px 0;
    padding: 0;
  }
`;
export const CardImg = styled.img`
  width: 489px;
  height: 312px;
  border-radius: 16px;

  @media screen and (max-width: ${breakpoints.x_large}) {
    width: 283px;
    height: 180px;
    border-radius: 8px;
  }  

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 350px;
    height: 211px; 
    border-radius: 8px;
    order: 1;
  }
`;
export const CardHeader = styled.h1`
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.24px;
  margin-bottom: 12px;
`;

export const CardBody = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
export const MainHead = styled.h1`
  color: #fff;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "cpsp" on, "cv06" on, "cv09" on, "cv04" on, "cv03" on,
    "case" on, "ss03" on;
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  margin-bottom: 72px;

  @media screen and (max-width: ${breakpoints.x_large}) {
    font-size: 48px;
    line-height: 62px;
    letter-spacing: -0.72px;
    margin-bottom: 48px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 28px;
    line-height: normal;
    letter-spacing: 0.28px;
  }  
`;

export const SecondaryText = styled.span`
  color: #1355ff;
`;