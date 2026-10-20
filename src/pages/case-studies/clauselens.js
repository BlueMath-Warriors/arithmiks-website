import * as React from "react";
import ClauseLens from "../../components/CaseStudy/ClauseLens";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "clauselens";
const pageSeo = getCaseStudySeo(slug);
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/clauselens" },
];

const ClauseLensPage = () => <ClauseLens />;

export default ClauseLensPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/clauselens"
    breadcrumbItems={breadcrumbItems}
  />
);
