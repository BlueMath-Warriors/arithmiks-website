import * as React from "react";
import { graphql } from "gatsby";
import Togather from "../../components/CaseStudy/Togather";
import { SEO } from "../../components/seo";

const TogatherPage = ({ data }) => {
  return <Togather images={data} />;
};

export default TogatherPage;

export const Head = () => <SEO title={"Togather - Arithmiks"} pathname="/case-studies/togather" />;

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "togatherMemorandum.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "togatherFinancialSummary.png" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
