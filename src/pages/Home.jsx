import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeFeed from "../components/Feed/HomeFeed";
import PersonalFeed from "../components/Feed/PersonalFeed";
import AddPost from "../components/Post/AddPost";
import { userLogout } from "../features/auth/authSlice";
import { addPost } from "../features/post/postService";

export const Home = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const addPostHandeller = () => {
    if (content !== "") {
      dispatch(
        addPost({
          postedBy: auth.userInfo._id,
          content: content,
          token: auth.userInfo.token,
        })
      );
      setContent("");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(userLogout())}>logout</button>
      <div>
        <AddPost
          content={content}
          setContent={setContent}
          addPostHandeller={addPostHandeller}
        />
      </div>
      <div>
        <button onClick={() => navigate("/people")}>People</button>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <HomeFeed />
        </div>
        <div>
          <PersonalFeed />
        </div>
      </div>
    </div>
  );
};
