import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Panel, Heading, EmptyText, List, Row, RowTitle, StatusBadge } from "./index.styled";

const STATUS_LABEL = {
  pending: "Pending review",
  published: "Live",
  rejected: "Not approved",
};

const MySubmissions = () => {
  const { getToken } = useAuth();
  const [state, setState] = useState({ loading: true, error: null, submissions: [] });

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const token = await getToken();
      if (!token) {
        if (!cancelled) setState({ loading: false, error: "Please log in again.", submissions: [] });
        return;
      }

      try {
        const response = await fetch("/api/blog-my-submissions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (cancelled) return;
        if (!response.ok || !data.success) {
          setState({ loading: false, error: data.error || "Could not load your submissions.", submissions: [] });
          return;
        }
        setState({ loading: false, error: null, submissions: data.submissions });
      } catch {
        if (!cancelled) {
          setState({ loading: false, error: "Could not load your submissions.", submissions: [] });
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [getToken]);

  return (
    <Panel>
      <Heading>My Submissions</Heading>
      {state.loading && <EmptyText>Loading…</EmptyText>}
      {!state.loading && state.error && <EmptyText>{state.error}</EmptyText>}
      {!state.loading && !state.error && state.submissions.length === 0 && (
        <EmptyText>You haven't submitted any posts yet.</EmptyText>
      )}
      {!state.loading && !state.error && state.submissions.length > 0 && (
        <List>
          {state.submissions.map((submission) => (
            <Row key={submission.url}>
              <RowTitle href={submission.url} target="_blank" rel="noopener noreferrer">
                {submission.title}
              </RowTitle>
              <StatusBadge $status={submission.status}>
                {STATUS_LABEL[submission.status] || submission.status}
              </StatusBadge>
            </Row>
          ))}
        </List>
      )}
    </Panel>
  );
};

export default MySubmissions;
