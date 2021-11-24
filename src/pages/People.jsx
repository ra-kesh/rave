import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Users } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ButtonRounded } from "../components/Button";
import Layout from "../components/Layout";
import { Box, Flex, Text } from "../components/Util";
import {
  followUserAsync,
  loadUserConnections,
  unfollowUserAsync,
} from "../features/connection/connectionService";
import { Tab, TabWrapper, UserWrapper } from "./Profile/Profile.style";

export const People = () => {
  const dispatch = useDispatch();
  const connection = useSelector((state) => state.connection);
  const auth = useSelector((state) => state.auth);
  const [show, setShow] = useState("suggestions");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      loadUserConnections({
        userId: auth.userInfo._id,
      })
    );
  }, [dispatch, auth]);

  const followUser = (user) => {
    dispatch(
      followUserAsync({ followId: user._id, token: auth.userInfo.token })
    );
  };
  const unFollowUser = (user) => {
    dispatch(
      unfollowUserAsync({ followId: user._id, token: auth.userInfo.token })
    );
  };

  return (
    <Layout>
      <Flex flexDirection="column" width={["25rem", "30rem", "40rem"]}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          borderBottom="1px solid var(--color-gray-200)"
        >
          <Box px={"1rem"}>
            <h1>People</h1>
          </Box>
          <Box px={"1rem"}>
            <Users />
          </Box>
        </Flex>
        <TabWrapper height="3.5rem">
          <Tab
            onClick={() => setShow("suggestions")}
            width="30%"
            py="1rem"
            borderBottom={
              show === "suggestions" ? "3px solid var(--color-gray-300)" : null
            }
          >
            <Text textAlign="center" fontSize="large">
              Suggestions
            </Text>
          </Tab>
          <Tab
            width="30%"
            py="1rem"
            borderBottom={
              show === "following" ? "3px solid var(--color-gray-300)" : null
            }
            onClick={() => setShow("following")}
          >
            <Text textAlign="center" fontSize="large">
              Folllowing
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
            <Text textAlign="center" fontSize="large">
              Followers
            </Text>
          </Tab>
        </TabWrapper>
      </Flex>
      <Flex flexDirection="column" width={["25rem", "30rem", "40rem"]}>
        {show === "following" && (
          <div>
            {connection?.userFollowing?.map((user) => (
              <UserWrapper key={user._id} px="2rem">
                <Box
                  onClick={() => navigate(`/user/${user._id}`)}
                  cursor="pointer"
                >
                  <Avatar src={user.avatarImage + `?scale=140`} />
                </Box>
                <Flex
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Box
                    onClick={() => navigate(`/user/${user._id}`)}
                    cursor="pointer"
                  >
                    <Text fontSize="larger">{user.name}</Text>
                    <Text fontSize="smaller">@{user.userName}</Text>
                  </Box>
                  <Box onClick={() => unFollowUser(user)} width="30%">
                    <ButtonRounded height={"2.5rem"} px={12} py={0}>
                      <Text> unfollow</Text>
                    </ButtonRounded>
                  </Box>
                </Flex>
              </UserWrapper>
            ))}
          </div>
        )}
        {show === "followers" && (
          <div>
            {connection?.userFollowers?.map((user) => (
              <UserWrapper key={user._id} px="2rem">
                <Box
                  onClick={() => navigate(`/user/${user._id}`)}
                  cursor="pointer"
                >
                  <Avatar src={user.avatarImage + `?scale=140`} />
                </Box>
                <Flex
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Box
                    onClick={() => navigate(`/user/${user._id}`)}
                    cursor="pointer"
                  >
                    <Text fontSize="larger">{user.name}</Text>
                    <Text fontSize="smaller">@{user.userName}</Text>
                  </Box>
                  {connection?.userFollowing?.find(
                    (fuser) => fuser._id === user._id
                  ) ? (
                    <Box onClick={() => unFollowUser(user)} width="30%">
                      <ButtonRounded height={"2.5rem"} px={12} py={0}>
                        <Text> unfollow</Text>
                      </ButtonRounded>
                    </Box>
                  ) : (
                    <Box onClick={() => followUser(user)} width="30%">
                      <ButtonRounded height={"2.5rem"} px={12} py={0}>
                        <Text>follow</Text>
                      </ButtonRounded>
                    </Box>
                  )}
                </Flex>
              </UserWrapper>
            ))}
          </div>
        )}
        {show === "suggestions" && (
          <div>
            {connection?.userSuggestions?.map((user) => (
              <UserWrapper key={user._id} px="2rem">
                <Box
                  onClick={() => navigate(`/user/${user._id}`)}
                  cursor="pointer"
                >
                  <Avatar src={user.avatarImage + `?scale=140`} />
                </Box>
                <Flex
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Box
                    onClick={() => navigate(`/user/${user._id}`)}
                    cursor="pointer"
                  >
                    <Text fontSize="larger">{user.name}</Text>
                    <Text fontSize="smaller">@{user.userName}</Text>
                  </Box>
                  <Box onClick={() => followUser(user)} width="30%">
                    <ButtonRounded height={"2.5rem"} px={12} py={0}>
                      <Text>follow</Text>
                    </ButtonRounded>
                  </Box>
                </Flex>
              </UserWrapper>
            ))}
          </div>
        )}
      </Flex>
    </Layout>
  );
};
