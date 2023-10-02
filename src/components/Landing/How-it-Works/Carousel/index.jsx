import React, { useState } from 'react';
import {
  CarouselContainer,
  CarouselSlide,
  SlideImage,
  CarouselButtons,
} from './index.styled';

import img_1 from "../../../../images/about_img_1.jpg"
import img_2 from "../../../../images/about_img_2.jpg"
import img_3 from "../../../../images/case-study-1.png"
import img_4 from "../../../../images/case-study-2.png"

function CustomCarousel({}) {
	const items = [
		img_1, img_2, img_3, img_4
	]
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselContainer>
    </CarouselContainer>
  );
}

export default CustomCarousel;
