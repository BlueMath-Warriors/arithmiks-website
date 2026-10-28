import React from "react";
import Marquee from "../../Landing/shared/Marquee";
import { Section, Row, Label, Track, ClientLogo } from "./index.styled";

// The marks the design shows in this row, in its order. Each logo is drawn at
// whole-pixel dimensions (the SVGs' own aspect ratios, rounded) so it never
// lands on a fractional box and gets resampled soft; heights stay even so the
// logo centres on a whole pixel inside the even-height cells.
const CLIENTS = [
  { name: "LFGO", logo: "/lfgo.svg", width: 70, height: 32 },
  { name: "GO", logo: "/go.svg", width: 64, height: 32 },
  { name: "Almani Health Institute", logo: "/almani.svg", width: 68, height: 32 },
  { name: "EASY-BAR", logo: "/easybar.svg", width: 100, height: 12 },
  { name: "Swerv Automotive", logo: "/swerv.svg", width: 114, height: 22 },
  { name: "NICGS", logo: "/homepage/client-nicgs.svg", width: 98, height: 28 },
];

// Space between logos on mobile, where the cells size to their logo so every
// visible gap is the same; the fixed-width desktop cells are untouched.
const MOBILE_LOGO_GAP = 40;

const TrustedBy = () => (
  <Section aria-label="Featured clients">
    <Row>
      <Label>TRUSTED BY</Label>
      <Track>
        <Marquee
          items={CLIENTS.map((client) => ({
            key: client.name,
            node: (
              <ClientLogo
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                loading="lazy"
              />
            ),
          }))}
          durationSeconds={52}
          durationSecondsMobile={40}
          mobileBreakpoint={900}
          gap={0}
          gapMobile={MOBILE_LOGO_GAP}
          cellWidth={176}
          cellWidthMd="auto"
          cellWidthSm="auto"
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
