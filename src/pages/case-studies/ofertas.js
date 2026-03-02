import * as React from "react";
import { graphql } from "gatsby";
import Do from "../../components/CaseStudy/Do";
import { SEO } from "../../components/seo";

const OfertasPage = ({ data }) => {
  return <Do images={data} />;
};

export default OfertasPage;

export const Head = () => <SEO title={"Ofertas - Arithmiks"} />;

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
