import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/aiDiscoveryStrategyRoadmap";

const AiDiscoveryStrategyRoadmapPage = () => <ServiceDetailPage content={content} />;

export default AiDiscoveryStrategyRoadmapPage;

export const Head = () => (
  <ServiceDetailHead slug="ai-discovery-strategy-roadmap" art={content.hero.art} />
);
