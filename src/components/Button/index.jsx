import styled from "styled-components";
import { Box } from "../Util";

export const StyledButton = styled.button`
  width: 100%;
  height: ${(props) => props.height};
  padding: 16px;
  font-size: 18px;
  color: white;
  background: var(--color-gray-900);
  border-width: 0;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RoundedButton = styled(StyledButton)`
  border-radius: 2rem;
  background: var(--color-gray-200);
  color: var(--color-gray-900);
  border: 2px solid var(--color-gray-900);
  &:hover {
    background: var(--color-gray-900);
    color: var(--color-gray-200);
  }
`;

export const Button = ({ children, height, px, py }) => {
  return (
    <Box width={"100%"} px={px} py={py}>
      <StyledButton height={height}>{children}</StyledButton>
    </Box>
  );
};

export const ButtonRounded = ({ children, height, px, py }) => {
  return (
    <Box width={"100%"} px={px} py={py}>
      <RoundedButton height={height}>{children}</RoundedButton>
    </Box>
  );
};
