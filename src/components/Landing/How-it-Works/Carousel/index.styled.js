import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarouselSlide = styled.div`
  width: 300px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CarouselButtons = styled.div`
  margin-top: 10px;
  button {
    margin-right: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
