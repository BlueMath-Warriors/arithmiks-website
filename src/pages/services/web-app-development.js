import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/webAppDevelopment";

const WebAppDevelopmentPage = () => <ServiceDetailPage content={content} />;

export default WebAppDevelopmentPage;

export const Head = () => <ServiceDetailHead slug="web-app-development" art={content.hero.art} />;
