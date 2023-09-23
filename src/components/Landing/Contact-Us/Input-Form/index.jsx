import React, { useState } from "react";
import {
  NameInputs,
  FormSection,
  Form,
  HeaderText,
  RadioLabel,
  RadioInput,
  RadioInputs,
  RadioContainer,
  InputLabel,
  NameInput,
  EmailInput,
  MessageInput,
  SubmitButton,
  BtnIcon,
} from "./index.styled";

import ArrowRight from "../../../../images/ArrowRight.svg";

const InputForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <FormSection>
      <Form>
        <HeaderText>Select Requirement:</HeaderText>

        <RadioInputs>
          <RadioContainer>
            <RadioInput
              type="radio"
              name="requirement"
              id="1"
              value="Project Outsourcing"
              onChange={handleRadioChange}
              checked={selectedValue === "Project Outsourcing"}
            />
            <RadioLabel for="html">Project Outsourcing</RadioLabel>
          </RadioContainer>

          <RadioContainer>
            <RadioInput
              type="radio"
              name="requirement"
              id="2"
              value="Hiring Dev Team"
              onChange={handleRadioChange}
              checked={selectedValue === "Hiring Dev Team"}
            />
            <RadioLabel for="html">Hiring Dev Team</RadioLabel>
          </RadioContainer>

          <RadioContainer>
            <RadioInput
              type="radio"
              name="requirement"
              id="3"
              value="Maching Learning"
              onChange={handleRadioChange}
              checked={selectedValue === "Maching Learning"}
            />
            <RadioLabel for="html">Maching Learning</RadioLabel>
          </RadioContainer>

          <RadioContainer>
            <RadioInput
              type="radio"
              name="requirement"
              id="4"
              value="Digital Transformation"
              onChange={handleRadioChange}
              checked={selectedValue === "Digital Transformation"}
            />
            <RadioLabel for="html">Digital Transformation</RadioLabel>
          </RadioContainer>

          <RadioContainer>
          <RadioInput
              type="radio"
              name="requirement"
              id="5"
              value="Something Else"
              onChange={handleRadioChange}
              checked={selectedValue === "Something Else"}
            />
            <RadioLabel for="html">Something Else</RadioLabel>
          </RadioContainer>
        </RadioInputs>

        <NameInputs>
          <InputLabel>
            Name
            <NameInput
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </InputLabel>

          <InputLabel>
            Last Name
            <NameInput
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </InputLabel>
        </NameInputs>

        <InputLabel>
          Email
          <EmailInput
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputLabel>

        <InputLabel>
          Message
          <MessageInput
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </InputLabel>
        <SubmitButton>
          Send Message <BtnIcon src={ArrowRight} />
        </SubmitButton>
      </Form>
    </FormSection>
  );
};

export default InputForm;
