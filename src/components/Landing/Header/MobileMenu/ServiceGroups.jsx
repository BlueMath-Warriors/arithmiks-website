import React, { useState } from "react";
import AccordionChevron from "./AccordionChevron";
import { GroupButton, GroupPanel, SubLink, PlainArrow } from "./index.styled";

/**
 * The Services accordion's body: one row per service group that opens to that
 * group's services, one group open at a time.
 *
 * @param {{ groups: { slug: string, title: string,
 *   items: { slug: string, label: string, url: string, hasPage: boolean }[] }[],
 *   onNavigate: () => void }} props
 */
const ServiceGroups = ({ groups, onNavigate }) => {
  const [openSlug, setOpenSlug] = useState(null);

  return groups.map((group) => {
    const isOpen = openSlug === group.slug;
    const panelId = `mobile-services-${group.slug}`;
    return (
      <React.Fragment key={group.slug}>
        <GroupButton
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenSlug(isOpen ? null : group.slug)}
        >
          {group.title}
          <AccordionChevron open={isOpen} />
        </GroupButton>
        <GroupPanel id={panelId} $open={isOpen}>
          {group.items.map((service) =>
            // Services with no page yet keep a "#" placeholder, as in the desktop menu.
            service.hasPage ? (
              <SubLink key={service.slug} to={service.url} onClick={onNavigate}>
                <span>{service.label}</span>
                <PlainArrow aria-hidden="true">→</PlainArrow>
              </SubLink>
            ) : (
              <SubLink key={service.slug} as="a" href="#" onClick={onNavigate}>
                <span>{service.label}</span>
                <PlainArrow aria-hidden="true">→</PlainArrow>
              </SubLink>
            ),
          )}
        </GroupPanel>
      </React.Fragment>
    );
  });
};

export default ServiceGroups;
