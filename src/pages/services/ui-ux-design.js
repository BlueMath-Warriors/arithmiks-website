import * as React from "react";
import ServicePage from "../../components/ServicePage";
import { SEO } from "../../components/seo";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "ui-ux-design";
const service = getServiceBySlug(slug);

const UiUxDesignPage = () => (
  <ServicePage headline={service.headline} intro={service.intro} />
);

export default UiUxDesignPage;

export const Head = () => (
  <SEO
    title={service.seoTitle}
    description={service.seoDescription}
    pathname={servicePath(slug)}
  />
);
