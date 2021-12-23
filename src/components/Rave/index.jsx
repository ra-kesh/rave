import styled from "styled-components";
import { Flex, Text } from "../Util";

const RaveWrapper = styled(Flex)`
  justifycontent: center;
  alignitems: center;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  background: var(--color-gray-900);
  color: var(--color-gray-100);
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
`;

export const Rave = ({ setShowModal }) => {
  return (
    <div style={{ position: "fixed", right: 20, bottom: "1.5rem" }}>
      <RaveWrapper onClick={() => setShowModal(true)}>
        <Text>Rave</Text>
      </RaveWrapper>
    </div>
  );
};
