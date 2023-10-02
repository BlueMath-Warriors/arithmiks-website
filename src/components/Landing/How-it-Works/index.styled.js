import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const Header = styled.div`
  height: 109px;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: ${breakpoints.large}) {
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    
  }
`
export const HeaderLeft = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const HeaderTitle = styled.h1`
  color: #1D1D1F;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
export const HeaderDescription = styled.p`
  color: #4F4F4F;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`

export const CarouselButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  gap: 24px;
  `

export const CarouselButton = styled.button`
  display: flex;
  width: 48px;
  height: 50px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: none;
  background: ${props => (props.blue ? '#1355FF' : '#1A202C')};
  &:hover{
    box-shadow: 4px 8px 24px 0px rgba(36, 107, 253, 0.25);
  }
`

export const BtnIcon = styled.img`
  width: 18px;
  height: 18px;
`

export const SmallTxt = styled.p`
  color: #1355FF;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-bottom: 8px;
`

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  left: 380px;
  justify-content: flex-start;
  align-items: center;
  gap: 111px;
  width: 2190px;
  overflow-x: auto !important;
`

export const CarouselCard = styled.div`
  display: flex;
  width: 326px;
  height: 370px;
  border-radius: 30px;
  background: #FFF;
  padding: 32px 32px 38px 32px;
  flex-direction: column;
`

export const CardTitle = styled.h1`
  color: #454749;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
  white-space: normal;
`

export const CardDetails = styled.h1`
  color: #4F4F4F;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  white-space: normal;
`

export const ImgContainer = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  background: #E8EEFF;
  padding: 34px;
  margin-bottom: 44px;
`

export const CardImg = styled.img`
  width: 42px;
  height: 42px;
`