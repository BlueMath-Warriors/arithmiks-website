import * as React from "react";
import { graphql } from "gatsby";
import Qareeb from "../../components/CaseStudy/Qareeb";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "qareeb";
const pageSeo = getCaseStudySeo(slug);
const pageImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/qareeb" },
];

const QareebPage = ({ data }) => {
  return <Qareeb images={data} breadcrumbItems={breadcrumbItems} />;
};

export default QareebPage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={pageImage}
    pathname="/case-studies/qareeb"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "qareebHero.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 929
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 85
        )
      }
    }
    overviewImage: file(relativePath: { eq: "qareebOverview.webp" }) {
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
