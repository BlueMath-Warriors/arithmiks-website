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

export const Header = styled.header`
  background-color: transparent;
  box-shadow: none;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 1170px;
  height: 90px;
  padding: 19.5px 0px;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  list-style-type: none;
`;

export const MenuItem = styled.li`
  color: var(--secondary80);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;

  ${({active}) => active && `
    background: var(--button-gradient, linear-gradient(230deg, #BC4E9B 19.66%, #0957DE 115.46%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const CtaBtn = styled.button`
  display: flex;
  padding: 16px 50px;
  justify-content: center;
  align-items: center;

  border-radius: 70px;
  background: var(--button-gradient, linear-gradient(230deg, #BC4E9B 19.66%, #0957DE 115.46%));


  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;

export const TextContainer = styled.div`
  display: flex;
  max-width: 1100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const MainHead = styled.h1`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 70px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;
`;

export const Description = styled.p`
  color: var(--secondary80);
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.5%; /* 27.09px */
`;
