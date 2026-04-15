import { styled } from "styled-components";

export const ListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #e6e8ec transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #e6e8ec;
    border-radius: 4px;
  }
`;
