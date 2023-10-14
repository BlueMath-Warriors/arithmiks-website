import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import { MainCaption, PrimaryHeading, Secondary } from "./index.styled";
import EasybarFeature from "./Feaature";
import Feature_1 from "../../../../images/easybar-feature-1.png";
import Feature_2 from "../../../../images/easybar-feature-2.png";
import Feature_3 from "../../../../images/easybar-feature-3.png";
import Feature_4 from "../../../../images/easybar-feature-4.png";
import Feature_5 from "../../../../images/easybar-feature-5.png";
import Feature_6 from "../../../../images/easybar-feature-6.png";

const EasybarKeyFeatures = () => {
  return (
    <>
      <div className={containerStyles.easybar_key_features}>
        <PrimaryHeading>
          Key <Secondary>Features</Secondary>
        </PrimaryHeading>
        <MainCaption>
          Unlocking the Power of Easybar & Exploring Our Core Features
        </MainCaption>
      </div>
      <EasybarFeature
        left={false}
        title={"Design Dynamic Rebars"}
        caption={""}
        detail={
          "Focused feature of EasyBar for its users. It offers the ability to define various parameters, such as bar size, spacing, and bending shapes, all while providing real-time feedback of rebar design. This helps reducing errors, and facilitates collaboration among project stakeholders, ultimately contributing to the safety and efficiency of the construction process."
        }
        img={Feature_1}
      />
      <EasybarFeature
        left={true}
        title={"Design Dynamic Nets"}
        caption={""}
        detail={
          "This feature allows users to create and manipulate nets within a 2D digital model, adapting them to the specific requirements of a construction project. This dynamic approach enhances precision and gaps in between the bars."
        }
        img={Feature_2}
      />

      <EasybarFeature
        left={false}
        title={"Design Dynamic Cages"}
        caption={""}
        detail={
          "Designing Dynamic Cages feature enables real-time creation and manipulation of 2D reinforcement cage structures, enhancing precision, compliance, and collaboration in construction projects."
        }
        img={Feature_3}
      />

      <EasybarFeature
        left={true}
        title={"Easy-to-Use Ordering Interface "}
        caption={""}
        detail={
          "A user-friendly ordering interface provides a seamless and intuitive experience for customers."
        }
        img={Feature_4}
      />

      <EasybarFeature
        left={false}
        title={"EasyBar Admin Panel"}
        caption={""}
        detail={
          "EasyBar Admin Panel simplifies data visualization and reporting, enabling informed decision-making and optimization for online platforms"
        }
        img={Feature_5}
      />

      <EasybarFeature
        left={true}
        title={"Order Management"}
        caption={""}
        detail={
          "The Order Management  feature provides users with a convenient platform to track and manage their past orders, enhancing transparency and making reordering a breeze."
        }
        img={Feature_6}
      />
    </>
  );
};

export default EasybarKeyFeatures;
