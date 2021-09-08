import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedPosts } from "../../features/post/postService";
import PostCard from "../Post/PostCard";

const PersonalFeed = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);

  const sortedPosts = post.followingPosts
    ?.slice()
    .sort((a, b) => new Date(b["createdAt"]) - new Date(a["createdAt"]));

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
      {sortedPosts?.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PersonalFeed;
