import React, { useState } from "react";
import {
  StyledButton,
  StyledError,
  StyledForm,
  FormWrapper,
  StyledInput,
} from "./Form.style";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  // const token = userInfo.token;

  const initialState = {
    name: userInfo.name,
    userName: userInfo.userName,
    email: userInfo.email,
    bio: userInfo.bio,
    website: userInfo.website,
    location: userInfo.location,
  };

  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");

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

  const handleUpdate = (e) => {
    e.preventDefault();
    // for (let key in data) {
    //   if (data[key] === "") {
    //     setError(`${key} cannot be blank `);
    //     return;
    //   }
    // }
    // dispatch(userUpdate(data, token));
    setError("");
    // setData(initialState);
  };
  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleUpdate}>
          <h2>Edit Profile</h2>
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
          <label htmlFor="bio">Bio</label>
          <StyledInput
            id="bio"
            type="bio"
            name="bio"
            value={data.bio}
            onChange={handleInput}
          />

          <label htmlFor="website">Website</label>
          <StyledInput
            id="website"
            type="website"
            name="website"
            value={data.website}
            onChange={handleInput}
          />

          <label htmlFor="location">Location</label>
          <StyledInput
            id="location"
            type="location"
            name="location"
            value={data.location}
            onChange={handleInput}
          />

          {error && <ErrorDiv />}
          <StyledButton type="submit">update</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  );
};

export default EditProfile;
