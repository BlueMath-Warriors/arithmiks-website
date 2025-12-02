import React from "react";
import "./src/styles/global.module.css";
import CookieBanner from "./src/components/Cookie-Banner";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <CookieBanner />
    </>
  );
};