import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts, getFeedPosts, addNewPost } from "./postApi";

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

export const addPost = createAsyncThunk(
  "post/addPost",
  async ({ postedBy, content, token }) => {
    const response = await addNewPost({ postedBy, content, token });
    if (response.post) {
      return {
        post: response.post,
        followingPost: response.post,
      };
    } else {
      return {
        error: response,
      };
    }
  }
);
