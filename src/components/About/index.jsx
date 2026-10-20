import React, { useRef } from "react";
import WhoWeAre from "./WhoWeAre";
import VisionMission from "./VisionMission";
import Process from "./Process";
import Recognition from "./Recognition";
import BlogTeaser from "./BlogTeaser";
import ContactCTA from "../Careers/ContactCTA";
import { useReveal } from "../../hooks/useReveal";

const About = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef}>
      <WhoWeAre />
      <VisionMission />
      <Process />
      <Recognition />
      <ContactCTA background="#fff" hideWatermarkOnNarrow />
      <BlogTeaser />
    </div>
  );
};

export default About;
