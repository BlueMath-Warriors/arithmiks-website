import React, { useMemo, useState } from "react";
import JobSearchBar from "../JobSearchBar";
import JobListItem from "../JobListItem";
import { departmentOptions, locationOptions } from "../../../constants/jobs";
import {
  Section,
  Shell,
  Eyebrow,
  Heading,
  Count,
  SearchWrap,
  List,
  EmptyState,
  EmptyTitle,
  EmptyText,
  EmptyClearButton,
} from "./index.styled";

const EMPTY_FILTERS = { keyword: "", team: null, location: null };

const jobMatchesKeyword = (job, keyword) => {
  if (!keyword) return true;
  const haystack = `${job.title} ${job.department} ${job.location} ${job.employmentType} ${job.summary}`.toLowerCase();
  return haystack.includes(keyword.toLowerCase());
};

/**
 * @param {{
 *   jobs: import("../../../constants/jobs").jobs;
 *   initialKeyword?: string;
 *   initialTeam?: string | null;
 *   initialLocation?: string | null;
 * }} props
 */
const JobsList = ({ jobs, initialKeyword = "", initialTeam = null, initialLocation = null }) => {
  const [filters, setFilters] = useState({ keyword: initialKeyword, team: initialTeam, location: initialLocation });
  // JobSearchBar owns its own displayed keyword/team/location once mounted —
  // bumping this key remounts it with fresh initial* props so "Clear
  // filters" visibly resets the search bar too, not just the list below it.
  const [searchBarKey, setSearchBarKey] = useState(0);

  const filteredJobs = useMemo(
    () =>
      jobs.filter(
        (job) =>
          jobMatchesKeyword(job, filters.keyword) &&
          (!filters.team || job.department === filters.team) &&
          (!filters.location || job.location === filters.location)
      ),
    [jobs, filters]
  );

  const handleClearFilters = () => {
    setFilters(EMPTY_FILTERS);
    setSearchBarKey((key) => key + 1);
  };

  return (
    <Section>
      <Shell>
        <Eyebrow>Open roles</Eyebrow>
        <Heading>
          <span>Every role we are hiring for</span>
          <Count>({filteredJobs.length})</Count>
        </Heading>
        <SearchWrap>
          <JobSearchBar
            key={searchBarKey}
            variant="light"
            teamOptions={departmentOptions}
            locationOptions={locationOptions}
            initialKeyword={filters.keyword}
            initialTeam={filters.team}
            initialLocation={filters.location}
            onSubmit={setFilters}
          />
        </SearchWrap>
        <List>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobListItem key={job.slug} job={job} />)
          ) : (
            <EmptyState>
              <EmptyTitle>No matches</EmptyTitle>
              <EmptyText>
                Try a role, a team, or a location. Or send us an open application — we read every one.
              </EmptyText>
              <EmptyClearButton type="button" onClick={handleClearFilters}>
                Clear filters
              </EmptyClearButton>
            </EmptyState>
          )}
        </List>
      </Shell>
    </Section>
  );
};

export default JobsList;
