import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../features/post/postApi";
import { updateComments } from "../../features/post/postSlice";

const AddComment = ({ post }) => {
  const [content, setContent] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const commentHandler = async (e) => {
    e.preventDefault();
    const response = await addComment({ auth, content, post });
    if (response.post) {
      dispatch(
        updateComments({
          updatedPost: response.post,
          postId: response.post._id,
        })
      );
    } else {
      return {
        error: response,
      };
    }
    setContent("");
  };

  return (
    <form onSubmit={commentHandler}>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="comment-input"
      />
    </form>
  );
};

export default AddComment;
