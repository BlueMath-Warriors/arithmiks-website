import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const SolutionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 80px;
  width: 100%;
  max-width: 1120px;
  margin: 80px auto 64px auto;
  padding: 0 20px;

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
    gap: 60px;
    margin-top: 60px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 32px;
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;

export const SolutionLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const SolutionRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

export const SolutionLabel = styled.p`
  color: #0957DE;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;

export const Title = styled.h2`
  color: #1d1d1f;
  text-align: left;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 36px;
  }
`;

export const Secondary = styled.span`
  color: #0957DE;
`;

export const SolutionDescription = styled.p`
  color: #42526B;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;

  strong {
    color: #1d1d1f;
    font-weight: 600;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const TitelCaption = styled.p`
  color: #42526B;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 0 48px 0;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 16px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 24px;
    gap: 12px;
  }
`;

export const CardIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  margin-bottom: 8px;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 40px;
    height: 40px;
  }
`;

export const CardTitle = styled.h3`
  color: #0957DE;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
  }
`;

export const CardDetail = styled.p`
  color: #42526B;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const GradiantContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
`;

export const Gradiant3 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
`;

