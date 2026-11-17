import React from "react";
import { ErrorMessage } from "../../Landing/Contact-Us/Booking-Flow/Step1Form/index.styled";

/** @param {{ id: string, message?: string }} props */
const FieldError = ({ id, message }) =>
  message ? <ErrorMessage id={id}>{`⚠ ${message}`}</ErrorMessage> : null;

export default FieldError;
