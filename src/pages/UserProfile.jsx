import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import Layout from "../components/Layout";
import PostCard from "../components/Post/PostCard";
import { Box, Flex, Text } from "../components/Util";
import { fetchUserPosts } from "../features/post/postService";
import { fetchSingleUser } from "../features/user/userService";

const CoverWrapper = styled(Box)`
  position: relative;
  border-radius: 0.5rem;
`;

const ProfileWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  bottom: -4rem;
  left: 24px;
  background: var(--color-background);
`;

const UserProfile = () => {
  const { userId } = useParams();
  const { user } = useSelector((state) => state.user);
  const { userPosts } = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(fetchSingleUser(userId));
    })();
  }, [dispatch, userId]);

  useEffect(() => {
    (async () => {
      await dispatch(fetchUserPosts({ userId }));
    })();
  }, [dispatch, userId]);

  // let userPosts = [];
  // userPosts = post.posts?.filter((post) => post.postedBy._id === userId);

  return (
    <Layout>
      <Flex flexDirection="column">
        <Flex alignItems="center">
          <Box px={"1rem"}>
            <h1>Profile</h1>
          </Box>
        </Flex>
        <Flex>
          <CoverWrapper width={["25rem", "30rem", "40rem"]} height="16rem">
            <img
              src={user.coverImage + `?scale=145`}
              alt=""
              srcset=""
              className="coverImage"
            />
            <ProfileWrapper>
              <img
                src={user.avatarImage + `?scale=110`}
                alt=""
                className="profileImage"
              />
            </ProfileWrapper>
          </CoverWrapper>
        </Flex>
        <Flex height="4rem"></Flex>
        <Flex px="2rem" flexDirection="column" minHeight="4rem" py="1rem">
          <Text fontSize="x-large">{user.name}</Text>
          <Text fontSize="large" color="var(--color-gray-700)">
            @{user.userName}
          </Text>
          <Text fontSize="large" mt="2rem">
            Here to Rave..
          </Text>
        </Flex>
        {userPosts?.map((post) => (
          <div key={post._id}>
            <PostCard post={post} />
          </div>
        ))}
      </Flex>
    </Layout>
  );
};

export default UserProfile;
