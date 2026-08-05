import * as React from "react";
import { useEffect, useRef } from "react";
import Header from "../../components/Landing/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactUs from "../../components/Landing/Contact-Us";
import Footer from "../../components/Landing/Footer";
import * as containerStyles from "../../styles/global.module.css";
import { SEO } from "../../components/seo";
import { SERVICE_CATEGORIES } from "../../constants/serviceCategories";
import CodeCircle from "../../images/code-circle.svg";
import CpuIcon from "../../images/cpu-icon.svg";
import LampIcon from "../../images/lamp-icon.svg";
import SettingIcon from "../../images/setting-icon.svg";
import ArrowRightBlue from "../../images/arrow-right-blue.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../utils/animations";
import {
  PageHeader,
  HeaderInner,
  Eyebrow,
  Title,
  Description,
  StatRow,
  Stat,
  StatNumber,
  StatLabel,
  HeaderCta,
  CategoryNav,
  CategoryNavLink,
  CategorySection,
  CategoryHeader,
  CategoryHeaderMain,
  CategoryHeaderChips,
  CategoryIndex,
  CategoryIconWrap,
  CategoryTitle,
  CategoryDescription,
  Grid,
  Card,
  CardIconBadge,
  CardTitle,
  CardDescription,
  ChipRow,
  Chip,
  ChipDot,
  ContactSection,
} from "../../components/ServicesIndex/index.styled";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORY_ICONS = {
  code: <CodeCircle />,
  cpu: <CpuIcon />,
  lamp: <LampIcon />,
  setting: <SettingIcon />,
};

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.5 5.5L8 14L3.5 9.5"
      stroke="#1355ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TOTAL_ITEMS = SERVICE_CATEGORIES.reduce((sum, c) => sum + c.items.length, 0);

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Services", pathname: "/services" },
];

const scrollToContact = () => {
  if (typeof document === "undefined") return;
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: "smooth" });
  }
};

const ServicesIndexPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !pageRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-hero",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "transform",
        }
      );

      gsap.utils.toArray(".svc-category").forEach((section) => {
        gsap.fromTo(
          section.querySelector(".svc-category-header"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: section, start: "top 82%" },
          }
        );

        gsap.fromTo(
          section.querySelectorAll(".svc-card"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            clearProps: "transform",
            scrollTrigger: { trigger: section, start: "top 78%" },
          }
        );

        const chips = section.querySelectorAll(".svc-chip");
        if (chips.length) {
          gsap.fromTo(
            chips,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "power2.out",
              stagger: 0.04,
              clearProps: "transform",
              scrollTrigger: { trigger: section, start: "top 70%" },
            }
          );
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <PageHeader>
          <HeaderInner>
            <Eyebrow className="svc-hero">Services</Eyebrow>
            <Title className="svc-hero">How we help teams ship reliable software</Title>
            <Description className="svc-hero">
              From web and mobile applications to UI/UX, DevOps, and AI-ready data
              workflows—explore the full range of what we build and how we work.
            </Description>

            <StatRow className="svc-hero">
              <Stat>
                <StatNumber>{SERVICE_CATEGORIES.length}</StatNumber>
                <StatLabel>Focus Areas</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>{TOTAL_ITEMS}+</StatNumber>
                <StatLabel>Capabilities</StatLabel>
              </Stat>
              <Stat>
                <StatNumber>24h</StatNumber>
                <StatLabel>Response Time</StatLabel>
              </Stat>
            </StatRow>

            <HeaderCta type="button" onClick={scrollToContact}>
              Talk to an Expert
              <ArrowRightBlue style={{ filter: "brightness(0) invert(1)" }} />
            </HeaderCta>
          </HeaderInner>
        </PageHeader>

        <CategoryNav aria-label="Jump to a service category">
          {SERVICE_CATEGORIES.map((category) => (
            <CategoryNavLink key={category.slug} href={`#${category.slug}`}>
              {category.title}
            </CategoryNavLink>
          ))}
        </CategoryNav>

        {SERVICE_CATEGORIES.map((category, categoryIndex) => {
          const flagshipItems = category.items.filter((item) => item.type === "flagship");
          const capabilityItems = category.items.filter((item) => item.type === "capability");
          const mainItems = flagshipItems.length > 0 ? flagshipItems : capabilityItems;
          const chipItems = flagshipItems.length > 0 ? capabilityItems : [];

          return (
            <CategorySection key={category.slug} id={category.slug} className="svc-category">
              <CategoryHeader className="svc-category-header">
                <CategoryHeaderMain>
                  <CategoryIndex>{String(categoryIndex + 1).padStart(2, "0")}</CategoryIndex>
                  <CategoryIconWrap aria-hidden="true">
                    {CATEGORY_ICONS[category.icon]}
                  </CategoryIconWrap>
                  <div>
                    <CategoryTitle>{category.title}</CategoryTitle>
                    <CategoryDescription>{category.description}</CategoryDescription>
                  </div>
                </CategoryHeaderMain>

                {chipItems.length > 0 && (
                  <CategoryHeaderChips>
                    <ChipRow>
                      {chipItems.map((item) => (
                        <Chip key={item.label} className="svc-chip">
                          <ChipDot />
                          {item.label}
                        </Chip>
                      ))}
                    </ChipRow>
                  </CategoryHeaderChips>
                )}
              </CategoryHeader>

              <Grid>
                {mainItems.map((item) => {
                  const key = item.type === "flagship" ? item.route.slug : item.label;
                  const title = item.type === "flagship" ? item.route.label : item.label;
                  const description =
                    item.type === "flagship" ? item.route.intro : item.description;

                  return (
                    <Card key={key} className="svc-card">
                      <CardIconBadge>
                        <CheckIcon />
                      </CardIconBadge>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </Card>
                  );
                })}
              </Grid>
            </CategorySection>
          );
        })}

        <ContactSection>
          <ContactUs />
        </ContactSection>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesIndexPage;

export const Head = () => (
  <SEO
    title="Services - Arithmiks"
    description="Arithmiks services: web and mobile development, custom software, UI/UX design, DevOps, AI and data solutions, cloud infrastructure, and product engineering—built for scale and long-term maintainability."
    pathname="/services"
    breadcrumbItems={breadcrumbItems}
  />
);
