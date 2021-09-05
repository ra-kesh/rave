import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts, addPost, fetchFeedPosts } from "./postService";

const initialState = {
  posts: [],
  followingPosts: [],
  post: {},
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateLikesOnPost: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
    },
    updateLikesOnFollowingPost: (state, action) => {
      state.followingPosts = state.followingPosts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
    },
    updateComments: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
    },
    filteredPosts: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.removedPost._id
      );
    },
    filteredFollowingPosts: (state, action) => {
      state.followingPosts = state.followingPosts.filter(
        (post) => post._id !== action.payload.removedPost._id
      );
    },
  },
  extraReducers: {
    [fetchAllPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.laoding = false;
    },
    [fetchAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [fetchFeedPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchFeedPosts.fulfilled]: (state, action) => {
      state.followingPosts = action.payload.followingPosts;
      state.laoding = false;
    },
    [fetchFeedPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [addPost.pending]: (state, action) => {
      state.loading = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.posts = state.posts.concat(action.payload.post);
      state.followingPosts = state.followingPosts.concat(
        action.payload.followingPost
      );

      state.loading = false;
    },
    [addPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  updateComments,
  updateLikesOnPost,
  filteredPosts,
  filteredFollowingPosts,
  updateLikesOnFollowingPost,
} = postSlice.actions;

export default postSlice.reducer;
