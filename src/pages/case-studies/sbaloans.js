import * as React from "react";
import { graphql } from "gatsby";
import Sbaloans from "../../components/CaseStudy/Sbaloans";
import { SEO } from "../../components/seo";

const SbaloansPage = ({ data }) => {
  return <Sbaloans images={data} />;
};

export default SbaloansPage;

export const Head = () => (
  <SEO
    title={"sbaloansHQ - Arithmiks"}
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
