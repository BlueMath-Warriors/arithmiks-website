import * as React from "react";
import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import Togather from "../../components/CaseStudy/Togather";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "togather";
const pageSeo = getCaseStudySeo(slug);
const fallbackImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/togather" },
];

const TogatherPage = ({ data }) => {
  return <Togather images={data} breadcrumbItems={breadcrumbItems} />;
};

export default TogatherPage;

export const Head = ({ data }) => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={(data?.heroImage && getSrc(data.heroImage)) || fallbackImage}
    pathname="/case-studies/togather"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "togatherMemorandum.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: NONE, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
    overviewImage: file(relativePath: { eq: "togatherFinancialSummary.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 929, placeholder: NONE, formats: [AUTO, WEBP, AVIF], quality: 85)
      }
    }
  }
`;
