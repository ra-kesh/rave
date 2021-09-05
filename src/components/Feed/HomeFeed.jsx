import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postService";
import PostCard from "../Post/PostCard";

const HomeFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());

    // eslint-disable-next-line
  }, []);

  const post = useSelector((state) => state.post);
  const sortedPosts = post.posts
    ?.slice()
    .sort((a, b) => new Date(b["createdAt"]) - new Date(a["createdAt"]));

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

export default HomeFeed;
