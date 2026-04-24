import React from "react";
import { Banner, BannerIcon, PrimaryBtn } from "./index.styled";
import { errorCopy } from "./scanFormat";

/**
 * @param {{ error: object; onRetry: () => void }} props
 */
const ErrorState = ({ error, onRetry }) => {
  const copy = errorCopy(error);
  return (
    <div>
      <Banner
        role="alert"
        aria-live="assertive"
        $bg="#fdecec"
        $border="#f3b4b0"
        $color="#c0261a"
      >
        <BannerIcon $color="#c0261a" aria-hidden="true">
          !
        </BannerIcon>
        <div>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
        </div>
      </Banner>
      <PrimaryBtn type="button" onClick={onRetry}>
        Try again
      </PrimaryBtn>
    </div>
  );
};

export default ErrorState;
