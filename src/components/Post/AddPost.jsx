import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/post/postService";
import { Button } from "../Button";
import { Flex } from "../Util";

const AddPost = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const addPostHandeller = () => {
    if (content !== "") {
      dispatch(
        addPost({
          postedBy: auth.userInfo._id,
          content: content,
          token: auth.userInfo.token,
        })
      );
      setContent("");
    }
  };

  return (
    <Flex
      flexDirection="column"
      width={["30rem", "35rem", "40rem"]}
      height={"20rem"}
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="white"
      borderRadius={10}
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="textArea"
        placeholder="rave here ..."
      />

      <Flex width={"95%"} onClick={() => addPostHandeller()}>
        <Button height={"3rem"} px={16} py={0}>
          submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddPost;
