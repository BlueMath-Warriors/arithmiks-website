import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/mobileAppDevelopment";

const MobileAppDevelopmentPage = () => <ServiceDetailPage content={content} />;

export default MobileAppDevelopmentPage;

export const Head = () => <ServiceDetailHead slug="mobile-app-development" art={content.hero.art} />;
