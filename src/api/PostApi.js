import axios from "axios";
import API_URL from "./config";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/post`);
    return response.data;
  } catch (err) {
    console.log("Error getting all posts", err.message);
  }
};

export const addNewPost = async (postContent) => {
  try {
    const response = await axios.post(`${API_URL}/post`, postContent, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.log("Error adding new post", err.message);
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/post/${postId}`);
    return response.data;
  } catch (err) {
    console.log("Error getting post by id", err.message);
  }
};

export const updatePost = async (postId, postUpdates) => {
  try {
    const response = await axios.post(
      `${API_URL}/post/${postId}`,
      postUpdates,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error updating post", err.message);
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${API_URL}/post/${postId}`);
    return response.data;
  } catch (err) {
    console.log("Error deleting post", err.message);
  }
};

export const likePost = async (postId, userId) => {
  try {
    const response = await axios.post(
      `${API_URL}/post/${postId}/like`,
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
    console.log("Error liking post", err.message);
  }
};

export const commentPost = async (postId, userId, comment) => {
  try {
    const response = await axios.post(
      `${API_URL}/post/${postId}/comment`,
      { userId: userId, comment: comment },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log("Error commenting on post", err.message);
  }
};
