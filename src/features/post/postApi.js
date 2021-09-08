import axios from "axios";
import API_URL from "../../api/config";

export const getAllPosts = async () => {
  let response = null;
  try {
    response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    response = error.message;
  }
  return response;
};
export const getFeedPosts = async ({ token }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let response = null;
  try {
    response = await axios.get(`${API_URL}/posts/feed`, config);
    return response.data;
  } catch (error) {
    response = error.message;
  }
  return response;
};

export const addNewPost = async ({ postedBy, content, token }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = null;

  try {
    response = await axios.post(
      `${API_URL}/posts`,
      { postedBy, content },
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};

export const deletePost = async ({ _id, token }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: {
      postId: _id,
    },
  };
  let response = null;

  try {
    response = await axios.delete(`${API_URL}/posts`, config);
    return response;
  } catch (err) {
    response = err.message;
  }
  return response;
};

export const likePost = async ({ auth, token, post }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/posts/like`,
      { postId: post._id },
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};

export const disLikePost = async ({ auth, token, post }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/posts/dislike`,
      { postId: post._id, userId: auth.userInfo._id },
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};

export const addComment = async ({ auth, content, currentPost }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.userInfo.token}`,
    },
  };
  let response = null;
  try {
    response = await axios.post(
      `${API_URL}/posts/${currentPost._id}/comment`,
      {
        userId: auth.userInfo._id,
        text: content,
      },
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};
export const removeComment = async ({ auth, comment, currentPost }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.userInfo.token}`,
    },
    data: {
      commentId: comment._id,
    },
  };
  let response = null;
  try {
    response = await axios.delete(
      `${API_URL}/posts/${currentPost._id}/comment`,
      config
    );
    return response.data;
  } catch (err) {
    response = err.message;
  }
  return response;
};
