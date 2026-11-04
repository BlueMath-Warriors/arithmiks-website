import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import OfferCard from "./OfferCard";
import { useOfferRail } from "./useOfferRail";
import { Section, TrackArea, Stage, Head, Deck, Rail, Dots, Dot } from "./index.styled";

/**
 * "Offers": the engagement's stages on a horizontal rail that the page scroll
 * drives on wide screens, and a swipeable deck on narrow ones.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   offers: import("./OfferCard").Offer[], tightOnlyWhenShort?: boolean,
 *   sideRowOnNarrow?: boolean }} props
 *   tightOnlyWhenShort: keep the roomier card spacing except on short desktop screens;
 *   sideRowOnNarrow: below 1000px, lay the stage icon, title and duration in a row.
 */
const Offers = ({
  eyebrow,
  title,
  offers,
  tightOnlyWhenShort = false,
  sideRowOnNarrow = false,
}) => {
  const { trackRef, stageRef, railRef, panelRefs, activeIndex, goTo } = useOfferRail(offers.length);

  return (
    <Section id="process" aria-labelledby="process-h" data-offers="">
      <BandShell>
        <TrackArea ref={trackRef} data-offer-track="">
          <Stage ref={stageRef}>
            <Head data-reveal="">
              <div>
                <Eyebrow $tone="onDark">{eyebrow}</Eyebrow>
                <Title id="process-h" $onDark>
                  <HeadingText parts={title} onDark />
                </Title>
              </div>
            </Head>

            <Deck>
              <Rail ref={railRef} $sideRow={sideRowOnNarrow}>
                {offers.map((offer, index) => (
                  <OfferCard
                    key={offer.title}
                    ref={(node) => {
                      panelRefs.current[index] = node;
                    }}
                    offer={offer}
                    index={index}
                    active={index === activeIndex}
                    onSelect={goTo}
                    tightOnlyWhenShort={tightOnlyWhenShort}
                    sideRowOnNarrow={sideRowOnNarrow}
                  />
                ))}
              </Rail>
              <Dots role="tablist" aria-label="Stages">
                {offers.map((offer, index) => (
                  <Dot
                    key={offer.title}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    aria-label={`Stage ${offer.n}`}
                    $active={index === activeIndex}
                    onClick={() => goTo(index)}
                  />
                ))}
              </Dots>
            </Deck>
          </Stage>
        </TrackArea>
      </BandShell>
    </Section>
  );
};

export default Offers;
