import { styled } from "styled-components";

export const Header = styled.div`
  height: 90px;
  max-width: 1120px;;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Left = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justy-content: center;
  align-items: flex-start;
`
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justy-content: space-between;
  align-items: flex-start;
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
		margin-bottom: 16px;
`
export const ViewAllBtn = styled.p`
  display: inline-flex;
  padding: 12px 16px 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 6px;
  border: 1px solid #E7EAEE;
  background: #FFF;

`
