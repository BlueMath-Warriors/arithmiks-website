import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";
import EasybarCatalog from "../../../../images/easybar-catalog.png";

export const OverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  margin: 216px 116px 216px 152px;
  max-width: 560px;
`

export const OverviewCaption = styled.p`
  color: rgba(0, 0, 0, 0.60);
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  max-width: 400px;
`
export const OverviewDetail = styled.p`
  color: rgba(0, 0, 0, 0.60);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px;
`
export const FeatureTitle = styled.h1`
  color: rgba(0, 0, 0, 0.87);
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: ${props => (props.overview ? '600px' : '700px')};
  line-height: 100%;
`;

export const OverViewImgContainer = styled.div`
  height: 555.693px;
  width: 727.97px; 
  background: rgba(235, 235, 235, 0.60); 
  padding: 18px;
  border-radius: 22px;
  position: relative;
`
export const GradientContainer = styled.div`
  display: flex;
  width: 740px;
  height: 740px;
  padding: 0px 25.16px 0px 140.6px;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  left: -340px;
  top: -65px;
`

export const Gradiant2 = styled.img`
  width: 740px;
  height: 740px; 
  position: relative;
  left: 100px;
  top: 100px;
`

export const BackImage = styled.div`
  width: 690px;
  height: 520px;
  background-image: url(${EasybarCatalog});
  background-size: cover;
  position: relative;
  z-index: 10;
`