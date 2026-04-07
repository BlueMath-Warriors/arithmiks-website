import * as React from "react";
import { graphql } from "gatsby";
import Togather from "../../components/CaseStudy/Togather";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "togather";
const pageSeo = getCaseStudySeo(slug);

const TogatherPage = ({ data }) => {
  return <Togather images={data} />;
};

export default TogatherPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/togather"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/togather" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "togatherMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "togatherFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
