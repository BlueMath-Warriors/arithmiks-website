import styled from "styled-components";

const RULE = "1px solid rgba(255, 255, 255, 0.2)";

export const Head = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth};
`;

// One statistic beside the argument it makes, a third wider; stacked from
// 900px, then divided by horizontal rules on phones.
export const Row = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
  margin-top: 56px;
  border-top: ${RULE};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 40px;
  }
`;

const cell = `
  @media (max-width: 900px) {
    border-right: 0;
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 700px) {
    padding: 28px 0;
    border-bottom: ${RULE};

    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const StatCell = styled.div`
  padding: 38px 34px 34px 0;
  border-right: ${RULE};
  ${cell}
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  padding: 38px 24px 34px clamp(24px, 4vw, 72px);
  ${cell}

  /* The design's phone rule for the statistic's paragraphs reaches these too. */
  @media (max-width: 700px) {
    p {
      max-width: none;
      margin-top: 16px;
    }
  }
`;

export const AsideLead = styled.p`
  margin: 0;
  font-size: clamp(20px, 1.8vw, 28px);
  font-weight: 550;
  letter-spacing: -0.015em;
  line-height: 1.4;
  color: #fff;
  text-wrap: pretty;
`;

export const AsideText = styled.p`
  margin: 0;
  max-width: 56ch;
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  text-wrap: pretty;
`;
