import React from "react";
import { styled } from "styled-components";

const AuthorAvatarBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(props) => props.$size || "40px"};
  height: ${(props) => props.$size || "40px"};
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #1355ff 0%, #bc4e9b 100%);
  color: #fff;
  font-family: Poppins;
  font-weight: 600;
  font-size: ${(props) => props.$fontSize || "14px"};
`;

const AuthorAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const isImageUrl = (value) => typeof value === "string" && /^(https?:)?\/\//.test(value);

/**
 * Renders a real photo when `children` is an image URL (e.g. a Contentful
 * asset URL), otherwise falls back to rendering it as plain initials text
 * (e.g. "AT") inside the same gradient circle — keeps older posts authored
 * before real author photos existed working unchanged.
 */
export const AuthorAvatar = ({ children, alt = "", ...props }) => (
  <AuthorAvatarBase {...props}>
    {isImageUrl(children) ? <AuthorAvatarImg src={children} alt={alt} loading="lazy" /> : children}
  </AuthorAvatarBase>
);

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const AuthorName = styled.span`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const AuthorSub = styled.span`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
`;
