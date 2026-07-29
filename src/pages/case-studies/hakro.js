import * as React from "react";
import { graphql } from "gatsby";
import Hakro from "../../components/CaseStudy/Hakro";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "hakro";
const pageSeo = getCaseStudySeo(slug);
const pageImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/hakro" },
];

const HakroPage = ({ data }) => {
  return <Hakro images={data} breadcrumbItems={breadcrumbItems} />;
};

export default HakroPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={pageImage}
    pathname="/case-studies/hakro"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "hakroMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "hakroFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
