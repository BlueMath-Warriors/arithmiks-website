import * as React from "react";
import { graphql } from "gatsby";
import Togather from "../../components/CaseStudy/Togather";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "togather";
const pageSeo = getCaseStudySeo(slug);
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/togather" },
];

const TogatherPage = ({ data }) => {
  return <Togather images={data} breadcrumbItems={breadcrumbItems} />;
};

export default TogatherPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    hideImage
    pathname="/case-studies/togather"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "togatherMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "togatherFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
