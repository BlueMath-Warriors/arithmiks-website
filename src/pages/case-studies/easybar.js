import * as React from "react";
import { graphql } from "gatsby";
import Easybar from "../../components/CaseStudy/Easybar";
import { SEO } from "../../components/seo";

const EasybarPage = ({ data }) => <Easybar images={data} />;

export default EasybarPage;

export const Head = () => <SEO title={"Easybar - Arithmiks"} pathname="/case-studies/easybar" />;

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "easybarMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "easybarFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
