import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e6e8ec;
  border-radius: 24px 24px 0 0;
  background: #fff;
  flex-shrink: 0;
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  background: #f5f5f7;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const BrandName = styled.span`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  color: #061237;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StatusDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  flex-shrink: 0;
`;

export const StatusText = styled.span`
  font-family: Poppins;
  font-size: 11px;
  font-weight: 400;
  color: #42526b;
  line-height: 1;
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42526b;
  transition: background 0.2s, color 0.2s;
  flex-shrink: 0;

  &:hover {
    background: #f5f5f7;
    color: #061237;
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;
