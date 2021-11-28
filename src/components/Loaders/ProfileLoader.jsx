import React from "react";
import ContentLoader from "react-content-loader";

const ProfileLoader = (props) => (
  <ContentLoader
    speed={2}
    width={["20rem", "30rem", "40rem"]}
    height={600}
    viewBox="0 0 601 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdbdb"
    {...props}
  >
    <circle cx="124" cy="310" r="85" />
    <rect x="479" y="314" rx="2" ry="2" width="122" height="38" />
    <rect x="9" y="26" rx="2" ry="2" width="594" height="268" />
    <rect x="16" y="447" rx="2" ry="2" width="565" height="22" />
    <rect x="21" y="485" rx="2" ry="2" width="373" height="22" />
  </ContentLoader>
);

export default ProfileLoader;
