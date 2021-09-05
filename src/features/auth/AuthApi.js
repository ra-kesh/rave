import axios from "axios";
import API_URL from "../../api/config";

export const loginUser = async (userCredentials) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/users/login`,
      userCredentials,
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    response = error.message;
  }
  return response;
};

export const registerUser = async (userCredentials) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/users/signup`,
      userCredentials,
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  } catch (error) {
    response = error.message;
  }
  return response;
};
