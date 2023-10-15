import React, {useState} from "react";

import {
  BtnIcon,
  Caption,
  Card,
  CardCol,
  CardContainer,
  CardDetail,
  CardIcon,
  CardTitle,
  MoreButton,
  PrimaryText,
  TextContainer,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowRight from "../../../images/ArrowRight.svg";
import FocusIcon from "../../../images/focus-card-icon.svg";
import MoneyIcon from "../../../images/money-card-icon.svg";
import PackageIcon from "../../../images/package-card-icon.svg";
import ScallableIcon from "../../../images/scallable-card-icon.svg";
import FocusIconHover from "../../../images/focus-card-icon-hover.svg";
import MoneyIconHover from "../../../images/money-card-icon-hover.svg";
import PackageIconHover from "../../../images/package-card-icon-hover.svg";
import ScallableIconHover from "../../../images/scallable-card-icon-hover.svg";

function DedicatedCard({title, SimpleIcon, HoverIcon, detail}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("hovered");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("not hovered");
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardIcon hover={isHovered}>
        {isHovered ? <HoverIcon/> : <SimpleIcon />}
      </CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDetail>
        {detail}
      </CardDetail>
    </Card>
  );
}

const DediacatedPage = () => {
  return (
    <section className={containerStyles.dedicated_page}>
      <TextContainer>
        <PrimaryText>Dedicated Team</PrimaryText>
        <Caption>
          Want to Elevate your current team or hand over your project to highly
          skilled dedicated engineers from Arithmiks. We got you covered. Hire
          dedicate resources to meet demands on time, increase working capacity
          by acquiring the best talent to full fill the gap.
        </Caption>
        <MoreButton
          onClick={() => {
            document
              .getElementById("contact-form")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Tell us More <ArrowRight />
        </MoreButton>
      </TextContainer>
      <CardContainer>
        <CardCol>
          <DedicatedCard
            title={"Focus"}
            SimpleIcon={FocusIcon}
            HoverIcon={FocusIconHover}
            detail={"Dedicated teams remains focused on a specific project, enabling long term projects and its maintenance on the top priority, teams with specialised expertise and understanding of the project to meet goal and rapid development."}            
          />
          <DedicatedCard
            title={"Scalable"}
            SimpleIcon={ScallableIcon}
            HoverIcon={ScallableIconHover}
            detail={"Dedicated team ensures scalability of increasing or decreasing the development speed enable you to align the development according to your timeline. Managing the resource and taking care of the team is not your responsibility anymore."}            
          />
        </CardCol>


        <CardCol>
          <DedicatedCard
            title={"Cost Efficient"}
            SimpleIcon={MoneyIcon}
            HoverIcon={MoneyIconHover}
            detail={" Our scalable team module, allows you to keep focus on the business part and don't need to spend energy on long recruitment procedures. Our processes ensure you get the best talent suited exactly for your project."}            
          />
          <DedicatedCard
            title={"Productivity"}
            SimpleIcon={PackageIcon}
            HoverIcon={PackageIconHover}
            detail={"In house team members are usually familiar with the ongoing projects and other team members working styles and decorums which enable them to quickly grip on the project increase in more productivity in less time."}            
          />
        </CardCol>
      </CardContainer>
    </section>
  );
};

export default DediacatedPage;
