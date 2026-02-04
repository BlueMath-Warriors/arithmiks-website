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
      {isHovered ? <ArrowRightBold/> : <ArrowRight/>}
      <CardBodyText bold={isHovered}>{point}</CardBodyText>
    </CardBodyDetail>
  );
};

const ServiceCard = (props) => {
  const { position, basicIcon, hoverIcon, header, points } = props;

  return (
    <Card
      position={position}
      className="service-card"
    >
      <CardHeader>
        {basicIcon}
        <CardHeaderText>{header}</CardHeaderText>
      </CardHeader>
      {points.map((point) => (
        <CardDescription point={point} key={point} />
      ))}
    </Card>
  );
};

export default ServiceCard;
