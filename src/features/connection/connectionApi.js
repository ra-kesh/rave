import axios from "axios";
import API_URL from "../../api/config";

export const getUserConnections = async ({ token }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let response = null;
  try {
    response = await axios.get(`${API_URL}/connection`, config);
    return response.data;
  } catch (error) {
    response = error.message;
  }
  return response;
};

export const followUser = async ({ followId, token }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/connection/follow`,
      { followId: followId },
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};

export const unFollowUser = async ({ followId, token }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/connection/unfollow`,
      { followId: followId },
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};
