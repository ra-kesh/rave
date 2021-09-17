import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Text } from "../../components/Util";
import { loadConnections } from "../../features/connection/connectionService";
import { UserWrapper } from "./Profile.style";

const ProfileFollowings = ({ userId }) => {
  const { following } = useSelector((state) => state.connection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadConnections({
        userId,
      })
    );
  }, [dispatch, userId]);
  return (
    <>
      {following?.map((user) => (
        <UserWrapper key={user._id} px="2rem">
          <Box>
            <Avatar src={user.avatarImage + `?scale=140`} />
          </Box>
          <Box>
            <Text>{user.name}</Text>
          </Box>
        </UserWrapper>
      ))}
    </>
  );
};

export default ProfileFollowings;
