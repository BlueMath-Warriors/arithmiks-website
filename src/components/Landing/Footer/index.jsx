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
import * as containerStyles from "../../../styles/global.module.css";
import favicon from "../../../images/favicon.png";

const Footer = () => {
  return (
    <>
      <div className={containerStyles.footer}>
        <FooterContent>
          <Arithmiks>
            <LogoHeading>
              <Logo src={favicon} />
              <CompanyName>Arithmiks</CompanyName>
            </LogoHeading>
            <Moto>
              Data visualization, and expense management for your business.
            </Moto>
          </Arithmiks>

          <Services>
            <Heading>Services</Heading>
            <Text>Data Analysis & Management</Text>
            <Text>Custom Software Development</Text>
            <Text>Web Application</Text>
            <Text>Mobile Application</Text>
            <Text>
              Re-Buliding &<br />
              Re-Engineering Softwares
            </Text>
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
            <Text>Java</Text>
            <Text>Paython</Text>
            <Text>.NET</Text>
            <Text>iOS</Text>
            <Text>Android</Text>
            <Text>Java script</Text>
            <Text>Flutter Development</Text>
            <Text>React</Text>
            <Text>AWS</Text>
          </Technologies>

          <Industries>
            <Heading mb8>Industries</Heading>
            <Text>Healthcare</Text>
            <Text>Fintech</Text>
            <Text>Telecom</Text>
            <Text>Robotics</Text>
            <Text>Retail</Text>
            <Text>E-learning</Text>
          </Industries>

          <Experties>
            <Heading mb8>Experties</Heading>
            <Text>Cloud</Text>
            <Text>DevOps</Text>
            <Text>Embedded</Text>
            <Text>Machine Learning</Text>
            <Text>Mobile</Text>
            <Text>Blockchain</Text>
            <Text>Cybersecurity</Text>
            <Text>UI/UX Service</Text>
            <Text>QA & Testing</Text>
          </Experties>
        </FooterContent>

        <Divider />

        <FooterBottom>
          <FooterLinks>
            <Link divider>Privacy Policy</Link>
            <Link divider>Terms & Conditions</Link>
            <Link>Cookie Policy</Link>
          </FooterLinks>
          <CopyRightText>© arithmiks 2023</CopyRightText>
        </FooterBottom>
      </div>
    </>
  );
};

export default Footer;
