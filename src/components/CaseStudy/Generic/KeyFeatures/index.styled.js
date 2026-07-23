import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const KeyFeaturesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 20px 48px 20px;
  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
    padding: 60px 20px 40px 20px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 48px 16px 32px 16px;
  }
`;

export const SubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1120px;
  padding-left: 0;
  margin-left: -40px;
  align-self: flex-start;

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
    padding-left: 0;
    margin-left: -40px;
    align-self: flex-start;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding-left: 0;
    margin-left: 0;
    align-self: flex-start;
    width: 100%;
  }
`;

export const KeyFeaturesLabel = styled.p`
  color: #0957DE;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;

export const PrimaryHeading = styled.h2`
  color: #1d1d1f;
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 24px 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

export const Secondary = styled.span`
  color: #0957DE;
`;

export const SubHeading = styled.p`
  color: #42526B;
  text-align: left;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0 0 32px 0;
  max-width: 800px;
  width: 100%;
  padding-left: 0;
  margin-left: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    padding-left: 0;
    margin-left: 0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
    padding-left: 0;
    margin-left: 0;
  }
`;

export const SubHeadingTitle = styled.span`
  color: #0957DE;
  font-weight: 600;
`;

export const CarouselButtons = styled.div`
  display: contents;
`;

export const CarouselButton = styled.button`
  display: flex;
  width: 48px;
  height: 50px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: none;
  background: #CEDDF8;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  ${(props) =>
    props.side === "left"
      ? "left: calc(50% - 500px - 64px);"
      : "right: calc(50% - 500px - 64px);"}

  &:hover {
    box-shadow: 4px 8px 24px 0px rgba(9, 87, 222, 0.25);
  }

  img {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    ${(props) =>
      props.side === "left"
        ? "left: calc(50% - 380px - 56px);"
        : "right: calc(50% - 380px - 56px);"}
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 40px;
    height: 42px;
    padding: 12px;
    ${(props) => (props.side === "left" ? "left: 4px;" : "right: 4px;")}

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export const CarouselSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  position: relative;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding-bottom: 60px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 690px;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.large}) {
    height: 524px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 280px;
  }
`;

export const CarouselSlide = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: translate(-50%, -50%)
    translateX(${(props) => props.$offset * 60}%)
    scale(${(props) => (props.$active ? 1 : 0.8)});
  opacity: ${(props) => (props.$active ? 1 : props.$isPeek ? 0.5 : 0)};
  z-index: ${(props) => (props.$active ? 10 : props.$isPeek ? 5 : 0)};
  pointer-events: ${(props) => (props.$isPeek ? "auto" : "none")};
  cursor: ${(props) => (props.$isPeek ? "pointer" : "default")};

  @media screen and (max-width: ${breakpoints.medium}) {
    transform: translate(-50%, -50%)
      translateX(${(props) => props.$offset * 85}%)
      scale(${(props) => (props.$active ? 1 : 0.85)});
  }
`;

export const DashboardImage = styled.img`
  width: 1000px;
  height: 690px;
  object-fit: contain;
  display: block;
  border-radius: 12px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    height: 524px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: calc(100vw - 80px);
    max-width: 400px;
    height: auto;
    min-height: 250px;
  }
`;

export const PaginationDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
  width: 100%;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 24px;
    gap: 10px;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "#0957DE" : "#D1D5DB")};
  cursor: pointer;
  padding: 0;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#0957DE" : "#9CA3AF")};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 10px;
    height: 10px;
  }
`;
