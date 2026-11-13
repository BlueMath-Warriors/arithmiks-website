import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/aiAgentsWorkflows";

const AiAgentsWorkflowsPage = () => <ServiceDetailPage content={content} />;

export default AiAgentsWorkflowsPage;

export const Head = () => <ServiceDetailHead slug="ai-agents-workflows" art={content.hero.art} />;
