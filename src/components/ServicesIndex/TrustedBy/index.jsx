import React from "react";
import Marquee from "../../Landing/shared/Marquee";
import { Section, Row, Label, Track, ClientLogo } from "./index.styled";

// The seven marks the design shows in this row, in its order.
const CLIENTS = [
  { name: "LFGO", logo: "/lfgo.svg" },
  { name: "GO", logo: "/go.svg" },
  { name: "Almani Health Institute", logo: "/almani.svg" },
  { name: "EASY-BAR", logo: "/easybar.svg" },
  { name: "HAKRO", logo: "/hakro.svg" },
  { name: "Swerv Automotive", logo: "/swerv.svg" },
  { name: "NICGS", logo: "/homepage/client-nicgs.svg" },
];

const TrustedBy = () => (
  <Section aria-label="Featured clients">
    <Row>
      <Label>TRUSTED BY</Label>
      <Track>
        <Marquee
          items={CLIENTS.map((client) => ({
            key: client.name,
            node: <ClientLogo src={client.logo} alt={client.name} loading="lazy" />,
          }))}
          durationSeconds={52}
          durationSecondsMobile={40}
          mobileBreakpoint={900}
          gap={0}
          gapMobile={0}
          cellWidth={176}
          cellWidthMd={132}
          cellWidthSm={112}
          cellHeight={86}
          cellHeightMd={64}
          cellHeightSm={58}
          cellBreakpointMd={900}
          cellBreakpointSm={640}
        />
      </Track>
    </Row>
  </Section>
);

export default TrustedBy;
