import * as React from "react";
import * as containerStyles from "../styles/global.module.css";
import Header from "../components/Landing/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import BlogGrid from "../components/Blog/BlogGrid";
import BookingFlow from "../components/Landing/Contact-Us/Booking-Flow";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Blog", pathname: "/blogs" },
];

const BlogsPage = () => {
  return (
    <>
      <div className={containerStyles.header_div}>
        <Header white={true} fixed={true} />
      </div>
      <Breadcrumbs items={breadcrumbItems} />
      <main>
        <BlogGrid titleAs="h1" />
        <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;

export const Head = () => (
  <SEO
    title="Blog - Arithmiks"
    description="Engineering, product, and delivery insights from the team building custom software at Arithmiks."
    pathname="/blogs"
    breadcrumbItems={breadcrumbItems}
  />
);
