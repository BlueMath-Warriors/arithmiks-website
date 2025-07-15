import React from "react";
import {
  FooterContent,
  Arithmiks,
  CompanyName,
  Heading,
  Logo,
  LogoHeading,
  Text,
  Moto,
  Services,
  Technologies,
  Industries,
  Experties,
  Divider,
  FooterBottom,
  FooterLinks,
  Link,
  CopyRightText,
} from "./index.styled";
import {
  Caption,
  Circle,
  SubCard,
  CardContent,
  ContentText,
} from "../Contact-Us/index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import favicon from "../../../images/favicon.png";

const Footer = () => {
  return (
    <footer className={containerStyles.footer}>
      <FooterContent>
        <Arithmiks>
          <LogoHeading>
            <Logo src={favicon} />
            <CompanyName>Arithmiks</CompanyName>
          </LogoHeading>
          <Moto>
            Software Development Company. We offer digital solutions to your problems.
          </Moto>
        </Arithmiks>

        <Services>
          <Heading>Services</Heading>
          <Text>Data Processing & Analysis</Text>
          <Text>Custom Software Development</Text>
          <Text>Web Application</Text>
          <Text>Mobile Application</Text>
          <Text>Re-Engineering Softwares</Text>
          <Text>DevOps</Text>
          <Text>Cloud Computing Solutions</Text>
          <Text>
            IT Project
            <br />
            Management
          </Text>
          <Text>Technical Support & Troubleshooting</Text>
        </Services>

        <Technologies>
          <Heading mb8>Technologies</Heading>
          <Text>Python</Text>
          <Text>Node</Text>
          <Text>React</Text>
          <Text>Vue</Text>
          <Text>iOS</Text>
          <Text>Android</Text>
          <Text>Java script</Text>
          <Text>AWS</Text>
        </Technologies>

        <Industries>
          <Heading mb8>Industries</Heading>
          <Text>Healthcare</Text>
          <Text>Fintech</Text>
          <Text>Retail</Text>
          <Text>E-learning</Text>
          <Text>Con-tech</Text>
        </Industries>

        <Experties>
          <Heading mb8>Experties</Heading>
          <Text>Cloud</Text>
          <Text>DevOps</Text>
          <Text>Machine Learning</Text>
          <Text>Mobile</Text>
          <Text>UI/UX Service</Text>
          <Text>QA & Testing</Text>
        </Experties>
      </FooterContent>

      <Divider />

      <SubCard>
        <Circle>
          <Envelope />
        </Circle>
        <CardContent>
          <Caption>Career</Caption>
          <a href="mailto: hr@arithmiks.com">
            <ContentText>hr@arithmiks.com</ContentText>
          </a>
        </CardContent>
      </SubCard>

      <Divider />


      <FooterBottom>
        <FooterLinks>
          <Link divider>Privacy Policy</Link>
          <Link divider>Terms & Conditions</Link>
          <Link>Cookie Policy</Link>
        </FooterLinks>
        <CopyRightText>© arithmiks 2025</CopyRightText>
      </FooterBottom>
    </footer>
  );
};

export default Footer;
