import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import MySubmissions from "../MySubmissions";
import { Bar, GhostButton, FilledButton, FilledLink, UserChip } from "./index.styled";

const AuthBar = () => {
  const { user, ready, login, signup, logout } = useAuth();
  const [showSubmissions, setShowSubmissions] = useState(false);

  if (!ready) return null;

  if (!user) {
    return (
      <Bar>
        <GhostButton type="button" onClick={login}>
          Log in
        </GhostButton>
        <FilledButton type="button" onClick={signup}>
          Sign up to write a post
        </FilledButton>
      </Bar>
    );
  }

  const displayName = user.user_metadata?.full_name || user.email;

  return (
    <>
      <Bar>
        <UserChip>
          Signed in as <strong>{displayName}</strong>
        </UserChip>
        <FilledLink to="/blogs/write">Write a Post</FilledLink>
        <GhostButton type="button" onClick={() => setShowSubmissions((v) => !v)}>
          {showSubmissions ? "Hide My Submissions" : "My Submissions"}
        </GhostButton>
        <GhostButton type="button" onClick={logout}>
          Log out
        </GhostButton>
      </Bar>
      {showSubmissions && <MySubmissions />}
    </>
  );
};

export default AuthBar;
