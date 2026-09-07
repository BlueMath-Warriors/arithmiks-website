import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { SERVICE_NAV_GROUPS } from "../../../../constants/serviceNavGroups";
import { PRODUCTS } from "../../../../constants/products";
import { buildSearchIndex, searchSite } from "../../../../constants/searchIndex";
import SearchResultsList, { Meta, Empty } from "../SearchResultsList";
import {
  Wrap,
  TopBar,
  LogoLink,
  CloseButton,
  Scroll,
  SearchForm,
  SearchInput,
  Nav,
  AccButton,
  TopLink,
  Chevron,
  PlainArrow,
  AccPanel,
  ItemLink,
  AllLink,
  BottomBar,
  CtaLink,
} from "./index.styled";
import logoMark from "../../../../images/favicon.png";

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "How we work", to: "#" },
  { label: "Arithmiks Blog", to: "/blogs" },
  { label: "Careers", to: "#" },
  { label: "Contact", to: "/contact" },
];

const AccordionChevron = ({ open }) => (
  <Chevron
    $open={open}
    viewBox="0 0 16 16"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m4 6 4 4 4-4" />
  </Chevron>
);

// Full-screen takeover, matching the design's own [data-menu] — a separate
// layer with its own header row, not a panel hung off the main Headerr.
// Rendered through a portal for the same reason SearchOverlay is: Headerr
// always carries an active transform (even translateY(0) for the
// hide-on-scroll behaviour), which makes it a containing block for any
// position:fixed descendant and breaks a plain nested drawer's sizing.
const MobileMenu = ({ onClose }) => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [query, setQuery] = useState("");
  const index = useMemo(buildSearchIndex, []);
  const results = useMemo(() => searchSite(index, query), [index, query]);
  const isSearching = query.trim().length > 0;

  const toggleAccordion = (key) =>
    setOpenAccordion((current) => (current === key ? null : key));

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <Wrap role="dialog" aria-modal="true" aria-label="Mobile menu">
      <TopBar>
        <LogoLink to="/" onClick={onClose} aria-label="Go to homepage">
          <img src={logoMark} alt="" />
          <span>Arithmiks</span>
        </LogoLink>
        <CloseButton aria-label="Close menu" onClick={onClose}>
          <svg viewBox="0 0 22 22" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l12 12M17 5L5 17" />
          </svg>
        </CloseButton>
      </TopBar>

      <Scroll>
        <SearchForm onSubmit={(e) => e.preventDefault()}>
          <svg viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#5C6478" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="8.6" cy="8.6" r="5.4" />
            <path d="m12.8 12.8 4 4" />
          </svg>
          <SearchInput
            type="search"
            placeholder="Search services, work, pages"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchForm>

        {isSearching ? (
          results.length > 0 ? (
            <>
              <Meta>
                <span>Search results</span>
                <span>({results.length})</span>
              </Meta>
              <SearchResultsList results={results} onNavigate={onClose} />
            </>
          ) : (
            <Empty>
              <span>No matches</span>
              <span>Try a service name, a client, or a topic like &quot;AI audit&quot;.</span>
            </Empty>
          )
        ) : (
          <Nav aria-label="Mobile">
            <AccButton
              type="button"
              aria-expanded={openAccordion === "services"}
              onClick={() => toggleAccordion("services")}
            >
              Services <AccordionChevron open={openAccordion === "services"} />
            </AccButton>
            <AccPanel $open={openAccordion === "services"}>
              {SERVICE_NAV_GROUPS.map((category) => (
                <ItemLink
                  key={category.slug}
                  to={category.hasPage ? category.url : "#"}
                  onClick={onClose}
                >
                  <span>{category.title}</span>
                  <PlainArrow aria-hidden="true">→</PlainArrow>
                </ItemLink>
              ))}
              <AllLink to="/services" onClick={onClose}>
                All services <span aria-hidden="true">→</span>
              </AllLink>
            </AccPanel>

            <AccButton
              type="button"
              aria-expanded={openAccordion === "products"}
              onClick={() => toggleAccordion("products")}
            >
              Our Products <AccordionChevron open={openAccordion === "products"} />
            </AccButton>
            <AccPanel $open={openAccordion === "products"}>
              {PRODUCTS.map((product) => (
                <ItemLink key={product.name} as="a" href={product.url} onClick={onClose}>
                  <span>{product.name}</span>
                  <PlainArrow aria-hidden="true">→</PlainArrow>
                </ItemLink>
              ))}
            </AccPanel>

            <TopLink to="/case-studies" onClick={onClose}>
              Case Studies <PlainArrow aria-hidden="true">→</PlainArrow>
            </TopLink>

            <AccButton
              type="button"
              aria-expanded={openAccordion === "company"}
              onClick={() => toggleAccordion("company")}
            >
              Company <AccordionChevron open={openAccordion === "company"} />
            </AccButton>
            <AccPanel $open={openAccordion === "company"}>
              {COMPANY_LINKS.map((link) =>
                link.to === "#" ? (
                  <ItemLink key={link.label} as="a" href="#" onClick={onClose}>
                    <span>{link.label}</span>
                    <PlainArrow aria-hidden="true">→</PlainArrow>
                  </ItemLink>
                ) : (
                  <ItemLink key={link.label} to={link.to} onClick={onClose}>
                    <span>{link.label}</span>
                    <PlainArrow aria-hidden="true">→</PlainArrow>
                  </ItemLink>
                )
              )}
            </AccPanel>
          </Nav>
        )}
      </Scroll>

      <BottomBar>
        <CtaLink to="/contact" onClick={onClose}>
          Book Free Consultation <span aria-hidden="true">→</span>
        </CtaLink>
      </BottomBar>
    </Wrap>,
    document.body
  );
};

export default MobileMenu;
