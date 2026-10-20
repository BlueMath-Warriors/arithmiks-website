import React from "react";
import { Link } from "gatsby";

// A link target is an internal page, an off-site URL, or a page that does not
// exist yet (see constants/sitemap.js) — the last renders href="#" like the Footer does.
const SitemapAnchor = ({ destination, className, children }) => {
  if (destination.to) {
    return (
      <Link className={className} to={destination.to}>
        {children}
      </Link>
    );
  }
  if (destination.external) {
    return (
      <a className={className} href={destination.external} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <a className={className} href="#">
      {children}
    </a>
  );
};

export default SitemapAnchor;
