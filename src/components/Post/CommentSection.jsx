import { Avatar } from "@material-ui/core";
import React from "react";
import { Trash } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeComment } from "../../features/post/postApi";
import { updateComments } from "../../features/post/postSlice";
import { Box, Flex, Text } from "../Util";
import AddComment from "./AddComment";

const AddCommentWrapper = styled(Flex)`
  gap: 1rem;
  border-radius: 0.5rem;
  &:hover {
    background-color: var(--color-gray-300);
  }
`;

const CommentWrapper = styled(Flex)`
  gap: 1rem;
  border-radius: 0.5rem;
  border-bottom: 1px solid var(--color-gray-200);
  &:hover {
    background-color: var(--color-gray-300);
  }
`;

const CommentSection = ({ post }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deleteComment = async (comment) => {
    const response = await removeComment({ auth, comment, post });
    if (response.post) {
      dispatch(
        updateComments({
          updatedPost: response.post,
          postId: response.post._id,
        })
      );
    } else {
      return {
        error: response,
      };
    }
  };

  return (
    <Flex flexDirection="column">
      <AddCommentWrapper py="2rem" px="1rem" mt="1rem">
        <Box>
          <Avatar />
        </Box>
        <Box width="80%">
          <AddComment post={post} />
        </Box>
      </AddCommentWrapper>
      <Flex pl="2.5rem" flexDirection="column">
        {post?.comments?.map((comment) => (
          <CommentWrapper
            key={comment._id}
            alignItems="center"
            py="1rem"
            px="1rem"
          >
            <Box>
              <Avatar />
            </Box>
            <Flex justifyContent="space-between" width="100%">
              <Text>{comment.text}</Text>
              {comment.user._id === auth.userInfo._id && (
                <Box onClick={() => deleteComment(comment)}>
                  <Trash size="1.1rem" />
                </Box>
              )}
            </Flex>
          </CommentWrapper>
        ))}
      </Flex>
    </Flex>
  );
};

export default CommentSection;
