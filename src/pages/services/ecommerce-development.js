import * as React from "react";
import ServicePage from "../../components/ServicePage";
import { SEO } from "../../components/seo";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "ecommerce-development";
const service = getServiceBySlug(slug);
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Services", pathname: "/services" },
  { name: service.label, pathname: servicePath(slug) },
];

const EcommerceDevelopmentPage = () => (
  <ServicePage headline={service.headline} intro={service.intro} breadcrumbItems={breadcrumbItems} />
);

export default EcommerceDevelopmentPage;

export const Head = () => (
  <SEO
    title={service.seoTitle}
    description={service.seoDescription}
    pathname={servicePath(slug)}
    breadcrumbItems={breadcrumbItems}
  />
);
