import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const PrimaryText = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  margin-bottom: 16px;

  @media screen and (max-width: ${breakpoints.large}) {
    color: #040815;
    font-family: Plus Jakarta Sans;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.9px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    text-align: left;
    font-size: 24px;
    letter-spacing: -0.72px;
  }

`

export const Caption = styled.p`
color: rgba(0, 0, 0, 0.60);
text-align: center;
font-family: Poppins;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 120%;

margin-bottom: 56px;

@media screen and (max-width: ${breakpoints.large}) {
  color: #596780;
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  margin-bottom: 32px;

}


@media screen and (max-width: ${breakpoints.medium}) {
  text-align: left;
  margin-bottom: 24px;
}

`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  display: flex;
  height: 420px;
  width: 352px;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 36px;
  background: rgba(245, 245, 245, 0.60);
  backdrop-filter: blur(2px);
  z-index: 10;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 243px;
    height: 363px;
    padding: 24px 8px;
    gap: 8px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    height: 256px;
    padding: 24px;
    gap: 16px;
  }
`

export const CardTitle = styled.h3`
  color: #1355FF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (max-width: ${breakpoints.large}) {
    text-align: center;
    height: 38px;
    width: 227px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    text-align: left;
    height: 19px;
    width: 310px;
  }
`

export const CardDetail = styled.div`
  color: #202020;
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: -0.36px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }
`

export const GradiantContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 651px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  opacity: 0.9;

  position: absolute;
  top: -30px;
  left: -140px;

  @media screen and (max-width: ${breakpoints.large}) {
    top: -25px;
    left: -300px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 615px;
    width: 430px;
    top: 130px;
    left: -30px;
    align-items: center;
    opacity: 0.5;
  }
`

export const GradiantImg = styled.div`
`