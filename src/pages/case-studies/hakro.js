import * as React from "react";
import { graphql } from "gatsby";
import Hakro from "../../components/CaseStudy/Hakro";
import { SEO } from "../../components/seo";

const HakroPage = ({ data }) => {
  return <Hakro images={data} />;
};

export default HakroPage;

export const Head = () => <SEO title={"Hakro - Arithmiks"} pathname="/case-studies/hakro" />;

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
