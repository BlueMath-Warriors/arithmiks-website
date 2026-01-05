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

export const HeaderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const HeaderSubHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`;

export const KeyFeaturesLabel = styled.p`
  color: #0957DE;
  font-family: Inter;
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
  font-family: Inter;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  position: absolute;
  top: 180px;
  right: 20px;

  @media screen and (max-width: ${breakpoints.large}) {
    top: 160px;
    right: 20px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    position: static;
    margin-top: 24px;
    align-self: flex-start;
  }
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

  &:hover {
    box-shadow: 4px 8px 24px 0px rgba(9, 87, 222, 0.25);
  }

  img {
    width: 18px;
    height: 18px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 40px;
    height: 42px;
    padding: 12px;

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
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding-bottom: 60px;
  }
`;

export const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  pointer-events: none;
  z-index: 10;
  background: ${(props) =>
    props.side === "left"
      ? "linear-gradient(to right, #E6EEFC 0%, rgba(230, 238, 252, 0) 100%)"
      : "linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)"};
  ${(props) => (props.side === "left" ? "left: 0;" : "right: 0;")}

  @media screen and (max-width: ${breakpoints.large}) {
    width: 150px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0 calc(50% - 342px);
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  gap: 32px;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    padding: 0 calc(50% - 250px);
    gap: 24px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px;
    gap: 16px;
  }
`;

export const CarouselSlide = styled.div`
  min-width: 684px;
  flex-shrink: 0;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoints.large}) {
    min-width: 500px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    min-width: calc(100vw - 32px);
    max-width: calc(100vw - 32px);
  }
`;

export const DashboardImage = styled.img`
  width: 684px;
  height: 573px;
  object-fit: contain;
  display: block;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 500px;
    height: auto;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    max-width: 100%;
    height: auto;
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

