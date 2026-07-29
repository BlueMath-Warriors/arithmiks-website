import * as React from "react";
import Header from "../../components/Landing/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactUs from "../../components/Landing/Contact-Us";
import Footer from "../../components/Landing/Footer";
import * as containerStyles from "../../styles/global.module.css";
import { SEO } from "../../components/seo";
import { SERVICE_ROUTES, servicePath } from "../../constants/serviceRoutes";
import {
  PageHeader,
  Eyebrow,
  Title,
  Description,
  Grid,
  Card,
  CardTitle,
  CardDescription,
  CardCta,
  ContactSection,
} from "../../components/ServicesIndex/index.styled";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Services", pathname: "/services" },
];

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
          what we build and how we work.
        </Description>
      </PageHeader>

      <Grid>
        {SERVICE_ROUTES.map((service) => (
          <Card key={service.slug} to={servicePath(service.slug)}>
            <CardTitle>{service.label}</CardTitle>
            <CardDescription>{service.intro}</CardDescription>
            <CardCta>Learn more →</CardCta>
          </Card>
        ))}
      </Grid>

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
    description="Arithmiks services: web and mobile development, custom software, UI/UX design, DevOps, and AI and data solutions—built for scale and long-term maintainability."
    pathname="/services"
    breadcrumbItems={breadcrumbItems}
  />
);
