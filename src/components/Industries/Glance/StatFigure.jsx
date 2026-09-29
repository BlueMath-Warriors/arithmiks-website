import React from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import { StatNumber } from "./index.styled";

const COUNT_DURATION_SECONDS = 1.3;

const CountingNumber = ({ value }) => {
  const numberRef = useCountUp(value, { duration: COUNT_DURATION_SECONDS, ease: "power3.out" });
  return <StatNumber ref={numberRef}>{value}</StatNumber>;
};

// Whole numbers count up on scroll; ranges like "5–6" are shown as written.
const StatFigure = ({ value, text }) =>
  value === undefined ? <StatNumber>{text}</StatNumber> : <CountingNumber value={value} />;

export default StatFigure;
