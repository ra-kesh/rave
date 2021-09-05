import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost, disLikePost, likePost } from "../../features/post/postApi";
import {
  filteredPosts,
  updateLikesOnPost,
  updateLikesOnFollowingPost,
  filteredFollowingPosts,
} from "../../features/post/postSlice";

const PostCard = ({ post }) => {
  const { _id, likes, postedBy } = post;

  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { token } = auth.userInfo;

  const isLiked = likes.find((like) => like.userId === auth.userInfo._id);

  const removePost = async () => {
    const response = await deletePost({ _id, token });

    const {
      data: { removedPost },
    } = response;

    if (removedPost) {
      dispatch(filteredPosts({ removedPost }));
      dispatch(filteredFollowingPosts({ removedPost }));
    } else {
      return {
        error: response,
      };
    }
  };

  const likeHandeller = async () => {
    if (isLiked === undefined) {
      const response = await likePost({ post, token, auth });
      if (response.post) {
        dispatch(
          updateLikesOnPost({
            updatedPost: response.post,
            postId: response.post._id,
          })
        );
        dispatch(
          updateLikesOnFollowingPost({
            updatedPost: response.post,
            postId: response.post._id,
          })
        );
      } else {
        return {
          error: response,
        };
      }
    } else {
      const response = await disLikePost({ post, token, auth });
      if (response.post) {
        dispatch(
          updateLikesOnPost({
            updatedPost: response.post,
            postId: response.post._id,
          })
        );
        dispatch(
          updateLikesOnFollowingPost({
            updatedPost: response.post,
            postId: response.post._id,
          })
        );
      } else {
        return {
          error: response,
        };
      }
    }
  };

  return (
    <div style={{ border: "1px solid black", marginBottom: "1rem" }}>
      <p>{post.content}</p>
      <p>{likes.length}</p>
      <p>
        by {postedBy?.name} aka {postedBy?.userName}
      </p>
      <button onClick={() => likeHandeller()}>
        {isLiked ? `liked by you` : "not liked by you"}
      </button>
      <button>comments{post.comments.length}</button>
      {auth.userInfo._id === postedBy?._id && (
        <button onClick={() => removePost()}>delete</button>
      )}
      <button onClick={() => navigate(`/post/${_id}`)}>detail</button>
    </div>
  );
};

export default PostCard;
