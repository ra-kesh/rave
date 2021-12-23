import { useState } from "react";
import AddPost from "../Post/AddPost";
import { Sidebar } from "../Sidebar";
import { Flex, ModalOverlay, ModalWrapper } from "../Util";
import MediaQuery from "react-responsive";
import { Search } from "../Search";
import { Rave } from "../Rave";
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
        <Flex>
          <MediaQuery minWidth={"70rem"}>
            <Search />
            <Rave setShowModal={setShowModal} />
          </MediaQuery>
        </Flex>
        {showModal && (
          <ModalWrapper p={"5rem"}>
            <ModalOverlay onClick={() => setShowModal(false)} />
            <AddPost setShowModal={setShowModal} />
          </ModalWrapper>
        )}
      </Flex>
    </>
  );
};

export default Layout;
