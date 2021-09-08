import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Flex } from "../Util";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import { MessageCircle } from "react-feather";
import {
  disLikePostAsync,
  likePostAsync,
} from "../../features/post/postService";

const PostCard = ({ post }) => {
  const { _id, likes, postedBy, comments } = post;

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = auth.userInfo;

  const isLiked = post.likes.find((like) => like.userId === auth.userInfo._id);

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
      <Flex onClick={() => navigate(`/post/${_id}`)}>
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

export default PostCard;
