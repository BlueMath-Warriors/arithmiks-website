import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { buildSearchIndex, searchSite } from "../../../../constants/searchIndex";
import SearchResultsList, { Meta, Empty } from "../SearchResultsList";
import { Wrap, Scrim, Sheet, Shell, InputRow, FieldWrap, Input, GoButton } from "./index.styled";

// Matches the design's data-searchwrap: a scrim + sheet dropped from the
// header, with results ranked and filtered live as the visitor types (see
// searchIndex.js for the ranking rule) rather than submitting to a
// dedicated results page, which this site doesn't have.
const SearchOverlay = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [headerHeight, setHeaderHeight] = useState(0);
  const inputRef = useRef(null);
  const index = useMemo(buildSearchIndex, []);
  const results = useMemo(() => searchSite(index, query), [index, query]);
  const hasQuery = query.trim().length > 0;

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
          <InputRow>
            <FieldWrap>
              <svg
                viewBox="0 0 20 20"
                width="18"
                height="18"
                fill="none"
                stroke="#5C6478"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="8.8" cy="8.8" r="5.3" />
                <path d="m12.7 12.7 4 4" />
              </svg>
              <Input
                ref={inputRef}
                type="search"
                aria-label="Search Arithmiks"
                placeholder="Search services, case studies, resources…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </FieldWrap>
            <GoButton type="button" onClick={() => inputRef.current?.focus()}>
              <svg
                viewBox="0 0 20 20"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="8.8" cy="8.8" r="5.3" />
                <path d="m12.7 12.7 4 4" />
              </svg>
              Search
            </GoButton>
          </InputRow>

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
