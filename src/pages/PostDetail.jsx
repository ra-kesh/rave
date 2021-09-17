import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import PostCard from "../components/Post/PostCard";
import { Flex } from "../components/Util";
import { addComment, removeComment } from "../features/post/postApi";
import { updateComments } from "../features/post/postSlice";
import { fetchSinglePost } from "../features/post/postService";

export const PostDetail = () => {
  const [content, setContent] = useState("");
  const { postId } = useParams();
  const { singlePost } = useSelector((state) => state.post);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchSinglePost(postId));
    })();
  }, [dispatch, postId]);

  const commentHandler = async () => {
    const response = await addComment({ auth, content, singlePost });
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
    setContent("");
  };

  const deleteComment = async (comment) => {
    const response = await removeComment({ auth, comment, singlePost });
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
    <Layout>
      <Flex background="white" flexDirection="column">
        <h1>post detail</h1>
        <div>
          <PostCard post={singlePost} />
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              //   maxLength={5}
            ></textarea>
            <button onClick={() => commentHandler()}>comment</button>
          </div>
          <div>
            {singlePost?.comments?.map((comment) => (
              <div key={comment._id}>
                <p>{comment.text}</p>
                {comment.userId === auth.userInfo._id && (
                  <button onClick={() => deleteComment(comment)}>delete</button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </Layout>
  );
};
