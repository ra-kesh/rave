import React from "react";

const AddPost = ({ content, setContent, addPostHandeller }) => {
  return (
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={5}
      ></textarea>
      <div>
        <button onClick={() => addPostHandeller()}>add post</button>
      </div>
    </div>
  );
};

export default AddPost;
