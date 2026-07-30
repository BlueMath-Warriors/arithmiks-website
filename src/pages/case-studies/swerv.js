import * as React from "react";
import { graphql } from "gatsby";
import Swerv from "../../components/CaseStudy/Swerv";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "swerv";
const pageSeo = getCaseStudySeo(slug);
const pageImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/swerv" },
];

const SwervPage = ({ data }) => {
  return <Swerv images={data} breadcrumbItems={breadcrumbItems} />;
};

export default SwervPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={pageImage}
    pathname="/case-studies/swerv"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "swervMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "swervFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
