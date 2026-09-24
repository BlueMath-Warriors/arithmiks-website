import React from "react";
import { Shell, Eyebrow, SectionTitle, GradientText } from "../../shared/Section/index.styled";
import {
  Section,
  Split,
  Lede,
  Awards,
  Award,
  AwardText,
  AwardName,
  AwardNote,
  BadgeCard,
  BadgeKicker,
  BadgeRow,
  BadgeCaption,
} from "./index.styled";
import upworkRank from "../../../images/homepage/upwork-rank.png";

const AWARDS = [
  {
    name: "Top Rated Plus",
    note: "Upwork's highest agency tier — sustained client ratings and delivery history across every contract.",
    iconPaths: ["M10 2.6l2.2 4.6 5 .7-3.6 3.5.9 5L10 14l-4.5 2.4.9-5L2.8 7.9l5-.7L10 2.6Z"],
  },
  {
    name: "#146 in Web Development",
    note: "Ranked by UpworkRank in the top 0.87% of web development agencies worldwide.",
    iconPaths: ["M3 15.5 8 10l3 3 6-6.5", "M13.5 6.5H17v3.5"],
  },
];

const Recognition = () => (
  <Section aria-labelledby="recog-h">
    <Shell data-shell="">
      <Split>
        <div>
          <Eyebrow data-reveal="">Recognition</Eyebrow>
          <SectionTitle id="recog-h" data-reveal="">
            Rated by the clients <GradientText>we work with</GradientText>
          </SectionTitle>
          <Lede data-reveal="">
            Badges matter less than shipped work — but these come from Upwork&apos;s own data on our
            contracts, not from us.
          </Lede>
          <Awards data-stagger="up">
            {AWARDS.map((award) => (
              <Award key={award.name} data-reveal="">
                <svg
                  viewBox="0 0 20 20"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#1355FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {award.iconPaths.map((path) => (
                    <path key={path} d={path} />
                  ))}
                </svg>
                <AwardText>
                  <AwardName>{award.name}</AwardName>
                  <AwardNote>{award.note}</AwardNote>
                </AwardText>
              </Award>
            ))}
          </Awards>
        </div>
        <BadgeCard data-reveal="">
          <BadgeKicker>On Upwork</BadgeKicker>
          <BadgeRow>
            <img src="/homepage/upwork-top-rated.svg" alt="Upwork Top Rated Plus" />
            <img src={upworkRank} alt="UpworkRank — #146 in Web Development, top 0.87%" />
          </BadgeRow>
          <BadgeCaption>Top Rated Plus, ranked #146 in Web Development — top 0.87% of agencies.</BadgeCaption>
        </BadgeCard>
      </Split>
    </Shell>
  </Section>
);

export default Recognition;
