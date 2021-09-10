import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Text } from "../Util";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { MessageCircle } from "react-feather";
import {
  disLikePostAsync,
  likePostAsync,
} from "../../features/post/postService";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import CommentSection from "./CommentSection";

const PostCardWrapper = styled(Flex)`
  flex-direction: row;
  border-top: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;
  gap: 1rem;

  &:hover {
    background: var(--color-gray-200);
  }
`;

const PostCard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const { _id, likes, postedBy, comments } = post;

  const location = useLocation();
  const path = location.pathname + location.search;

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = auth.userInfo;

  const isLiked = post.likes?.find(
    (like) => like.user._id === auth.userInfo._id
  );

  // const removePost = async () => {
  //   const response = await deletePost({ _id, token });

  //   const {
  //     data: { removedPost },
  //   } = response;

  //   if (removedPost) {
  //     dispatch(filteredPosts({ removedPost }));
  //     dispatch(filteredFollowingPosts({ removedPost }));
  //   } else {
  //     return {
  //       error: response,
  //     };
  //   }
  // };

  const likeHandeller = () => {
    if (isLiked === undefined) {
      dispatch(likePostAsync({ post, auth, token }));
    } else {
      dispatch(disLikePostAsync({ post, auth, token }));
    }
  };

  return (
    <PostCardWrapper
      width={["20rem", "30rem", "40rem"]}
      pt={"1rem"}
      pb={"2rem"}
      px={"1rem"}
    >
      <Flex>
        <Box>
          <Avatar src={postedBy?.avatarImage} />
        </Box>
      </Flex>
      <Flex flexDirection="column" width={"100%"}>
        <Flex flexDirection="column">
          <Text fontSize="larger"> {postedBy?.name}</Text>
          <Text fontSize="smaller" color="var(--color-gray-800)">
            @{postedBy?.userName}{" "}
          </Text>
        </Flex>
        <Flex
          minHeight={"5rem"}
          onClick={() =>
            path !== `/post/${post._id}` ? navigate(`/post/${_id}`) : null
          }
        >
          <p>{post.content}</p>
        </Flex>
        <Flex>
          <Flex alignItems="center" onClick={() => likeHandeller()} mr={"1rem"}>
            {isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
            {likes?.length}
          </Flex>
          <Flex
            alignItems="center"
            onClick={() => setShowComments((showComments) => !showComments)}
          >
            <MessageCircle />
            {comments?.length}
          </Flex>
        </Flex>
        {showComments && <CommentSection post={post} />}
      </Flex>

      {/* 
      {auth.userInfo._id === postedBy?._id && (
        <button onClick={() => removePost()}>delete</button>
      )} */}
    </PostCardWrapper>
  );
};

export default PostCard;
