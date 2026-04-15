import React from "react";
import logo from "../../../images/logo-sm.png";
import {
  HeaderContainer,
  BrandGroup,
  LogoWrapper,
  BrandText,
  BrandName,
  StatusRow,
  StatusDot,
  StatusText,
  CloseButton,
} from "./index.styled";

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function ChatHeader({ onClose }) {
  return (
    <HeaderContainer>
      <BrandGroup>
        <LogoWrapper>
          <img src={logo} alt="Arithmiks logo" />
        </LogoWrapper>
        <BrandText>
          <BrandName>Arithmiks AI</BrandName>
          <StatusRow>
            <StatusDot aria-hidden="true" />
            <StatusText>Online</StatusText>
          </StatusRow>
        </BrandText>
      </BrandGroup>
      <CloseButton onClick={onClose} aria-label="Close chat">
        <XIcon />
      </CloseButton>
    </HeaderContainer>
  );
}
