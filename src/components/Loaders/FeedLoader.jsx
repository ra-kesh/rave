import React from "react";
import ContentLoader from "react-content-loader";

const FeedLoader = (props) => (
  <>
    <ContentLoader
      speed={2}
      width={["20rem", "30rem", "40rem"]}
      height={600}
      viewBox="0 0 600 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#dcdbdb"
      {...props}
    >
      <circle cx="35" cy="36" r="20" />
      <rect x="63" y="15" rx="2" ry="2" width="140" height="10" />
      <rect x="62" y="39" rx="2" ry="2" width="140" height="10" />
      <rect x="18" y="79" rx="2" ry="2" width="596" height="196" />
    </ContentLoader>
  </>
);

export default FeedLoader;
