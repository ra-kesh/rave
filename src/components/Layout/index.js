import { useState } from "react";
import AddPost from "../Post/AddPost";
import { Sidebar } from "../Sidebar";
import { Flex, ModalOverlay, ModalWrapper } from "../Util";
// import MediaQuery from "react-responsive";
// import styled from "styled-components";

// const RaveWrapper = styled(Flex)`
//   position: absolute;
//   ${
//     "" /* width: 100%;
//   max-height: 900px; */
//   }
//   bottom: 0;
//   right: 0;
// `;

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Flex justifyContent="space-between" flexDirection="row">
        <Flex>
          <Sidebar setShowModal={setShowModal} />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Flex>
        <Flex
        // flexDirection="column"
        // alignItems="center"
        // justifyContent="space-between"
        >
          {/* <MediaQuery minWidth={"60rem"}>
            <Flex width={["8rem"]}>
              <button>rave</button>
            </Flex>
          </MediaQuery> */}
        </Flex>
        {showModal && (
          <ModalWrapper p={"5rem"}>
            <ModalOverlay onClick={() => setShowModal(false)} />
            <AddPost />
          </ModalWrapper>
        )}
      </Flex>
    </>
  );
};

export default Layout;
