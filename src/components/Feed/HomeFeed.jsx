import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchAllPosts } from "../../features/post/postService";
import PostCard from "../Post/PostCard";
import { Box, Flex } from "../Util";

const FeedHeader = styled(Flex)`
  gap: 1rem;
  align-items: center;
  ${"" /* border-bottom: 1px solid var(--color-gray-300); */}
`;

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
      <FeedHeader>
        {/* <Box>
          <ArrowLeft />
        </Box> */}
        <Box px={"1rem"}>
          <h1>Home</h1>
        </Box>
      </FeedHeader>
      {sortedPosts?.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </Flex>
  );
};

export default HomeFeed;
