import React from "react";
import { navigate } from "gatsby";
import JobSearchBar from "../JobSearchBar";
import { HeroSection, Glow, Shell, Eyebrow, Headline, GradientText, SearchWrap } from "./index.styled";

/**
 * @param {{ teamOptions: string[]; locationOptions: string[] }} props
 * Search submits navigate to /careers/jobs with the filters as a query
 * string, so the full listing opens already filtered.
 */
const Hero = ({ teamOptions, locationOptions }) => {
  const handleSubmit = ({ keyword, team, location }) => {
    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    if (team) params.set("team", team);
    if (location) params.set("location", location);
    const query = params.toString();
    navigate(`/careers/jobs${query ? `?${query}` : ""}`);
  };

  return (
    <HeroSection id="top">
      <Glow />
      <Shell>
        <Eyebrow>Careers</Eyebrow>
        <Headline>
          Build your career. <GradientText>Grow with the best in tech</GradientText>
        </Headline>
        <SearchWrap>
          <JobSearchBar variant="hero" teamOptions={teamOptions} locationOptions={locationOptions} onSubmit={handleSubmit} />
        </SearchWrap>
      </Shell>
    </HeroSection>
  );
};

export default Hero;
