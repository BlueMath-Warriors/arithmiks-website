import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellPadding } from "../../../../styles/tokens";

export const Wrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 90;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

// 20px of vertical padding around the 44px close button matches the main
// header's own 85px bar, so opening the drawer does not visibly resize the top
// of the screen. (The source design uses 14px here and jumps by 12px; that is
// a flaw in the design, not something worth reproducing.) The horizontal
// padding stays at 20px to line the logo up with the drawer's own content
// below it rather than with the page shell.
export const TopBar = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* Same 20px vertical rhythm and the same horizontal shell padding as the
     main header, so neither the bar's height nor the logo's position moves
     when the drawer opens over it. */
  padding: 20px ${shellPadding};
  border-bottom: 1px solid ${colors.border};
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  color: ${colors.text};

  /* 27px, matching the main header's mark exactly, so the logo does not
     appear to resize as the drawer opens over it. */
  img {
    height: 27px;
    width: auto;
    display: block;
  }

  span {
    font-size: 20px;
    font-weight: 650;
    letter-spacing: -0.02em;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: 1px solid #d5dcea;
  border-radius: 12px;
  color: ${colors.text};
  cursor: pointer;
`;

export const Scroll = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  /* Matches TopBar's horizontal padding so the menu items line up under the
     logo rather than sitting inboard of it. */
  padding: 18px ${shellPadding} 24px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 16px;
  margin-bottom: 20px;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 14px;

  svg {
    flex: none;
  }
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  height: 100%;
  background: transparent;
  border: 0;
  outline: none;
  color: ${colors.text};
  font-size: 16px;
`;

export const Nav = styled.nav``;

const rowBase = `
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  min-height: 56px;
  padding: 14px 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${colors.border};
  color: ${colors.text};
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.015em;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
`;

export const AccButton = styled.button`
  ${rowBase}
`;

export const TopLink = styled(Link)`
  ${rowBase}
`;

export const Chevron = styled.svg`
  flex: none;
  transition: transform 0.28s;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
`;

export const PlainArrow = styled.span`
  flex: none;
  font-size: 14px;
  color: ${colors.textFaint};
`;

export const AccPanel = styled.div`
  display: ${(p) => (p.$open ? "flex" : "none")};
  flex-direction: column;
  padding: 4px 0 12px;
`;

export const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  padding: 11px 0 11px 2px;
  font-size: 15.5px;
  font-weight: 500;
  color: ${colors.textMuted};
  text-decoration: none;
`;

export const AllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 48px;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.primary};
  text-decoration: none;
`;

export const BottomBar = styled.div`
  flex: none;
  padding: 14px ${shellPadding} calc(14px + env(safe-area-inset-bottom));
  border-top: 1px solid ${colors.border};
  background: #fff;
`;

export const CtaLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  background: ${colors.primary};
  color: #fff;
  font-size: 16.5px;
  font-weight: 600;
  border-radius: 100px;
  text-decoration: none;
`;
