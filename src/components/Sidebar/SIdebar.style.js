import styled from "styled-components";
import { space } from "styled-system";

export const Navbar = styled.nav`
  position: fixed;
  background-color: var(--color-background);
  transition: width 600ms ease;
  overflow: hidden;

  @media (min-width: 1025px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    ${"" /* 16rem for logo text */}
    &: hover {
      width: 16rem;
    }
  }

  @media (max-width: 1024px) {
    width: 4.5rem;
  }

  @media (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
    z-index: 99;
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

  @media (min-width: 769px) {
    border-radius: 2rem;
  }
`;

export const NavLink = styled(NavLogo)`
  &: hover {
    filter: grayscale(0%) opacity(1);
    background: var(--color-gray-900);
    color: var(--text-secondary);
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const IconWrapper = styled.div`
  margin: 0 1.5rem;
`;

export const LogoutWrapper = styled(IconWrapper)`
  display: none;

  @media (min-width: 600px) {
    ${Navbar}:hover & {
      display: inline;
    }
  }
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
  @media (min-width: 769px) {
    ${Navbar}:hover & {
      right: 135px;
    }
  }
`;
