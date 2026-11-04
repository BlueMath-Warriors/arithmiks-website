import React, { useEffect, useRef } from "react";
import { Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { Row, TitleColumn, IntroColumn, IntroLead, IntroBody } from "./index.styled";

const SETTLE_DELAYS_MS = [0, 300, 1200];

/**
 * A band's split heading: the title on the left, a lead and supporting
 * paragraph on the right. When the two sit side by side the paragraph is
 * nudged down to centre on the title, as in the design.
 *
 * @param {{ id: string, eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   lead: string, body: string }} props
 */
const FitIntro = ({ id, eyebrow, title, lead, body }) => {
  const titleRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    // Integer offsets, as the design measures, so the nudge rounds the same way.
    const topWithin = (element, row) => {
      let y = 0;
      let node = element;
      while (node && node !== row) {
        y += node.offsetTop;
        node = node.offsetParent;
      }
      return node === row ? y : element.offsetTop - row.offsetTop;
    };
    const align = () => {
      const heading = titleRef.current;
      const intro = introRef.current;
      if (!heading || !intro) return;
      intro.style.marginTop = "0px";
      // Stacked (the intro wrapped under the title): nothing to align.
      if (intro.offsetLeft < heading.offsetLeft + heading.offsetWidth) return;
      const row = intro.parentElement;
      const offset =
        topWithin(heading, row) + heading.offsetHeight / 2 - (topWithin(intro, row) + intro.offsetHeight / 2);
      intro.style.marginTop = `${Math.max(0, Math.round(offset))}px`;
    };
    const timers = SETTLE_DELAYS_MS.map((delay) => setTimeout(align, delay));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
    window.addEventListener("resize", align);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", align);
    };
  }, []);

  return (
    <Row data-reveal="">
      <TitleColumn>
        <Eyebrow $gap="20px">{eyebrow}</Eyebrow>
        <Title id={id} $balance ref={titleRef}>
          <HeadingText parts={title} />
        </Title>
      </TitleColumn>
      <IntroColumn ref={introRef}>
        <IntroLead>{lead}</IntroLead>
        <IntroBody>{body}</IntroBody>
      </IntroColumn>
    </Row>
  );
};

export default FitIntro;
