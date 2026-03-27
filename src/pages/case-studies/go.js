import * as React from "react";
import { graphql } from "gatsby";
import Go from "../../components/CaseStudy/Go";
import { SEO } from "../../components/seo";

const GoPage = ({ data }) => {
  return <Go images={data} />;
};

export default GoPage;

export const Head = () => <SEO title={"GO - Arithmiks"} pathname="/case-studies/go" />;

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "goMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "goFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
