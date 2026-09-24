import React, { useRef } from "react";
import TableOfContents from "./TableOfContents";
import PolicySection from "./PolicySection";
import { POLICY_SECTIONS, LAST_UPDATED } from "./sections";
import { useActiveSection } from "./useActiveSection";
import { useHeroScrollFade } from "./useHeroScrollFade";
import { Shell, GradientText } from "../shared/Section/index.styled";
import {
  Section,
  GlowClip,
  Glow,
  Layout,
  Body,
  Intro,
  Title,
  Lede,
  Meta,
  ContactBox,
  ContactText,
  ContactRow,
} from "./index.styled";

const SECTION_IDS = POLICY_SECTIONS.map((section) => section.id);

const PrivacyPolicy = () => {
  const introRef = useRef(null);
  const [activeId, markActive] = useActiveSection(SECTION_IDS);
  useHeroScrollFade(introRef);

  return (
    <Section id="top" aria-label="Privacy policy">
      <GlowClip aria-hidden="true">
        <Glow />
      </GlowClip>
      <Shell data-shell="">
        <Layout>
          <TableOfContents sections={POLICY_SECTIONS} activeId={activeId} onSelect={markActive} />
          <Body>
            <Intro ref={introRef} data-hero-enter="">
              <Title>
                Privacy <GradientText>Policy</GradientText>
              </Title>
              <Lede>
                This policy explains what information Arithmiks collects, why we collect it, how we
                use and protect it, and the choices you have. It applies to arithmiks.com and to the
                services we provide to our clients.
              </Lede>
              <Meta>
                <span>
                  Last updated: <strong>{LAST_UPDATED}</strong>
                </span>
              </Meta>
            </Intro>

            {POLICY_SECTIONS.map((section) => (
              <PolicySection key={section.id} section={section} />
            ))}

            <ContactBox id="contact">
              <h2>Questions about this policy?</h2>
              <ContactText>
                Write to us and we will respond within two business days. For requests about your
                personal data, please include the email address you used with us so we can verify
                the request.
              </ContactText>
              <ContactRow>
                <a href="mailto:privacy@arithmiks.com">privacy@arithmiks.com</a>
                <span>537, C Block, Street 13, Faisal Town, Lahore, Punjab, Pakistan</span>
              </ContactRow>
            </ContactBox>
          </Body>
        </Layout>
      </Shell>
    </Section>
  );
};

export default PrivacyPolicy;
