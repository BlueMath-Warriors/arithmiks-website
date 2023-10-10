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
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("option", selectedValue);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("organization", organization);
    formData.append("phone", phone);
    formData.append("message", message);
  
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
      } else {
      }
    } catch (error) {
    }
  };
  

  return (
    <FormSection>
      <Form onSubmit={handleSubmit}>
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
          <option value="Dedicated Team" selected>Dedicated Team</option>
          <option value="Fixed Price Project" selected>Fixed Price Project</option>

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
            type="text"
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
