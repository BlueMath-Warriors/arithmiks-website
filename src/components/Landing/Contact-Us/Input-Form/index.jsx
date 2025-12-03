import React, { useState } from "react";
import {
  InputRow,
  FormContainer,
  FormSection,
  Form,
  HeaderText,
  IntroText,
  InputContainer,
  NameInput,
  FormErrorText,
  FormSuccessText,
  DropDownInput,
  MessageInput,
  SubmitButton,
  inputStyle,
  phoneContainer,
  phoneDropdown,
  countryList,
  DropdownWrapper,
} from "./index.styled";
import PhoneInput from "react-phone-input-2";
import DownArrow from "../../../../images/header-arrow-down.svg";
import "react-phone-input-2/lib/high-res.css";

const InputForm = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [showWarnings, setShowWarnings] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
  ];

  const budgets = [
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000+",
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedValue === "" || name === "" || email === "" || phone === "" || message === "" || budget === "") {
      setShowWarnings(true);
      setTimeout(() => {
        setShowWarnings(false);
      }, 1500);
    } else {
      const formData = new FormData();
      formData.append("category", selectedValue);
      formData.append("full_name", name);
      formData.append("sender_email", email);
      formData.append("budget", budget);
      formData.append("phone_number", phone);
      formData.append("message", message);
      try {
        const apiFormSubmission = apiEndpoint + "form-submission";
        const response = await fetch(apiFormSubmission, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const responseData = await response.json();
          // Clear form
          setSelectedValue("");
          setName("");
          setEmail("");
          setPhone("");
          setBudget("");
          setMessage("");
          setFormSubmitted(true);

          setTimeout(() => {
            setFormSubmitted(false);
          }, 4000);
        }
      } catch (error) {
      }
    }
  };

  return (
    <FormContainer>
      <FormSection>
        <Form onSubmit={handleSubmit}>
          <FormSuccessText show={formSubmitted}>
            We have received your inquiry. Our team will get back to you soon.
          </FormSuccessText>

          <IntroText>
            Fill out the form and our team will get back to you within 24 hours.
          </IntroText>

          <InputContainer>
            <DropdownWrapper>
              <DropDownInput
                type="text"
                value={selectedValue}
                className={selectedValue ? "has-value" : ""}
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }}
              >
                <option value="" disabled selected>Select a Service or Technology *</option>
                {services.map((service) => (
                  <option value={service} key={service}>{service}</option>
                ))}

              </DropDownInput>
              <DownArrow />
            </DropdownWrapper>
            <FormErrorText show={showWarnings && selectedValue === ""}>This field is required</FormErrorText>
          </InputContainer>

          <InputRow>
              <InputContainer>
                <NameInput
                  type="text"
                  placeholder="Full Name *"
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
            <InputContainer>
              <PhoneInput
                country={'us'}
                inputProps={{
                  placeholder: 'Enter phone number *',
                  style: inputStyle,
                }}
                countryCodeEditable={true}
                containerStyle={phoneContainer}
                buttonStyle={phoneDropdown}
                dropdownStyle ={countryList}
                enableSearch={true}
                value={phone}
                onChange={phone => setPhone(phone)}
              />
              <FormErrorText show={showWarnings && phone === ""}>This field is required</FormErrorText>
            </InputContainer>

            <InputContainer>
              <DropdownWrapper>
                <DropDownInput
                  type="text"
                  value={budget}
                  className={budget ? "has-value" : ""}
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                >
                  <option value="" disabled selected>Share Your Budget *</option>
                  {budgets.map((budgetOption) => (
                    <option value={budgetOption} key={budgetOption}>{budgetOption}</option>
                  ))}
                </DropDownInput>
                <DownArrow />
              </DropdownWrapper>
              <FormErrorText show={showWarnings && budget === ""}>This field is required</FormErrorText>
            </InputContainer>
          </InputRow>
          
            <InputContainer>
              <MessageInput
                placeholder="Describe Your Project or MVP Details *"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <FormErrorText show={showWarnings && message === ""}>This field is required</FormErrorText>
            </InputContainer>

          <SubmitButton>
            Send Message
          </SubmitButton>
        </Form>
      </FormSection>
    </FormContainer>
  );
};

export default InputForm;
