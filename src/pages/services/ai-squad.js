import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/aiSquad";

const AiSquadPage = () => <ServiceDetailPage content={content} />;

export default AiSquadPage;

export const Head = () => <ServiceDetailHead slug="ai-squad" art={content.hero.art} />;
