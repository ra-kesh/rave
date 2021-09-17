import React from "react";
import PostCard from "../../components/Post/PostCard";

const ProfilePosts = ({ userPosts }) => {
  return (
    <>
      {userPosts?.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </>
  );
};

export default ProfilePosts;
