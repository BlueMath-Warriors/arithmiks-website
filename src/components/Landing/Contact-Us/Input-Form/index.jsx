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
  inputStyle,
  phoneContainer,
  phoneDropdown,
  countryList,
} from "./index.styled";
import PhoneInput from 'react-phone-input-2'
import ArrowRight from "../../../../images/ArrowRight.svg";
import 'react-phone-input-2/lib/high-res.css'

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
          <PhoneInput
            country={'pk'}
            inputProps={{
              placeholder: 'Enter phone number',
              style: inputStyle,
            }}
            countryCodeEditable={false}
            containerStyle={phoneContainer}
            buttonStyle={phoneDropdown}
            dropdownStyle ={countryList}
            value={phone}
            onChange={phone => setPhone(phone)}
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
