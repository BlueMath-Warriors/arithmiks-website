import styled from "styled-components";
import { WIDE_QUERY } from "../ValueCard/index.styled";

export const Section = styled.section`
  padding: 72px 0 104px;
  background: #fff;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

// The value card's chips flow as a fitted row; these sit in fixed columns that
// size to the longest item — two on most wide screens, three from 1360px.
export const Chips = styled.div`
  flex: 3 1 460px;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: center;

  @media ${WIDE_QUERY} {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    flex: 0 0 auto;
    margin-left: auto;
    max-width: 100%;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(3, max-content);
  }

  @media (max-width: 900px) {
    flex: 0 0 auto;
  }

  @media (max-width: 560px) {
    gap: 8px;
  }
`;
