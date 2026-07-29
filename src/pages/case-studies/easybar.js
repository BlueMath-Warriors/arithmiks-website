import * as React from "react";
import { graphql } from "gatsby";
import Easybar from "../../components/CaseStudy/Easybar";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "easybar";
const pageSeo = getCaseStudySeo(slug);
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/easybar" },
];

const EasybarPage = ({ data }) => <Easybar images={data} breadcrumbItems={breadcrumbItems} />;

export default EasybarPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    hideImage
    pathname="/case-studies/easybar"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "easybarMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "easybarFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
