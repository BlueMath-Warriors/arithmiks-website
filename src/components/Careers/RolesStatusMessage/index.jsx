import React from "react";
import { Wrapper, Title, Text, RetryButton } from "./index.styled";

const MESSAGES = {
  empty: {
    title: "No open roles right now",
    text: "We are not hiring for a specific role at the moment, but we read every open application. Please check back soon.",
  },
  error: {
    title: "We couldn't load our open roles",
    text: "Something went wrong on our side. Please try again in a moment.",
  },
};

const reloadPage = () => window.location.reload();

/**
 * What the careers pages show instead of a list of roles: either there are
 * none, or they could not be loaded (the error variant offers a retry, which
 * is a plain reload because the roles are fetched on the server).
 *
 * @param {{ variant: "empty" | "error" }} props
 */
const RolesStatusMessage = ({ variant }) => {
  const { title, text } = MESSAGES[variant];

  return (
    <Wrapper role={variant === "error" ? "alert" : "status"}>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {variant === "error" && (
        <RetryButton type="button" onClick={reloadPage}>
          Try again
        </RetryButton>
      )}
    </Wrapper>
  );
};

export default RolesStatusMessage;
