import * as React from "react";
import ServicePage from "../../components/ServicePage";
import { SEO } from "../../components/seo";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "mobile-app-development";
const service = getServiceBySlug(slug);

const MobileAppDevelopmentPage = () => (
  <ServicePage headline={service.headline} intro={service.intro} />
);

export default MobileAppDevelopmentPage;

export const Head = () => (
  <SEO
    title={service.seoTitle}
    description={service.seoDescription}
    pathname={servicePath(slug)}
  />
);
