import React from "react";
import { Link } from "gatsby";
import {
  Row,
  Toggle,
  Num,
  TitleWrap,
  Title,
  Chevron,
  Panel,
  PanelClip,
  PanelBody,
  Desc,
  TagsBlock,
  TagsLabel,
  TagList,
  Tag,
  Actions,
  ExploreCta,
  RelatedLink,
} from "./index.styled";

/**
 * One capability in the /services accordion. Open state is controlled by the
 * page so only one row across all four groups can be open at a time.
 *
 * @param {{
 *   capability: object;
 *   number: string;
 *   open: boolean;
 *   activeGroup: boolean;
 *   onToggle: () => void;
 *   relatedCaseStudy: { slug: string, label: string } | null;
 * }} props
 */
const CapabilityRow = ({
  capability,
  number,
  open,
  activeGroup,
  onToggle,
  relatedCaseStudy,
}) => {
  const panelId = `svc-panel-${capability.slug}`;

  return (
    <Row $open={open}>
      <Toggle
        type="button"
        $open={open}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <Num $activeGroup={activeGroup}>{number}</Num>
        <TitleWrap>
          <Title>{capability.label}</Title>
        </TitleWrap>
        <Chevron $open={open} aria-hidden="true">
          +
        </Chevron>
      </Toggle>

      <Panel id={panelId} $open={open} role="region" aria-label={capability.label}>
        <PanelClip>
          <PanelBody>
            <Desc>{capability.desc}</Desc>

            <TagsBlock>
              <TagsLabel>WHAT YOU GET</TagsLabel>
              <TagList>
                {capability.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </TagsBlock>

            <Actions>
              {/* The twelve capabilities without a page yet resolve to "#" — see
                  serviceCategories.js. */}
              {capability.hasPage ? (
                <ExploreCta as={Link} to={capability.url} tabIndex={open ? 0 : -1}>
                  Explore {capability.label} <span aria-hidden="true">→</span>
                </ExploreCta>
              ) : (
                <ExploreCta href="#" tabIndex={open ? 0 : -1}>
                  Explore {capability.label} <span aria-hidden="true">→</span>
                </ExploreCta>
              )}

              {relatedCaseStudy && (
                <RelatedLink
                  as={Link}
                  to={`/case-studies/${relatedCaseStudy.slug}`}
                  tabIndex={open ? 0 : -1}
                >
                  Related work: <span>{relatedCaseStudy.label} →</span>
                </RelatedLink>
              )}
            </Actions>
          </PanelBody>
        </PanelClip>
      </Panel>
    </Row>
  );
};

export default CapabilityRow;
