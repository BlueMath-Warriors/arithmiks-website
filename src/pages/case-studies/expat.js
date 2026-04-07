import * as React from "react";
import { graphql } from "gatsby";
import Ehh from "../../components/CaseStudy/Ehh";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "expat";
const pageSeo = getCaseStudySeo(slug);

const ExpatPage = ({ data }) => {
  return <Ehh images={data} />;
};

export default ExpatPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/expat"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/expat" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "ehhMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "ehhFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
