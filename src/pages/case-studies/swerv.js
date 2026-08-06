import * as React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import Swerv from "../../components/CaseStudy/Swerv";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "swerv";
const pageSeo = getCaseStudySeo(slug);
const fallbackImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/swerv" },
];

const SwervPage = ({ data }) => {
  return <Swerv images={data} breadcrumbItems={breadcrumbItems} />;
};

export default SwervPage;

export const Head = ({ data }) => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={(data?.heroImage && getSrc(data.heroImage)) || fallbackImage}
    pathname="/case-studies/swerv"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "swervMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: NONE, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "swervFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: NONE, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
