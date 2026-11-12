import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/oneProblemAutomation";

const OneProblemAutomationPage = () => <ServiceDetailPage content={content} />;

export default OneProblemAutomationPage;

export const Head = () => (
  <ServiceDetailHead slug="one-problem-automation" art={content.hero.art} />
);
