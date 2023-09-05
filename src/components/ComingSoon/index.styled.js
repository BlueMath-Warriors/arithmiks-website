import { styled } from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  height: auto;

  img {
    width: 90%;
  }
`;

export const ComingSoon = styled.div`
  p {
    margin-top: 8px;
    color: #fff;
    font-size: 48px;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    p {
      font-size: 36px;
    }
  }

  @media (max-width: 680px) {
    p {
      font-size: 28px;
      font-weight: 400;
    }
  }

  @media (max-width: 480px) {
    p {
      font-size: 18px;
      font-weight: 300;
    }
  }
`;
