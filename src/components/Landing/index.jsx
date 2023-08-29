import React from "react";
import { Background, ComingSoon, Content, Logo } from "./index.styled";
import { StaticImage } from "gatsby-plugin-image";

const LandingPage = () => {
  return (
    <Background>
      <Content>
        <Logo>
          <StaticImage src="../../images/logo.png" alt="arithmiks logo" />
        </Logo>
        <ComingSoon>
          <p>Coming Soon</p>
        </ComingSoon>
      </Content>
    </Background>
  );
};

export default LandingPage;
