import styled, { css } from "styled-components";

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px auto;
  width: 85vw;
  @media (min-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 992px) {
    width: 35vw;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles};
`;
export const StyledButton = styled.button`
  display: block;
  background-color: black;
  color: #fff;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 24px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #be185d;
  }
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 16px;
  margin: 16px 0;

  legend {
    padding: 0 16px;
  }

  label {
    padding-right: 16px;
  }

  input {
    margin-right: 8px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 500;
`;
