import { styled } from "styled-components";

export const AuthorAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${(props) => props.$size || "40px"};
  height: ${(props) => props.$size || "40px"};
  border-radius: 50%;
  background: linear-gradient(135deg, #1355ff 0%, #bc4e9b 100%);
  color: #fff;
  font-family: Poppins;
  font-weight: 600;
  font-size: ${(props) => props.$fontSize || "14px"};
`;

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
