import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardIcon,
  CardDetailIcon,
  CardHeaderText,
  CardBodyDetail,
  CardBodyText,
} from "./index.styled";
import ArrowRight from "../../../../images/arrow-right-black.svg";
import ArrowRightWhite from "../../../../images/ArrowRight.svg";
import ArrowRightBold from "../../../../images/arrow-right-bold.svg";

const CardDescription = (props) => {
  const { white, point } = props;
  const [isHovered, setIsHovered] = useState(0);

  return (
    <CardBodyDetail
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <CardDetailIcon
        src={isHovered ? ArrowRightBold : white ? ArrowRightWhite : ArrowRight}
      />
      <CardBodyText bold={isHovered}>{point}</CardBodyText>
    </CardBodyDetail>
  );
};

const ServiceCard = (props) => {
  const { position, basicIcon, hoverIcon, header, points } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      position={position}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <CardHeader>
        {isHovered ? (
          <CardIcon src={hoverIcon} />
        ) : (
          <CardIcon src={basicIcon} />
        )}
        <CardHeaderText>Software Development</CardHeaderText>
      </CardHeader>
      {points.map((point) => (
        <CardDescription white={isHovered} point={point} key={point} />
      ))}
    </Card>
  );
};

export default ServiceCard;
