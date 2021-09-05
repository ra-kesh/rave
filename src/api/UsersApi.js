import axios from "axios";
import API_URL from "./config";

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/user/`);
    return response.data;
  } catch (err) {
    console.log("Error fetching all users", err.message);
  }
};

export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  } catch (err) {
    console.log("Error fetching user by id", err.message);
  }
};

export const updateUserDetails = async (userId, userDetails) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/${userId}`,
      {
        userId: userId,
        updates: userDetails,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error updating user details", err.message);
  }
};

export const followUserById = async (currentUserId, userToFollowId) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/${userToFollowId}/follow`,
      {
        userId: currentUserId,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error following user", err.message);
  }
};

export const unfollowUserById = async (currentUserId, userToUnfollowId) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/${currentUserId}/unfollow`,
      {
        userId: userToUnfollowId,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error unfollowing user", err.message);
  }
};

export const deleteUserAccount = async (userId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/user/${userId}`,
      { userId: userId },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error deleting user accout", err.message);
  }
};
