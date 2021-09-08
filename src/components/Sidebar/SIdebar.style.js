import styled from "styled-components";
import { space } from "styled-system";

export const Navbar = styled.nav`
  position: fixed;
  background-color: var(--bg-primary);
  transition: width 600ms ease;
  overflow: hidden;

  @media (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  @media (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;
    &: hover {
      width: 16rem;
    }
  }
`;

export const NavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

export const Navli = styled.li`
  ${space}
  width: 100%;
  cursor: pointer;

  @media (min-width: 600px) {
    &:last-child {
      margin-top: auto;
    }
  }
  @media (max-width: 600px) {
    &:first-child {
      display: none;
    }
  }
`;

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);

  @media (min-width: 600px) {
    border-radius: 2rem;
  }
`;

export const NavLink = styled(NavLogo)`
  &: hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  margin: 0 1.5rem;
`;

export const LinkText = styled.span`
  display: none;

  @media (min-width: 600px) {
    ${Navbar}:hover & {
      display: inline;
    }
  }
`;

export const LogoText = styled(LinkText)`
  display: inline;
  position: absolute;
  right: -999px;
  font-size: 1.5rem;
  transition: var(--transition-speed);
  ${Navbar}:hover & {
    right: 135px;
  }
`;
