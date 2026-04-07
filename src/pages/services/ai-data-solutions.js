import * as React from "react";
import ServicePage from "../../components/ServicePage";
import { SEO } from "../../components/seo";
import { getServiceBySlug, servicePath } from "../../constants/serviceRoutes";

const slug = "ai-data-solutions";
const service = getServiceBySlug(slug);

const AiDataSolutionsPage = () => (
  <ServicePage headline={service.headline} intro={service.intro} />
);

export default AiDataSolutionsPage;

export const Head = () => (
  <SEO
    title={service.seoTitle}
    description={service.seoDescription}
    pathname={servicePath(slug)}
  />
);
