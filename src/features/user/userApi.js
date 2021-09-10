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
