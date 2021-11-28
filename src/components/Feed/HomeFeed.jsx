import { useEffect } from "react";
import { Home } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postService";
import FeedLoader from "../Loaders/FeedLoader";
import PostCard from "../Post/PostCard";
import { Box, Flex } from "../Util";

const HomeFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line
  }, []);

  const { posts, loading } = useSelector((state) => state.post);

  const sortedPosts = posts
    ?.slice()
    .sort((a, b) => new Date(b["createdAt"]) - new Date(a["createdAt"]));

  return (
    <Flex flexDirection="column" width={["25rem", "30rem", "40rem"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box px={"1rem"}>
          <h1>Home</h1>
        </Box>
        <Box px={"1rem"}>
          <Home />
        </Box>
      </Flex>
      {loading && <FeedLoader />}
      {sortedPosts?.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </Flex>
  );
};

export default HomeFeed;
