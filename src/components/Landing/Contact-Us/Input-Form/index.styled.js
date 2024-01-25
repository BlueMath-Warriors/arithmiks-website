import { styled } from "styled-components";
import { breakpoints } from "../../index.styled";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height :662px;
  background-color: #fff;
  @media screen and (max-width: ${breakpoints.large}) {
    height :100%;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height :100%;
  }
`

export const FormSection = styled.div`
  z-index: 10;
  width: 672px;
  border-radius: 0px 24px 24px 0px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    border-radius: 24px 24px 0px 0px;
    padding: 32px 65px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px; 
    padding: 16px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  background-color: #fff;
`;

export const HeaderText = styled.label`
  color: #333;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.52px;
    @media screen and (max-width: ${breakpoints.large}) {
    height: 44px;
    width: 307px;
    }
  `
;

export const InputLabel = styled.label`
  color: #061C3D;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

export const FormErrorText = styled.p`
  position: relative;
  font-family: Inter;
  left: 10px;
  top: 5px;
  color: #FF3333;
  display: ${props => (props.show ? 'block' : 'none')};
  font-size: 14px;
`

export const NameInput = styled.input`
  height: 44px;
  width: 256px;
  display: flex;    
  padding: 10px 16px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: #838E9E;
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder { /* Edge 12 -18 */
    color: #838E9E;
  }
  @media screen and (max-width: ${breakpoints.large}) {
    height: 44px;
    width: 307px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 350px;
    height: 44px;
  }
`;

export const EmailInput = styled.input`
  height: 48px;
  width: 544px;
  display: flex;
  padding: 12px 18px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;
  
  color: #838E9E;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: #838E9E;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 350px;
    height: 44px;
  }
`;

export const DropDownInput = styled.select`
  height: 48px !important;
  width: 544px;
  display: flex;
  padding: 12px 18px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;
  
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
 

  @media screen and (max-width: ${breakpoints.large}) {
    width: 630px;
    height: 48px !important;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 350px;
    height: 48px !important;
  }
`;

export const MessageInput = styled.textarea`
  min-height: 132px;
  max-height: 132px;
  width: 100%;
  display: flex;
  padding: 12px 18px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;
  resize: none;

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: #838E9E;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    height: 132px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 350px;
    height: 132px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 183.273px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 7px;
  background: #0B63E5;

  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;

`

export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const InputRow = styled.div`
  display: flex;
  gap: 32px;
  .react-tel-input {
    width: 256px;
  }
  @media screen and (max-width: ${breakpoints.large}) {
    gap: 16px;
    .react-tel-input {
      width: 307px !important;
    }
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 20px;
    .react-tel-input {
      width: 350px !important;
    }
  }
`

export const phoneContainer = {
  height: '44px',
  width: '256px',
  display: 'flex',
  padding: '10px 16px 10px 8px',
  alignItems: 'center',
  borderRadius: '5px',
  border: '1px solid #E6E8EC',
  background: '#FFF',
}

export const inputStyle = {
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  border: 'none', 
  width: "245px",
};

export const phoneDropdown = {
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '0',
}

export const countryList = {
  color: '#838E9E !important',
}