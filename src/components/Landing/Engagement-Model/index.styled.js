import { styled } from "styled-components";

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
`;

export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ModelCard = styled.div`
  display: flex;
  width: 1120px;
  height: 376px;
  padding: 0px 24px;
  align-items: center;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  gap: 48px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #181818;
  box-shadow: 0px 16px 48px 0px rgba(0, 0, 0, 0.04);
  margin-bottom: 32px;
`;

export const CardText = styled.div`
  width: 472px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const CardImg = styled.img`
  width: 489px;
  height: 312px;
  flex-shrink: 0;
  border-radius: 16px;
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
`;

export const SecondaryText = styled.h1`
  color: #1355ff;
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
`;
