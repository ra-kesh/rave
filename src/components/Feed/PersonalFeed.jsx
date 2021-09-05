import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedPosts } from "../../features/post/postService";
import PostCard from "../Post/PostCard";

const PersonalFeed = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(
      fetchFeedPosts({
        token: auth.userInfo.token,
      })
    );

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Feeed</h1>
      {post?.followingPosts?.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PersonalFeed;
