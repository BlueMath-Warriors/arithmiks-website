import * as React from "react";
import Header from "../components/Landing/Header";
import SearchPage from "../components/SearchPage";
import Footer from "../components/Landing/Footer";
import { SEO } from "../components/seo";

const MAX_TERM_LENGTH = 100;

const readTerm = (search) =>
  (new URLSearchParams(search).get("q") ?? "").trim().slice(0, MAX_TERM_LENGTH);

const SearchRoute = ({ location }) => {
  const term = readTerm(location.search);
  return (
    <>
      <Header lightHero={true} />
      <main>
        <SearchPage key={term} term={term} />
      </main>
      <Footer />
    </>
  );
};

export default SearchRoute;

export const Head = () => (
  <SEO title="Search - Arithmiks" pathname="/search">
    <meta name="robots" content="noindex" />
  </SEO>
);
