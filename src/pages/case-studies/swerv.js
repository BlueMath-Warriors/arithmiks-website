import * as React from "react";
import { graphql } from "gatsby";
import Swerv from "../../components/CaseStudy/Swerv";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "swerv";
const pageSeo = getCaseStudySeo(slug);

const SwervPage = ({ data }) => {
  return <Swerv images={data} />;
};

export default SwervPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/swerv"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/swerv" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "swervMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "swervFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
