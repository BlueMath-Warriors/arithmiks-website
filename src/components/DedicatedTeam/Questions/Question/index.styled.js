import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const OuterContainer = styled.div`
  display: flex;
  width: 608px;
  padding: 32px;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid #E7EAEE;: 1px solid #E7EAEE;
  ${(props) => props.showAnswer && `
    border-radius: 6px;
    background: #F6F7F9;
    border-bottom: none;
  `}
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 383px;
    margin-top: 12px;
  }
`

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const QuestionText = styled.p`
  color: #07090D;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;

  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.27px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-weight: 400;
  }
`

export const AnswerText = styled.p`
  color: #3C4353;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.48px;

`

export const ArrowImg = styled.div`
  padding: 8px;
  cursor: pointer;
`