import * as React from "react";
import { graphql } from "gatsby";
import Qareeb from "../../components/CaseStudy/Qareeb";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";

const slug = "qareeb";
const pageSeo = getCaseStudySeo(slug);

const QareebPage = ({ data }) => {
  return <Qareeb images={data} />;
};

export default QareebPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    pathname="/case-studies/qareeb"
    breadcrumbItems={[
      { name: "Home", pathname: "/" },
      { name: "Case Studies", pathname: "/case-studies" },
      { name: pageSeo.breadcrumbName, pathname: "/case-studies/qareeb" },
    ]}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "qareebHero.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 929
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 85
        )
      }
    }
    overviewImage: file(relativePath: { eq: "qareebOverview.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 929
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 85
        )
      }
    }
  }
`;
