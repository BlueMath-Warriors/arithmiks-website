import React from "react";
import { Nav, List, Item, Crumb, Current, Separator } from "./index.styled";

/**
 * @param {{ items: { name: string; pathname: string }[]; clearHeader?: boolean }} props
 * `clearHeader` adds top padding to clear a fixed/absolute-positioned Header
 * when this is the first element in the flow (no header-spacer div above it).
 */
const Breadcrumbs = ({ items, clearHeader = false }) => {
  if (!items || items.length < 2) return null;

  return (
    <Nav aria-label="Breadcrumb" $clearHeader={clearHeader}>
      <List>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <Item key={item.pathname}>
              {isLast ? (
                <Current aria-current="page">{item.name}</Current>
              ) : (
                <>
                  <Crumb to={item.pathname}>{item.name}</Crumb>
                  <Separator aria-hidden="true">/</Separator>
                </>
              )}
            </Item>
          );
        })}
      </List>
    </Nav>
  );
};

export default Breadcrumbs;
