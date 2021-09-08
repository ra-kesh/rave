import { useState } from "react";
import AddPost from "../Post/AddPost";
import { Sidebar } from "../Sidebar";
import { Flex, ModalOverlay, ModalWrapper } from "../Util";

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
        <Flex></Flex>
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
