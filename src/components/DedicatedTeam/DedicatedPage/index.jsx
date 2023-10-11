import React from "react";

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
const DediacatedPage = () => {
  return (
    <section className={containerStyles.dedicated_page}>
      <TextContainer>
        <PrimaryText>Dedicated page content</PrimaryText>
        <Caption>
          Want to Elevate your current team or hand over your project to highly
          skilled dedicated engineers from Arithmiks. We got you covered. Hire
          dedicate resources to meet demands on time, increase working capacity
          by acquiring the best talent to full fill the gap.
        </Caption>
        <MoreButton>
          Tell us More <BtnIcon src={ArrowRight} />{" "}
        </MoreButton>
      </TextContainer>
      <CardContainer>
        <CardCol>
          <Card>
            <CardIcon src={FocusIcon} />
            <CardTitle>Focus</CardTitle>
            <CardDetail>
              Dedicated teams remains focused on a specific project, enabling
              long term projects and its maintenance on the top priority, teams
              with specialised expertise and understanding of the project to
              meet goal and rapid development.
            </CardDetail>
          </Card>
          <Card>
            <CardIcon src={ScallableIcon} />
            <CardTitle>Scalable</CardTitle>
            <CardDetail>
              Dedicated team ensures scalability of increasing or decreasing the
              development speed enable you to align the development according to
              your timeline. Managing the resource and taking care of the team
              is not your responsibility anymore.
            </CardDetail>
          </Card>
        </CardCol>

        <CardCol>
          <Card>
            <CardIcon src={MoneyIcon} />
            <CardTitle>Cost Efficient</CardTitle>
            <CardDetail>
              Our scalable team module, allows you to keep focus on the business
              part and don't need to spend energy on long recruitment
              procedures. Our processes ensure you get the best talent suited
              exactly for your project.
            </CardDetail>
          </Card>
          <Card>
            <CardIcon src={PackageIcon} />
            <CardTitle>Productivity:</CardTitle>
            <CardDetail>
              In house team members are usually familiar with the ongoing
              projects and other team members working styles and decorums which
              enable them to quickly grip on the project increase in more
              productivity in less time.
            </CardDetail>
          </Card>
        </CardCol>
      </CardContainer>
    </section>
  );
};

export default DediacatedPage;
