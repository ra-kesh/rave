import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../../features/post/postApi";
import {
  filteredPosts,
  filteredFollowingPosts,
} from "../../features/post/postSlice";

import { Flex } from "../Util";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { MessageCircle } from "react-feather";
import {
  disLikePostAsync,
  likePostAsync,
} from "../../features/post/postService";

const PostDetailCard = ({ post }) => {
  const { _id, likes, comments, postedBy } = post;

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { token } = auth.userInfo;

  const isLiked = likes.find((like) => like.userId === auth.userInfo._id);

  const removePost = async () => {
    const response = await deletePost({ _id, token });

    const {
      data: { removedPost },
    } = response;

    if (removedPost) {
      dispatch(filteredPosts({ removedPost }));
      dispatch(filteredFollowingPosts({ removedPost }));
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
    <Flex
      flexDirection="column"
      borderBottom="1px solid black"
      mb="2rem"
      width={["20rem", "30rem", "40rem"]}
      py={"1rem"}
    >
      <Flex>
        by {postedBy?.name} aka {postedBy?.userName}
      </Flex>
      <Flex>
        <p>{post.content}</p>
      </Flex>
      <Flex>
        <Flex alignItems="center" onClick={() => likeHandeller()} mr={"1rem"}>
          {isLiked ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
          {likes.length}
        </Flex>
        <Flex alignItems="center">
          <MessageCircle />
          {comments.length}
        </Flex>
      </Flex>
      {/* 
      {auth.userInfo._id === postedBy?._id && (
        <button onClick={() => removePost()}>delete</button>
      )} */}
    </Flex>
  );
};

export default PostDetailCard;
