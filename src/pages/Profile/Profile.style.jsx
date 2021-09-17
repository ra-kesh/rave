import styled from "styled-components";
import { Flex, Box } from "../../components/Util";

export const CoverWrapper = styled(Box)`
  position: relative;
  border-radius: 0.5rem;
`;

export const ProfileWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  bottom: -4rem;
  left: 24px;
  background: var(--color-background);
`;

export const TabWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
`;

export const Tab = styled(Box)`
  cursor: pointer;
  &:hover {
    background: var(--color-gray-300);
    border-bottom: 3px solid var(--color-gray-300);
  }
`;

export const UserWrapper = styled(Flex)`
  align-items: center;
  gap: 1rem;
  height: 5rem;
  border-top: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;

  &:hover {
    background: var(--color-gray-300);
  }
`;
