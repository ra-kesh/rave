import React, { useState } from "react";
import {
  StyledButton,
  StyledError,
  StyledForm,
  FormWrapper,
  StyledInput,
} from "./Form.style";
import { useDispatch } from "react-redux";
import { userSignup } from "../../features/auth/authServices";

const initialState = {
  name: "someone",
  userName: "someone",
  email: "someone@gmail.com",
  password: "someone",
  confirmPassword: "someone",
};

export const SignUpForm = () => {
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
    if (data.password !== data.confirmPassword) {
      setError(`password should match `);
      return;
    }
    dispatch(userSignup(data));
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
          <h2>Sign up</h2>
          <label htmlFor="name">name</label>
          <StyledInput
            id="name"
            type="name"
            name="name"
            value={data.name}
            onChange={handleInput}
          />
          <label htmlFor="userName">User Name</label>
          <StyledInput
            id="userName"
            type="userName"
            name="userName"
            value={data.userName}
            onChange={handleInput}
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <StyledInput
            id="confirmPassword"
            type="confirmPassword"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleInput}
          />

          {error && <ErrorDiv />}
          <StyledButton type="submit">submit</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  );
};
