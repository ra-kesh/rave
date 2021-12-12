import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllPosts,
  addPost,
  fetchFeedPosts,
  likePostAsync,
  disLikePostAsync,
  fetchSinglePost,
  fetchUserPosts,
} from "./postService";

const initialState = {
  posts: [],
  followingPosts: [],
  singlePost: {},
  userPosts: [],
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateComments: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
      state.followingPosts = state.followingPosts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
      state.userPosts = state.userPosts.map((post) => {
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
    filteredUserPosts: (state, action) => {
      state.userPosts = state.userPosts.filter(
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
      state.loading = false;
    },
    [fetchAllPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [fetchSinglePost.pending]: (state) => {
      state.loading = true;
    },
    [fetchSinglePost.fulfilled]: (state, action) => {
      state.singlePost = action.payload.post;
      state.loading = false;
    },
    [fetchSinglePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [fetchUserPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      state.userPosts = action.payload.userPosts;
      state.loading = false;
    },
    [fetchUserPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [fetchFeedPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchFeedPosts.fulfilled]: (state, action) => {
      state.followingPosts = action.payload.followingPosts;
      state.loading = false;
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
      state.followingPosts = state.followingPosts.concat(action.payload.post);
      state.loading = false;
    },
    [addPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    [likePostAsync.pending]: (state, action) => {
      // state.loading = true;
    },

    [likePostAsync.fulfilled]: (state, action) => {
      // state.loading = false;
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
      state.followingPosts = state.followingPosts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
      state.userPosts = state.userPosts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
    },

    [likePostAsync.rejected]: (state, action) => {
      // state.loading = false;
      state.error = action.payload.error;
    },

    [disLikePostAsync.pending]: (state, action) => {
      // state.loading = true;
    },

    [disLikePostAsync.fulfilled]: (state, action) => {
      // state.loading = false;
      state.posts = state.posts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
      state.followingPosts = state.followingPosts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
      state.userPosts = state.userPosts.map((post) => {
        if (post._id === action.payload.postId) {
          post = action.payload.updatedPost;
        }
        return post;
      });
    },
    [disLikePostAsync.rejected]: (state, action) => {
      // state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  updateComments,
  filteredPosts,
  filteredFollowingPosts,
  filteredUserPosts,
} = postSlice.actions;

export default postSlice.reducer;
