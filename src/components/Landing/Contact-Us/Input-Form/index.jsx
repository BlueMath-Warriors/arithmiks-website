import React, { useState } from "react";
import {
  InputRow,
  FormContainer,
  FormSection,
  Form,
  HeaderText,
  InputContainer,
  NameInput,
  FormErrorText,
  DropDownInput,
  MessageInput,
  SubmitButton,
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
  const [showWarnings, setShowWarnings] = useState(false);
  const apiEndpoint = process.env.GATSBY_API_ENDPOINT;

  const services = [
    "Web App Development",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "Software Quality Assurance",
    "DevOps",
    "Cloud Infrastructure Managment",
    "Project Managment",
    "Technical Support",
    "Digital Transformation",
    "Data Pre-Processing",
    "Data Modeling",
    "Results and Visualizations",
    "Product Discovery",
    "Interactive Prototyping",
    "MVP",
    "Software Re-engineering",
  ]
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(selectedValue === "" || name === "" || email === "" || message === ""){
      setShowWarnings(true);
      setTimeout(()=>{
        setShowWarnings(false);
      }, [1500])
    }
    else{
      const formData = new FormData();
      formData.append("category", selectedValue);
      formData.append("full_name", name);
      formData.append("sender_email", email);
      formData.append("organization", organization);
      formData.append("phone_number", phone);
      formData.append("message", message);
      try {
        const apiFormSubmission = apiEndpoint + 'form-submission'
        const response = await fetch(apiFormSubmission, {
          method: "POST",
          body: formData,
        });
    
        if (response.ok) {
          const responseData = await response.json();
        }
      } catch (error) {
      }
    }
  };
  

  return (
    <FormContainer>
      <FormSection>
        <Form onSubmit={handleSubmit}>
          <HeaderText>Requirements</HeaderText>

          <InputContainer>
            <DropDownInput
              type="text"
              value={selectedValue}
              onChange={(e) => {
                setSelectedValue(e.target.value);
              }}
            >
              <option value="" disabled selected>How can we help you? *</option>
              {services.map((service) => (
                <option value={service} selected>{service}</option>
              ))}

            </DropDownInput>
            <FormErrorText show={showWarnings && selectedValue === ""}>This field is required</FormErrorText>
          </InputContainer>

          <InputRow>
              <InputContainer>
                <NameInput
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <FormErrorText show={showWarnings && name === ""}>This field is required</FormErrorText>
              </InputContainer>
              <InputContainer>
                <NameInput
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <FormErrorText show={showWarnings && email === ""}>This field is required</FormErrorText>
              </InputContainer>
          </InputRow>

          <InputRow>
            <PhoneInput
              country={'us'}
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
          
            <InputContainer>
              <MessageInput
                placeholder="Tell us about your project... *"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <FormErrorText show={showWarnings && message === ""}>This field is required</FormErrorText>
            </InputContainer>

          <SubmitButton>
            Send Message <ArrowRight />
          </SubmitButton>
        </Form>
      </FormSection>
    </FormContainer>
  );
};

export default InputForm;
