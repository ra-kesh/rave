import { Home, Layers, LogOut, PlusSquare, User, Users } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../features/auth/authSlice";

import {
  LinkText,
  Navbar,
  Navli,
  NavUl,
  NavLink,
  IconWrapper,
  NavLogo,
  LogoText,
  LogoutWrapper,
} from "./SIdebar.style";
import "./style.css";

export const Sidebar = ({ setShowModal }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
            <IconWrapper onClick={() => navigate(`/user/${auth.userInfo._id}`)}>
              {" "}
              <User />
            </IconWrapper>
            <LinkText onClick={() => navigate(`/user/${auth.userInfo._id}`)}>
              {auth.userInfo.name}
            </LinkText>
            <LogoutWrapper>
              {" "}
              <LogOut onClick={() => dispatch(userLogout())} />
            </LogoutWrapper>
          </NavLink>
        </Navli>
      </NavUl>
    </Navbar>
  );
};
