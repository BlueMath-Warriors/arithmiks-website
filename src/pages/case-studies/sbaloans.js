import * as React from "react";
import { graphql } from "gatsby";
import Sbaloans from "../../components/CaseStudy/Sbaloans";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "sbaloans";
const pageSeo = getCaseStudySeo(slug);

const SbaloansPage = ({ data }) => {
  return <Sbaloans images={data} />;
};

export default SbaloansPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/sbaloans"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/sbaloans" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "sbaloansMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "sbaloansFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
