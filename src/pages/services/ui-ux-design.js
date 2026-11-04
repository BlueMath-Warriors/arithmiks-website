import * as React from "react";
import ServiceDetailPage from "../../components/ServiceDetail/ServiceDetailPage";
import ServiceDetailHead from "../../components/ServiceDetail/ServiceDetailHead";
import content from "../../components/ServiceDetail/content/uiUxDesign";

const UiUxDesignPage = () => <ServiceDetailPage content={content} />;

export default UiUxDesignPage;

export const Head = () => <ServiceDetailHead slug="ui-ux-design" art={content.hero.art} />;
