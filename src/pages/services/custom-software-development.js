import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/customSoftwareDevelopment";

const CustomSoftwareDevelopmentPage = () => <ServiceDetailPage content={content} />;

export default CustomSoftwareDevelopmentPage;

export const Head = () => (
  <ServiceDetailHead slug="custom-software-development" art={content.hero.art} />
);
