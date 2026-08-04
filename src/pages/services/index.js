import * as React from "react";
import Header from "../../components/Landing/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactUs from "../../components/Landing/Contact-Us";
import Footer from "../../components/Landing/Footer";
import * as containerStyles from "../../styles/global.module.css";
import { SEO } from "../../components/seo";
import { servicePath } from "../../constants/serviceRoutes";
import { SERVICE_CATEGORIES } from "../../constants/serviceCategories";
import CodeCircle from "../../images/code-circle.svg";
import CpuIcon from "../../images/cpu-icon.svg";
import LampIcon from "../../images/lamp-icon.svg";
import SettingIcon from "../../images/setting-icon.svg";
import ArrowRightBlue from "../../images/arrow-right-blue.svg";
import {
  PageHeader,
  Eyebrow,
  Title,
  Description,
  CategoryNav,
  CategoryNavLink,
  CategorySection,
  CategoryHeader,
  CategoryIconWrap,
  CategoryTitle,
  CategoryDescription,
  Grid,
  Card,
  CardTitle,
  CardDescription,
  CardCta,
  CapabilityCard,
  ContactSection,
} from "../../components/ServicesIndex/index.styled";

const CATEGORY_ICONS = {
  code: <CodeCircle />,
  cpu: <CpuIcon />,
  lamp: <LampIcon />,
  setting: <SettingIcon />,
};

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

const ServicesIndexPage = () => (
  <>
    <div className={containerStyles.header_div}>
      <Header white={true} fixed={true} />
    </div>
    <Breadcrumbs items={breadcrumbItems} />
    <main>
      <PageHeader>
        <Eyebrow>Services</Eyebrow>
        <Title>How we help teams ship reliable software</Title>
        <Description>
          From web and mobile applications to UI/UX, DevOps, and AI-ready data workflows—explore
          the full range of what we build and how we work.
        </Description>
      </PageHeader>

      <CategoryNav aria-label="Jump to a service category">
        {SERVICE_CATEGORIES.map((category) => (
          <CategoryNavLink key={category.slug} href={`#${category.slug}`}>
            {category.title}
          </CategoryNavLink>
        ))}
      </CategoryNav>

      {SERVICE_CATEGORIES.map((category) => (
        <CategorySection key={category.slug} id={category.slug}>
          <CategoryHeader>
            <CategoryIconWrap aria-hidden="true">
              {CATEGORY_ICONS[category.icon]}
            </CategoryIconWrap>
            <div>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
            </div>
          </CategoryHeader>

          <Grid>
            {category.items.map((item) =>
              item.type === "flagship" ? (
                <Card key={item.route.slug} to={servicePath(item.route.slug)}>
                  <CardTitle>{item.route.label}</CardTitle>
                  <CardDescription>{item.route.intro}</CardDescription>
                  <CardCta>
                    Learn more <ArrowRightBlue />
                  </CardCta>
                </Card>
              ) : (
                <CapabilityCard
                  key={item.label}
                  type="button"
                  onClick={scrollToContact}
                >
                  <CardTitle>{item.label}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <CardCta>
                    Let's talk <ArrowRightBlue />
                  </CardCta>
                </CapabilityCard>
              )
            )}
          </Grid>
        </CategorySection>
      ))}

      <ContactSection>
        <ContactUs />
      </ContactSection>
    </main>
    <Footer />
  </>
);

export default ServicesIndexPage;

export const Head = () => (
  <SEO
    title="Services - Arithmiks"
    description="Arithmiks services: web and mobile development, custom software, UI/UX design, DevOps, AI and data solutions, cloud infrastructure, and product engineering—built for scale and long-term maintainability."
    pathname="/services"
    breadcrumbItems={breadcrumbItems}
  />
);
