import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchAllUsers } from "../../features/user/userService";
import { Box, Flex, Text } from "../Util";

export const UserWrapper = styled(Flex)`
  align-items: center;
  gap: 1rem;
  height: 5rem;
  border-top: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;

  &:hover {
    background: var(--color-gray-300);
  }
`;

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  console.log(users);

  const filteredUsers = users?.filter((user) => {
    const { name, userName, bio, website, email, location } = user;

    let serachItems = {
      name,
      userName,
      bio,
      website,
      email,
      location,
    };

    let x = Object.values(serachItems).join("");

    if (x.toLowerCase().includes(searchText.toLowerCase())) {
      return user;
    }
    return null;
  });

  return (
    <div style={{ position: "fixed", right: 20, top: "1.5rem" }}>
      <div className="search-container">
        <input
          className="search expandright"
          id="searchright"
          type="search"
          name="q"
          placeholder="Search People"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoComplete="off"
        />
        <label className="button searchbutton" htmlFor="searchright">
          <span className="mglass">&#9906;</span>
        </label>
      </div>

      {searchText !== "" && (
        <Flex
          flexDirection="column"
          width={250}
          alignItems="left"
          position="absolute"
          right={10}
          background="var(--color-gray-200)"
          mt="1rem"
          borderRadius=".5rem"
        >
          {filteredUsers?.map((user) => {
            return (
              <UserWrapper key={user?._id} px="1rem">
                <Box
                  onClick={() => navigate(`/user/${user._id}`)}
                  cursor="pointer"
                >
                  <Avatar src={user?.avatarImage + `?scale=140`} />
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
                    <Text fontSize="larger">{user?.name}</Text>
                    <Text fontSize="smaller">@{user?.userName}</Text>
                  </Box>
                </Flex>
              </UserWrapper>
            );
          })}
        </Flex>
      )}
    </div>
  );
};
