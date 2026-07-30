import * as React from "react";
import { graphql } from "gatsby";
import MrSellerNote from "../../components/CaseStudy/MrSellerNote";
import { SEO } from "../../components/seo";
import { getCaseStudySeo } from "../../constants/caseStudySeo";
import { caseStudies } from "../../components/Landing/Case-Study/caseStudies";

const slug = "mrsellernote";
const pageSeo = getCaseStudySeo(slug);
const pageImage = caseStudies.find((cs) => cs.slug === slug)?.dashboardImg;
const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Case Studies", pathname: "/case-studies" },
  { name: pageSeo.breadcrumbName, pathname: "/case-studies/mrsellernote" },
];

const MrSellerNotePage = ({ data }) => {
  return <MrSellerNote images={data} breadcrumbItems={breadcrumbItems} />;
};

export default MrSellerNotePage;

export const Head = () => (
  <SEO
    title={pageSeo.title}
    description={pageSeo.description}
    image={pageImage}
    pathname="/case-studies/mrsellernote"
    breadcrumbItems={breadcrumbItems}
  />
);

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "msnHero.webp" }) {
      childImageSharp {
        gatsbyImageData(
          width: 929
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 85
        )
      }
    }
    overviewImage: file(relativePath: { eq: "msnOverview.webp" }) {
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
