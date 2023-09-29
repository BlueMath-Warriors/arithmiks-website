import React, { useState } from "react";
import {
  InputRow,
  FormSection,
  Form,
  HeaderText,
  RadioLabel,
  RadioInput,
  RadioInputs,
  RadioContainer,
  InputLabel,
  NameInput,
  DropDownInput,
  EmailInput,
  MessageInput,
  SubmitButton,
  BtnIcon,
} from "./index.styled";

import ArrowRight from "../../../../images/ArrowRight.svg";

const InputForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <FormSection>
      <Form>
        <HeaderText>Requirements</HeaderText>

        <DropDownInput
          type="text"
          placeholder="How can we help you?"
          value={selectedValue}
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
        >
          <option value="" disabled selected>How can we help you?</option>
        </DropDownInput>
        <InputRow>
            <NameInput
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <NameInput
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
        </InputRow>

        <InputRow>
            <NameInput
              type="email"
              placeholder="(+12) 345-67890"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />

            <NameInput
              type="email"
              placeholder="Organization"
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
        </InputRow>
        
          <MessageInput
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        <SubmitButton>
          Send Message <BtnIcon src={ArrowRight} />
        </SubmitButton>
      </Form>
    </FormSection>
  );
};

export default InputForm;
