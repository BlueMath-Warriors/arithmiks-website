import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { navigate } from "gatsby";
import { buildSearchIndex, searchSite } from "../../../../constants/searchIndex";
import SearchResultsList, { Meta, Empty } from "../SearchResultsList";
import SearchField from "./SearchField";
import { Wrap, Scrim, Sheet, Shell } from "./index.styled";

// Matches the design's data-searchwrap: a scrim + sheet dropped from the
// header, with results ranked and filtered live as the visitor types (see
// searchIndex.js for the ranking rule); submitting opens the full /search page.
const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [headerHeight, setHeaderHeight] = useState(0);
  const inputRef = useRef(null);
  const index = useMemo(buildSearchIndex, []);
  const results = useMemo(() => searchSite(index, query), [index, query]);
  const hasQuery = query.trim().length > 0;

  const submitSearch = () => {
    if (!hasQuery) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    onClose();
  };

  useEffect(() => {
    const measure = () => {
      const header = document.querySelector("header");
      if (header) setHeaderHeight(header.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener("resize", measure);

    const timer = setTimeout(() => inputRef.current?.focus(), 60);
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <Wrap $top={headerHeight} role="dialog" aria-modal="true" aria-label="Site search">
      <Scrim onClick={onClose} />
      <Sheet>
        <Shell>
          <SearchField
            value={query}
            onChange={setQuery}
            onSubmit={submitSearch}
            inputRef={inputRef}
          />

          {hasQuery && results.length > 0 && (
            <Meta>
              <span>Search results</span>
              <span>({results.length})</span>
            </Meta>
          )}

          {hasQuery && results.length > 0 && (
            <SearchResultsList results={results} onNavigate={onClose} />
          )}

          {hasQuery && results.length === 0 && (
            <Empty>
              <span>No matches</span>
              <span>Try a service name, a client, or a topic like &quot;AI audit&quot;.</span>
            </Empty>
          )}
        </Shell>
      </Sheet>
    </Wrap>,
    document.body
  );
};

export default SearchOverlay;
