import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/aiMvpDevelopment";

const AiMvpDevelopmentPage = () => <ServiceDetailPage content={content} />;

export default AiMvpDevelopmentPage;

export const Head = () => <ServiceDetailHead slug="ai-mvp-development" art={content.hero.art} />;
