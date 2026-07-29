import React from "react";
import {
  FooterContent,
  Arithmiks,
  CompanyName,
  Heading,
  Logo,
  LogoHeading,
  Text,
  TechBadge,
  Moto,
  CompanyTextHighlight,
  Services,
  Technologies,
  Industries,
  Expertise,
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

const scrollToContact = () => {
  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className={containerStyles.footer}>
      <FooterContent>
        <Arithmiks>
          <LogoHeading>
            <Logo src={favicon} alt="Arithmiks" width={27} height={32} />
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
          <Text to="/services/ai-data-solutions">Data Processing & Analysis</Text>
          <Text to="/services/custom-software-development">Custom Software Development</Text>
          <Text to="/services/web-app-development">Web Application</Text>
          <Text to="/services/mobile-app-development">Mobile Application</Text>
          <Text to="/services/custom-software-development">Re-Engineering Softwares</Text>
          <Text to="/services/devops">DevOps</Text>
          <Text as="button" type="button" onClick={scrollToContact}>Cloud Computing Solutions</Text>
          <Text as="button" type="button" onClick={scrollToContact}>
            IT Project
            <br />
            Management
          </Text>
          <Text as="button" type="button" onClick={scrollToContact}>Technical Support & Troubleshooting</Text>
        </Services>

        <Technologies>
          <Heading $mb8>Technologies</Heading>
          <TechBadge>Python</TechBadge>
          <TechBadge>Node</TechBadge>
          <TechBadge>React</TechBadge>
          <TechBadge>Vue</TechBadge>
          <TechBadge>iOS</TechBadge>
          <TechBadge>Android</TechBadge>
          <TechBadge>Java script</TechBadge>
          <TechBadge>AWS</TechBadge>
        </Technologies>

        <Industries>
          <Heading $mb8>Industries</Heading>
          <Text to="/case-studies?category=fintech">FinTech</Text>
          <Text to="/case-studies?category=saas-software">SaaS Software</Text>
          <Text to="/case-studies?category=contech">ConTech</Text>
        </Industries>

        <Expertise>
          <Heading $mb8>Expertise</Heading>
          <Text as="button" type="button" onClick={scrollToContact}>Cloud</Text>
          <Text to="/services/devops">DevOps</Text>
          <Text to="/services/ai-data-solutions">Machine Learning</Text>
          <Text to="/services/mobile-app-development">Mobile</Text>
          <Text to="/services/ui-ux-design">UI/UX Service</Text>
          <Text as="button" type="button" onClick={scrollToContact}>QA & Testing</Text>
        </Expertise>
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
            <FooterContentText $medium>
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
          <Link $divider>Privacy Policy</Link>
          <Link $divider>Terms & Conditions</Link>
          <Link>Cookie Policy</Link>
        </FooterLinks>
        <CopyRightText>© Arithmiks {new Date().getFullYear()}</CopyRightText>
      </FooterBottom>
    </footer>
  );
};

export default Footer;
