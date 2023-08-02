import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../components/Form/SignUpForm";
import { Flex } from "../components/Util";

export const SignUp = () => {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.userInfo) {
      navigate("/");
    }
  }, [auth, navigate]);
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <h3>
        {auth.error
          ? "something went wrong, maybe try again with diffrent credentials"
          : null}
      </h3>
      <SignUpForm />
    </Flex>
  );
};
