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
  CompanyTextHighlight,
  Services,
  Technologies,
  Industries,
  Experties,
  Divider,
  ContactInfoContainer,
  FooterBottom,
  FooterLinks,
  Link,
  CopyRightText,
} from "./index.styled";
import {
  SubCard,
  CardContent,
} from "../Contact-Us/index.styled";
import {
  FooterCaption,
  FooterContentText,
  FooterCircle,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import favicon from "../../../images/favicon.png";
import EmailIcon from "../../../images/email.svg";
import OfficeIcon from "../../../images/office.svg";
import CareerIcon from "../../../images/career.svg";

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
            <div>
              <CompanyTextHighlight>Software Development</CompanyTextHighlight> <span style={{color: '#0957DE'}}>Company</span>.
            </div>
            <div style={{marginTop: '9px', color: '#596780'}}>
              We offer digital solutions to your problems.
            </div>
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

      <ContactInfoContainer>
        <SubCard>
          <FooterCircle>
            <EmailIcon />
          </FooterCircle>
          <CardContent>
            <FooterCaption>Email</FooterCaption>
            <a href="mailto: services@arithmiks.com">
              <FooterContentText>services@arithmiks.com</FooterContentText>
            </a>
          </CardContent>
        </SubCard>

        <SubCard>
          <FooterCircle>
            <OfficeIcon />
          </FooterCircle>
          <CardContent>
            <FooterCaption>Office</FooterCaption>
            <FooterContentText medium>
              Lahore, Pakistan
            </FooterContentText>
          </CardContent>
        </SubCard>

        <SubCard>
          <FooterCircle>
            <CareerIcon />
          </FooterCircle>
          <CardContent>
            <FooterCaption>Careers</FooterCaption>
            <a href="mailto: hr@arithmiks.com">
              <FooterContentText>hr@arithmiks.com</FooterContentText>
            </a>
          </CardContent>
        </SubCard>
      </ContactInfoContainer>

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
