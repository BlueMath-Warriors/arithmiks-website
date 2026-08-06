import * as React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import Quanta from "../../components/CaseStudy/Quanta";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "quanta";
const pageSeo = getCaseStudySeo(slug);
const fallbackImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/quanta" },
];

const QuantaPage = ({ data }) => {
  return <Quanta images={data} breadcrumbItems={breadcrumbItems} />;
};

export default QuantaPage;

export const Head = ({ data }) => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={(data?.heroImage && getSrc(data.heroImage)) || fallbackImage}
    pathname="/case-studies/quanta"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "quantaHero.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 929
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 85
        )
      }
    }
    overviewImage: file(relativePath: { eq: "quantaOverview.webp" }) {
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
