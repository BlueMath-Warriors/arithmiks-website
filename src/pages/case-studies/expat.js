import * as React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import Ehh from "../../components/CaseStudy/Ehh";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "expat";
const pageSeo = getCaseStudySeo(slug);
const fallbackImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/expat" },
];

const ExpatPage = ({ data }) => {
  return <Ehh images={data} breadcrumbItems={breadcrumbItems} />;
};

export default ExpatPage;

export const Head = ({ data }) => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={(data?.heroImage && getSrc(data.heroImage)) || fallbackImage}
    pathname="/case-studies/expat"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "ehhMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: NONE, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "ehhFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: NONE, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
