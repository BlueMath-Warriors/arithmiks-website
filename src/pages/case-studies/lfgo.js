import * as React from "react";
import { graphql } from "gatsby";
import Lfgo from "../../components/CaseStudy/Lfgo";
import { SEO } from "../../components/seo";

const LfgoPage = ({ data }) => {
  return <Lfgo images={data} />;
};

export default LfgoPage;

export const Head = () => (
  <SEO
    title={"LFGO - Arithmiks"}
    pathname="/case-studies/lfgo"
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
