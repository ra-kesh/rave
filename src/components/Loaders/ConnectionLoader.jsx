import React from "react";
import ContentLoader from "react-content-loader";

const ConnectionLoader = (props) => (
  <ContentLoader
    speed={2}
    width={["20rem", "30rem", "40rem"]}
    height={460}
    viewBox="0 0 600 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdbdb"
    {...props}
  >
    <circle cx="53" cy="50" r="22" />
    <rect x="86" y="28" rx="2" ry="2" width="413" height="19" />
    <rect x="85" y="56" rx="2" ry="2" width="518" height="20" />
    <rect x="-529" y="104" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
);

export default ConnectionLoader;
