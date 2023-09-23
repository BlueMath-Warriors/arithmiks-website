import { styled } from "styled-components";

export const FormSection = styled.div`
  z-index: 10;
  width: 672px;
  height: 654px;
  border-radius: 0px 24px 24px 0px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  padding-top: 20px;
  background-color: #fff;
`;

export const HeaderText = styled.label`
  color: #475569;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.075px;
`;

export const RadioLabel = styled.label`
  color: #1F2937;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.07px;
`

export const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

export const RadioInputs = styled.div`
  display: flex;
  width: 522px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`

export const RadioInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`;

export const InputLabel = styled.label`
  color: #061C3D;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const NameInput = styled.input`
  height: 48px;
  width: 280px;
  display: flex;    
  padding: 12px 18px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;
  margin-top: 6px;

  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  ::placeholder {
    color: #838E9E;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const EmailInput = styled.input`
  height: 48px;
  width: 580px;
  display: flex;
  padding: 12px 18px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;
  margin-top: 6px;
  
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  ::placeholder {
    color: #838E9E;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const MessageInput = styled.textarea`
  height: 100px;
  width: 580px;
  display: flex;
  padding: 12px 18px;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid #E6E8EC;
  background: #FFF;
  margin-top: 6px;
  resize: none;

  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  ::placeholder {
    color: #838E9E;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 183.273px;
  height: 48px;
  padding: 0px 16px;
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

export const NameInputs = styled.div`
  display: flex;
  gap: 20px;
`