import { styled } from "styled-components";

export const breakpoints = {
  small: "430px",
  medium: "820px",
  large: "1200px",
};

export const Headerr = styled.header`
  background: ${(props) => (props.white ? 'white' : 'rgba(255, 255, 255, 0.80)')};
  position: ${(props) => (props.white ? 'fixed' : 'absolute')};

  box-shadow: none;
  left: 0;
  right: 0;
  top: 0;
  z-index: 11;
`;

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 1120px;
  height: 90px;
  padding: 19.5px 0px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
  }
`;

export const DownIcon = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  padding: 0px 4.167px;
  justify-content: center;
  align-items: center;
`
export const IconImg = styled.img`
  width: 11.667px;
  height: 5.833px;
`

export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.large}) {
    display: block;
    width: 33px;
    height: 33px; 
    cursor: pointer;
    margin-left: 16px;
  }
`

export const MenuIcon = styled.img`
  width: 33px;
  height: 33px; 
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  list-style-type: none;
  margin-left: auto;
  margin-right: 32px;
  @media screen and (max-width: ${breakpoints.large}) {
    position: fixed;
    left: 100%;
    top: 70px;
    flex-direction: column;
    background: #fff;
    width: 100%;
    text-align: left;
  }

  &.active {
    left: 0;
    margin-top: 18px;
    border-top: 1px solid #C2C2C2; 
  }
  
  @media screen and (max-width: ${breakpoints.large}) {
    gap: 24px;
    padding: 12px 0;
  }

`;

export const MenuItem = styled.li`
  color: ${props => (props.blue ? '#1355FF' : '#170F49')};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: ${props => (props.blue ? '600' : '400')};
  line-height: normal;
  letter-spacing: -0.36px;
  cursor: pointer;

  display: ${props => (props.hidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  gap: 6px;
  ${({active}) => active && `
    background: var(--button-gradient, linear-gradient(230deg, #BC4E9B 19.66%, #0957DE 115.46%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  @media screen and (max-width: ${breakpoints.large}) {
    display: ${props => (props.hidden ? 'none' : '')};
    padding-left:  24px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    display: ${props => (props.hidden ? 'block' : '')};
    padding-left:  24px;
  }
`;

export const HeaderButtonTxt = styled.p`
  color: #FFF;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: DM Sans;
  font-size: 15.999px;
  font-style: normal;
  font-weight: 700;
  line-height: 17.999px;
`

export const CtaBtn = styled.button`
  display: flex;
  width: ${props => (props.fixed ? '134px' : '144px')};
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${props => (props.fill ? '#1355FF' : 'transparent')};

  color: ${props => (props.fill ? '#FFF' : '#1355FF')};
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  border: ${props => (props.fill ? 'none' : '1px solid #1355FF; ')};
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: ${props => (props.fixed ? '' : 'auto')};
    margin-right: ${props => (props.fixed ? '' : '16px')};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    display: ${props => (props.fixed ? '' : 'none')};
  }
`;

export const CompanyLogo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`

export const LogoIcon = styled.div`
  width: 36px;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 24px;
  }
`;

export const LogoText = styled.p`
  color: #170F49;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 28.152px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.716px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
  }
`;


export const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 0px;
  position: absolute;
  width: 100%;
  top: 90px;
  background: #FFF;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 4px 6px -1px rgba(0, 0, 0, 0.10);
  @media screen and (max-width: ${breakpoints.large}) {
    display: none;
  }

`

export const ServiceRow = styled.div`
  display: flex;
  width: 256px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`
export const ServiceHeader = styled.h1`
  color: #111928;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`

export const ServiceText = styled.h1`
  color: #6B7280;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  &:hover{
    color: #1355FF;
    font-weight: 700;
  }
`