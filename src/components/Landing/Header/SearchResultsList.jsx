import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const isInternal = (url) => url.startsWith("/");

const Results = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 18px 0;
  border-top: 1px solid #edeff5;
  text-decoration: none;
  color: ${colors.text};
  cursor: pointer;

  &:hover span:first-child {
    color: ${colors.primary};
  }
`;

const Thumb = styled.span`
  flex: none;
  width: 148px;
  aspect-ratio: 16 / 10;
  border-radius: 10px;
  overflow: hidden;
  background: #f1f3f8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Body = styled.span`
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
`;

const Title = styled.span`
  font-size: clamp(17px, 1.25vw, 20.5px);
  font-weight: 700;
  letter-spacing: -0.016em;
  line-height: 1.3;
  color: ${colors.text};
  transition: color 0.2s ease;
`;

const Category = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: ${colors.textFaint};
  text-transform: uppercase;
`;

const Description = styled.span`
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const Meta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  padding: 0 0 14px;

  span:first-child {
    font-family: ui-monospace, Menlo, monospace;
    font-size: 11px;
    font-weight: 650;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${colors.textFaint};
  }
  span:last-child {
    font-family: ui-monospace, Menlo, monospace;
    font-size: 12px;
    color: ${colors.primary};
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0 34px;

  span:first-child {
    font-size: 18px;
    font-weight: 650;
    letter-spacing: -0.015em;
    color: ${colors.text};
  }
  span:last-child {
    font-size: clamp(14.5px, 0.93vw, 15.5px);
    line-height: 1.6;
    color: ${colors.textMuted};
  }
`;

// Each result item is either a real internal route (Gatsby Link) or "#" for
// a service that has no page built yet — same hasPage convention as the
// rest of the nav.
const SearchResultsList = ({ results, onNavigate }) => (
  <Results role="listbox" aria-label="Search results">
    {results.map((item, i) => {
      const content = (
        <>
          {item.img && (
            <Thumb>
              <img src={item.img} alt="" loading="lazy" />
            </Thumb>
          )}
          <Body>
            <Title>{item.title}</Title>
            <Category>{item.cat}</Category>
            <Description>{item.desc}</Description>
          </Body>
        </>
      );
      const key = `${item.url}-${i}`;
      return isInternal(item.url) ? (
        <ResultRow as={Link} to={item.url} role="option" key={key} onClick={onNavigate}>
          {content}
        </ResultRow>
      ) : (
        <ResultRow as="a" href={item.url} role="option" key={key} onClick={onNavigate}>
          {content}
        </ResultRow>
      );
    })}
  </Results>
);

export default SearchResultsList;
