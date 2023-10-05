import { styled } from "styled-components";
import { breakpoints } from "../../../../Landing/index.styled";

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  margin: 216px 116px 216px 152px;
  max-width: 560px;
`

export const FeatureCaption = styled.p`
  color: rgba(0, 0, 0, 0.60);
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  max-width: 400px;
`
export const FeatureDetail = styled.p`
  color: ${props => (props.overview ? 'color: rgba(0, 0, 0, 0.60)' : 'rgba(0, 0, 0, 0.70)')};
  font-size: ${props => (props.overview ? '20px' : '24px')};
  font-style: normal;
  font-weight: 400;
  line-height: ${props => (props.overview ? '34px' : '36px')};
`
export const FeatureTitle = styled.h1`
  color: rgba(0, 0, 0, 0.87);
  font-family: Poppins;
  font-size: ${props => (props.overview ? '64px' : '50px')};
  font-style: normal;
  font-weight: ${props => (props.overview ? '600px' : '700px')};
  line-height: ${props => (props.overview ? '100%' : 'normal')};
`;


export const FeatureImgContainer = styled.div`
  background: rgba(235, 235, 235, 0.60); 
  padding: ${props => (props.left ? '18px 18px 18px 0' : '18px 0 18px 18px')};
  border-radius:  ${props => (props.left ? ' 0 22px 22px 0' : '22px 0 0 22px')};
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
  ${props => (props.left ? 'right: -310px; top: 40px;' : 'left: 35px; top: 115px;')};
  
`

export const GradiantImg = styled.img`
`

export const FeatureImg = styled.div`
  height: 520px;
  width: 594px;

  border-radius: ${props => (props.left ? ' 0 21px 21px 0 ' : '21px 0 0 21px')}; 
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
`

export const FeatureOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  max-width: 1440px;
`