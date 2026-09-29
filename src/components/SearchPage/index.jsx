import React, { useMemo, useState } from "react";
import { navigate } from "gatsby";
import { buildSearchIndex, searchSite } from "../../constants/searchIndex";
import SearchField from "../Landing/Header/SearchOverlay/SearchField";
import SearchResultsList, { Empty } from "../Landing/Header/SearchResultsList";
import { Section, Shell, Eyebrow, Title, Count, Results, Hint, FieldBox } from "./index.styled";

/**
 * Full results page for a submitted search. `term` comes from the URL, so a
 * results page can be shared or reloaded; the input is a fresh draft that
 * replaces it on submit.
 *
 * @param {{ term: string }} props
 */
const SearchPage = ({ term }) => {
  const [draft, setDraft] = useState(term);
  const index = useMemo(buildSearchIndex, []);
  const results = useMemo(() => searchSite(index, term, Infinity), [index, term]);
  const hasTerm = term.length > 0;

  const submitSearch = () => {
    const next = draft.trim();
    if (!next || next === term) return;
    navigate(`/search?q=${encodeURIComponent(next)}`);
  };

  return (
    <Section aria-labelledby="search-heading">
      <Shell>
        <Eyebrow>Search results</Eyebrow>
        <Title id="search-heading">
          {hasTerm ? `Search results: “${term}”` : "Search Arithmiks"}
          {hasTerm && results.length > 0 && <Count>({results.length})</Count>}
        </Title>

        <FieldBox>
          <SearchField value={draft} onChange={setDraft} onSubmit={submitSearch} />
        </FieldBox>

        {!hasTerm && <Hint>Search services, case studies, products and pages.</Hint>}

        {hasTerm && results.length > 0 && (
          <Results>
            <SearchResultsList results={results} term={term} />
          </Results>
        )}

        {hasTerm && results.length === 0 && (
          <Empty>
            <span>No matches</span>
            <span>Try a service name, a client, or a topic like &quot;AI audit&quot;.</span>
          </Empty>
        )}
      </Shell>
    </Section>
  );
};

export default SearchPage;
