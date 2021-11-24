import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "../components/Form/LoginForm";
import { Flex, Text } from "../components/Util";

const SignUpSpan = styled.span`
  cursor: pointer;
  color: inherit;
  text-underline-offset: var(--offset, 0.2em);
  text-decoration: underline 0.2em;
  transition: --offset 600ms, text-decoration-color 600ms;

  &:hover,
  &:focus {
    --offset: 0.4em;
    text-decoration-color: black;
  }
`;

export const Login = () => {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userInfo) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <Flex justifyContent="center" height={"100vh"}>
      <Flex alignItems="center" flexDirection="column">
        <h3>{auth.error ? "something went wrong..try again" : null}</h3>
        <h3>{auth.loading ? "loading..." : null}</h3>
        <div>
          <LoginForm />
        </div>
        <Text width="100%" pl="40px">
          {" "}
          Don't have an account ?{" "}
          <SignUpSpan onClick={() => navigate("/signup")}>SIGN UP</SignUpSpan>
        </Text>
      </Flex>
    </Flex>
  );
};
