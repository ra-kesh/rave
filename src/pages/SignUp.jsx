import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../components/Form/SignUpForm";
import { Flex } from "../components/Util";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userInfo) {
      navigate("/");
    }
  }, [auth, navigate]);
  return (
    <Flex justifyContent="center" alignItems="center">
      <h3>{auth.error ? "something went wrong ...try again" : null}</h3>
      <SignUpForm />
    </Flex>
  );
};

export default SignUp;
