import styled, { css } from "styled-components";
import {
  flexbox,
  space,
  layout,
  color,
  typography,
  background,
  border,
  grid,
  shadow,
  position,
} from "styled-system";

export const Box = styled.div`
  ${space}
  ${layout}
  ${background}
  ${color}
  ${shadow}
  ${position}
  ${border}

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}
`;

export const Text = styled(Box)`
  ${typography}
  ${color}
`;

export const Grid = styled(Box)`
  display: grid;
  ${grid}
`;

export const Flex = styled(Box)`
  display: flex;
  ${flexbox};
`;

export const ModalWrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  max-height: 900px;
  top: 0;
  left: 0;
  z-index: 9000;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  align-items: center;
  justify-content: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: -10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.8;
`;
