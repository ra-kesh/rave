import styled from "styled-components";
import { Box } from "../Util";

export const StyledButton = styled.button`
  width: 100%;
  height: ${(props) => props.height};
  padding: 16px;
  font-size: 18px;
  color: white;
  background: black;
  border-width: 0;
  border-radius: 10px;
  cursor: pointer;
`;

export const Button = ({ children, height, px, py }) => {
  return (
    <Box width={"100%"} px={px} py={py}>
      <StyledButton height={height}>{children}</StyledButton>
    </Box>
  );
};
