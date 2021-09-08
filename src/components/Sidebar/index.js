import { Home, Layers, PlusSquare, User, Users } from "react-feather";
import { useNavigate } from "react-router-dom";

import {
  LinkText,
  Navbar,
  Navli,
  NavUl,
  NavLink,
  IconWrapper,
  NavLogo,
  LogoText,
} from "./SIdebar.style";
import "./style.css";

export const Sidebar = ({ setShowModal }) => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <NavUl>
        <Navli onClick={() => navigate("/")} mt={"1rem"}>
          <NavLogo>
            <IconWrapper>
              <h2>R</h2>
            </IconWrapper>
            <LogoText>A V E .</LogoText>
          </NavLogo>
        </Navli>
        <Navli onClick={() => setShowModal(true)}>
          <NavLink>
            <IconWrapper>
              {" "}
              <PlusSquare />
            </IconWrapper>

            <LinkText>New</LinkText>
          </NavLink>
        </Navli>

        <Navli onClick={() => navigate("/")}>
          <NavLink>
            <IconWrapper>
              {" "}
              <Home />
            </IconWrapper>
            <LinkText>Home</LinkText>
          </NavLink>
        </Navli>

        <Navli onClick={() => navigate("/feed")}>
          <NavLink>
            <IconWrapper>
              {" "}
              <Layers />
            </IconWrapper>
            <LinkText>Feed</LinkText>
          </NavLink>
        </Navli>

        <Navli>
          <NavLink onClick={() => navigate("/people")}>
            <IconWrapper>
              {" "}
              <Users />
            </IconWrapper>
            <LinkText>People</LinkText>
          </NavLink>
        </Navli>

        <Navli>
          <NavLink>
            <IconWrapper>
              {" "}
              <User />
            </IconWrapper>
            <LinkText>Cats</LinkText>
          </NavLink>
        </Navli>
      </NavUl>
    </Navbar>
  );
};
