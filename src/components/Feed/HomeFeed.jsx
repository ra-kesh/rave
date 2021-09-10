import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPosts } from "../../features/post/postService";
import PostCard from "../Post/PostCard";
import { Box, Flex } from "../Util";

const HomeFeed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
    // eslint-disable-next-line
  }, []);

  const post = useSelector((state) => state.post);
  const sortedPosts = post?.posts
    ?.slice()
    .sort((a, b) => new Date(b["createdAt"]) - new Date(a["createdAt"]));

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <Box px={"1rem"}>
          <h1>Home</h1>
        </Box>
      </Flex>
      {sortedPosts?.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </Flex>
  );
};

export default HomeFeed;
