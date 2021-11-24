import { useEffect } from "react";
import { Layers } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedPosts } from "../../features/post/postService";
import PostCard from "../Post/PostCard";
import { Box, Flex } from "../Util";

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
    <Flex flexDirection="column" width={["25rem", "30rem", "40rem"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box px={"1rem"}>
          <h1>Feeed</h1>
        </Box>
        <Box px={"1rem"}>
          <Layers />
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

export default PersonalFeed;
