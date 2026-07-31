import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const Panel = styled.div`
  width: 1120px;
  margin: 0 auto 40px;
  padding: 24px 28px;
  border: 1px solid #e7eaee;
  border-radius: 16px;
  background: #f9fafc;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
    padding: 20px;
  }
`;

export const Heading = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const EmptyText = styled.p`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 14px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #e7eaee;
  border-radius: 10px;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const RowTitle = styled.a`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: #1355ff;
    text-decoration: underline;
  }
`;

const STATUS_COLORS = {
  pending: { bg: "#FFF6E5", color: "#8A5A00" },
  published: { bg: "#E9F9EF", color: "#0F7A3D" },
  rejected: { bg: "#FBEAEA", color: "#B3261E" },
};

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 100px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  background: ${(props) => (STATUS_COLORS[props.$status] || STATUS_COLORS.pending).bg};
  color: ${(props) => (STATUS_COLORS[props.$status] || STATUS_COLORS.pending).color};
`;
