import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import {
  Box,
  Flex,
  ModalOverlay,
  ModalWrapper,
  Text,
} from "../../components/Util";
import { fetchUserPosts } from "../../features/post/postService";
import { fetchSingleUser } from "../../features/user/userService";
import { CoverWrapper, ProfileWrapper, Tab, TabWrapper } from "./Profile.style";
import ProfileFollowers from "./ProfileFollowers";
import ProfileFollowings from "./ProfileFollowings";
import ProfilePosts from "./ProfilePosts";
import {
  followUserAsync,
  loadUserConnections,
  unfollowUserAsync,
} from "../../features/connection/connectionService";
import { ButtonRounded } from "../../components/Button";
import EditProfile from "../../components/Form/EditProfile";

export const UserProfile = () => {
  const [show, setShow] = useState("post");
  const [showModal, setShowModal] = useState(false);

  const { userId } = useParams();
  const { user } = useSelector((state) => state.user);
  const { userPosts } = useSelector((state) => state.post);
  const { userFollowing } = useSelector((state) => state.connection);
  const { userInfo } = useSelector((state) => state.auth);

  const isFollowing = userFollowing?.find((user) => user._id === userId);

  const dispatch = useDispatch();

  const followOrUnfollowUser = (userId) => {
    if (isFollowing) {
      dispatch(unfollowUserAsync({ followId: userId, token: userInfo.token }));
    } else {
      dispatch(followUserAsync({ followId: userId, token: userInfo.token }));
    }
  };

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
      loadUserConnections({
        userId: userInfo._id,
      })
    );
  }, [dispatch, userInfo]);

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
        <Flex justifyContent="flex-end" height="4rem">
          <Flex justifyContent="center" alignItems="center" width="10rem">
            {userInfo._id === userId ? (
              <Box
                width="100%"
                onClick={() => setShowModal((showModal) => !showModal)}
              >
                <ButtonRounded height={"3rem"} px={16} py={0}>
                  <Text>Edit</Text>
                </ButtonRounded>
              </Box>
            ) : (
              <Box onClick={() => followOrUnfollowUser(userId)} width="100%">
                <ButtonRounded height={"3rem"} px={16} py={0}>
                  <Text>{isFollowing ? "following" : "follow"}</Text>
                </ButtonRounded>
              </Box>
            )}
          </Flex>
        </Flex>
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

        {show === "post" && <ProfilePosts userPosts={userPosts} />}
        {show === "followers" && <ProfileFollowers userId={userId} />}
        {show === "following" && <ProfileFollowings userId={userId} />}
        {showModal && (
          <ModalWrapper p={"5rem"}>
            <ModalOverlay onClick={() => setShowModal(false)} />
            <EditProfile />
          </ModalWrapper>
        )}
      </Flex>
    </Layout>
  );
};
