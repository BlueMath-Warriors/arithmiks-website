import React from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import { StatValue, StatLabel } from "./index.styled";

const COUNT_DURATION_SECONDS = 1.2;

const StatCounter = ({ value, suffix = "", label }) => {
  const numberRef = useCountUp(value, { duration: COUNT_DURATION_SECONDS, ease: "power3.out" });

  return (
    <div>
      <StatValue>
        <span ref={numberRef}>{value}</span>
        {suffix}
      </StatValue>
      <StatLabel>{label}</StatLabel>
    </div>
  );
};

export default StatCounter;
