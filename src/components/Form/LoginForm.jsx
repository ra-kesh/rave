import React, { useState } from "react";
import {
  StyledButton,
  StyledError,
  StyledForm,
  FormWrapper,
  StyledInput,
} from "./Form.style";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/auth/authServices";
// import { userLogin } from "../features/auth/authServices"

const initialState = {
  email: "someone@gmail.com",
  password: "someone",
};

export const LoginForm = () => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in data) {
      if (data[key] === "") {
        setError(`${key} cannot be blank `);
        return;
      }
    }
    dispatch(userLogin(data));
    setError("");
    setData(initialState);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData((prev) => ({ ...prev, [inputName]: value }));
  };

  const ErrorDiv = () => {
    return (
      <StyledError>
        <p>{error}</p>
      </StyledError>
    );
  };

  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <StyledInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>

          <StyledInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleInput}
          />

          {error && <ErrorDiv />}
          <StyledButton type="submit">submit</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  );
};
