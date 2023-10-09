import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
  margin-bottom: 74px;
  margin-top: 130px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    margin-top: 80px;
    margin-bottom: 38px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    margin-top: 36px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 24px;
  }

`
export const PrimaryText = styled.h2`
  color: #040815;

  font-family: Plus Jakarta Sans;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -1.2px;
  `

export const Secondary = styled.span`
  color: #1355FF;
`

export const Caption = styled.p`
  color: #596780;
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.4px;
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 307px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 130px;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  display: flex;
  padding: 32px 28px 32px 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 12px;
  background: rgba(245, 245, 245, 0.50);
  backdrop-filter: blur(75px);
  height: 256px;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 342px;
    width: 243px;
    padding: 20px 8px 20px 8px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 256px;
    width: 382px;
    align-items: center;
  }
`

export const CardTitle = styled.h3`
  color: #040815;
  font-family: Plus Jakarta Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.72px;
`

export const List = styled.ul`
  color: #596780;
  margin-left: 14px;

`
export const ListItem = styled.li`  
  color: #596780;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.32px;
`
export const CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`