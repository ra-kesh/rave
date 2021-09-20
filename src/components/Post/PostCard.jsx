import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Text } from "../Util";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { MessageCircle, Trash, MoreVertical } from "react-feather";
import {
  disLikePostAsync,
  likePostAsync,
} from "../../features/post/postService";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useState } from "react";
import CommentSection from "./CommentSection";
import { deletePost } from "../../features/post/postApi";
import {
  filteredFollowingPosts,
  filteredPosts,
  filteredUserPosts,
} from "../../features/post/postSlice";

const PostCardWrapper = styled(Flex)`
  flex-direction: row;
  border-top: 1px solid var(--color-gray-200);
  gap: 1rem;

  &:hover {
    border-radius: 0.5rem;
    background: var(--color-gray-200);
  }
`;

const AvatarWrapper = styled(Box)`
  cursor: pointer;
`;

const UserDetailWrapper = styled(Flex)`
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
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

  const removePost = async () => {
    const response = await deletePost({ _id, token });

    const {
      data: { removedPost },
    } = response;

    if (removedPost) {
      dispatch(filteredPosts({ removedPost }));
      dispatch(filteredFollowingPosts({ removedPost }));
      dispatch(filteredUserPosts({ removedPost }));
    } else {
      return {
        error: response,
      };
    }
  };

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
        <AvatarWrapper onClick={() => navigate(`/user/${postedBy._id}`)}>
          <Avatar src={postedBy?.avatarImage + `?scale=140`} />
        </AvatarWrapper>
      </Flex>
      <Flex flexDirection="column" width={"100%"}>
        <UserDetailWrapper flexDirection="column">
          <Box
            width="min-content"
            onClick={() => navigate(`/user/${postedBy._id}`)}
          >
            <Text fontSize="larger"> {postedBy?.name}</Text>
            <Text fontSize="smaller" color="var(--color-gray-800)">
              @{postedBy?.userName}{" "}
            </Text>
          </Box>
          {path === `/user/${auth.userInfo._id}` ? (
            <Box>
              <Trash size="1.1rem" onClick={() => removePost()} />
            </Box>
          ) : (
            <Box>
              <MoreVertical size="1.1rem" />
            </Box>
          )}
        </UserDetailWrapper>
        <Flex
          minHeight={"5rem"}
          // onClick={() =>
          //   path !== `/post/${post._id}` ? navigate(`/post/${_id}`) : null
          // }
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
