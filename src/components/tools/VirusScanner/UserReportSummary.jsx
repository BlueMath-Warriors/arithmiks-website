import React from "react";
import { UserSummaryList } from "./index.styled";

/**
 * @param {{ bullets: string[] }} props
 */
const UserReportSummary = ({ bullets }) => {
  if (!bullets || bullets.length === 0) return null;
  return (
    <section aria-label="Scan summary">
      <UserSummaryList>
        {bullets.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </UserSummaryList>
    </section>
  );
};

export default UserReportSummary;
