import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/Form/LoginForm";
import { Flex } from "../components/Util";

const Login = () => {
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
        <button onClick={() => navigate("/signup")}>signup</button>
      </Flex>
    </Flex>
  );
};

export default Login;
