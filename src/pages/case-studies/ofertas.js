import * as React from "react";
import { graphql } from "gatsby";
import Do from "../../components/CaseStudy/Do";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "ofertas";
const pageSeo = getCaseStudySeo(slug);

const OfertasPage = ({ data }) => {
  return <Do images={data} />;
};

export default OfertasPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/ofertas"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/ofertas" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "d&oMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "d&oFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
