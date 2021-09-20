import axios from "axios";
import API_URL from "../../api/config";

export const getAllUsers = async () => {
  let response = null;
  try {
    response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    response = error.message;
  }
  return response;
};

export const getSingleUser = async (userId) => {
  let response = null;
  try {
    response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    response = error.message;
  }
  return response;
};

export const updateUser = async (userInfo, auth) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.userInfo.token}`,
    },
  };
  let response = null;
  try {
    response = await axios.post(`${API_URL}/profile`, userInfo, config);
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};
