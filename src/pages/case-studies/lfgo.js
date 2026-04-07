import * as React from "react";
import { graphql } from "gatsby";
import Lfgo from "../../components/CaseStudy/Lfgo";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "lfgo";
const pageSeo = getCaseStudySeo(slug);

const LfgoPage = ({ data }) => {
  return <Lfgo images={data} />;
};

export default LfgoPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/lfgo"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/lfgo" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "lfgoMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "lfgoFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
