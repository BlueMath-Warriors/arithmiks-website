import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/devops";

const DevopsPage = () => <ServiceDetailPage content={content} />;

export default DevopsPage;

export const Head = () => <ServiceDetailHead slug="devops" art={content.hero.art} />;
