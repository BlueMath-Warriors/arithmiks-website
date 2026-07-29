import * as React from "react";
import { graphql } from "gatsby";
import Lfgo from "../../components/CaseStudy/Lfgo";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "lfgo";
const pageSeo = getCaseStudySeo(slug);
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/lfgo" },
];

const LfgoPage = ({ data }) => {
  return <Lfgo images={data} breadcrumbItems={breadcrumbItems} />;
};

export default LfgoPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    hideImage
    pathname="/case-studies/lfgo"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "lfgoMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "lfgoFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
