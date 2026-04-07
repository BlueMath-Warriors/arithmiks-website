import * as React from "react";
import ServicePage from "../../components/ServicePage";
import { SEO } from "../../components/seo";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "custom-software-development";
const service = getServiceBySlug(slug);

const CustomSoftwareDevelopmentPage = () => (
  <ServicePage headline={service.headline} intro={service.intro} />
);

export default CustomSoftwareDevelopmentPage;

export const Head = () => (
  <SEO
    title={service.seoTitle}
    description={service.seoDescription}
    pathname={servicePath(slug)}
  />
);
