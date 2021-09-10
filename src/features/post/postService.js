import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPosts,
  getFeedPosts,
  addNewPost,
  likePost,
  disLikePost,
  getSinglePost,
} from "./postApi";

export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllPosts",
  async () => {
    const response = await getAllPosts();
    if (response.posts) {
      return {
        posts: response.posts,
        loading: false,
        error: null,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
export const fetchFeedPosts = createAsyncThunk(
  "post/fetchFeedPosts",
  async ({ token }) => {
    const response = await getFeedPosts({ token });
    if (response.followingPosts) {
      return {
        followingPosts: response.followingPosts,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);

export const fetchSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (postId) => {
    const response = await getSinglePost(postId);
    if (response.post) {
      return {
        post: response.post,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);

export const addPost = createAsyncThunk(
  "post/addPost",
  async ({ postedBy, content, token }) => {
    const response = await addNewPost({ postedBy, content, token });
    if (response.post) {
      return {
        post: response.post,
        // followingPost: response.post,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
export const likePostAsync = createAsyncThunk(
  "post/likePost",
  async ({ post, auth, token }) => {
    const response = await likePost({ post, token, auth });
    if (response.post) {
      return {
        updatedPost: response.post,
        postId: response.post._id,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
export const disLikePostAsync = createAsyncThunk(
  "post/likePost",
  async ({ post, auth, token }) => {
    const response = await disLikePost({ post, token, auth });
    if (response.post) {
      return {
        updatedPost: response.post,
        postId: response.post._id,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
