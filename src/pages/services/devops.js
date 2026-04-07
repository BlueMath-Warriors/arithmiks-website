import * as React from "react";
import ServicePage from "../../components/ServicePage";
import { SEO } from "../../components/seo";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "devops";
const service = getServiceBySlug(slug);

const DevopsPage = () => (
  <ServicePage headline={service.headline} intro={service.intro} />
);

export default DevopsPage;

export const Head = () => (
  <SEO
    title={service.seoTitle}
    description={service.seoDescription}
    pathname={servicePath(slug)}
  />
);
