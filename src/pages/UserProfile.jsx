import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import Layout from "../components/Layout";
import PostCard from "../components/Post/PostCard";
import { Box, Flex, Text } from "../components/Util";
import { loadConnections } from "../features/connection/connectionService";
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

const TabWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
`;

const Tab = styled(Box)`
  cursor: pointer;
  &:hover {
    background: var(--color-gray-300);
  }
`;

const UserWrapper = styled(Flex)`
  align-items: center;
  gap: 1rem;
  height: 5rem;
  border-top: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;

  &:hover {
    background: var(--color-gray-300);
  }
`;

const UserProfile = () => {
  const [show, setShow] = useState("post");
  const { userId } = useParams();
  const { user } = useSelector((state) => state.user);
  const { userPosts } = useSelector((state) => state.post);
  const { followers, following } = useSelector((state) => state.connection);

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

  useEffect(() => {
    dispatch(
      loadConnections({
        userId,
      })
    );
  }, [dispatch, userId]);

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
        <Flex height="2rem"></Flex>

        <TabWrapper height="3.5rem">
          <Tab
            onClick={() => setShow("post")}
            width="30%"
            py="1rem"
            borderBottom={
              show === "post" ? "3px solid var(--color-gray-300)" : null
            }
          >
            <Text textAlign="center" fontSize="large">
              Posts
            </Text>
          </Tab>
          <Tab
            width="30%"
            py="1rem"
            borderBottom={
              show === "followers" ? "3px solid var(--color-gray-300)" : null
            }
            onClick={() => setShow("followers")}
          >
            <Text textAlign="center">Followers</Text>
          </Tab>
          <Tab
            width="30%"
            py="1rem"
            borderBottom={
              show === "following" ? "3px solid var(--color-gray-300)" : null
            }
            onClick={() => setShow("following")}
          >
            <Text textAlign="center">Folllowing</Text>
          </Tab>
        </TabWrapper>

        {show === "post" && (
          <>
            {userPosts?.map((post) => (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            ))}
          </>
        )}
        {show === "followers" && (
          <>
            {followers?.map((user) => (
              <div key={user._id}>
                <h3>{user.name}</h3>
              </div>
            ))}
          </>
        )}
        {show === "following" && (
          <>
            {following?.map((user) => (
              <UserWrapper key={user._id} px="2rem">
                <Box>
                  <Avatar src={user.avatarImage} />
                </Box>
                <Box>
                  <Text>{user.name}</Text>
                </Box>
              </UserWrapper>
            ))}
          </>
        )}
      </Flex>
    </Layout>
  );
};

export default UserProfile;
