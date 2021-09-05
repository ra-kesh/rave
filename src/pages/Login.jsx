import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../features/auth/authServices";

const Login = () => {
  const [email, setEmail] = useState("something@gmail.com");
  const [password, setPassword] = useState("something");

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandeller = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  useEffect(() => {
    if (auth.userInfo) {
      navigate("/");
    }
  }, [auth, navigate]);

  console.log(auth);
  return (
    <div>
      <h1>Login</h1>
      <h3>{auth.error ? "something went wrong..try again" : null}</h3>
      <h3>{auth.loading ? "loading..." : null}</h3>
      <div>
        <form onSubmit={submitHandeller} className="login-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="m-bottom-two form-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="m-bottom-two form-input"
          />
          <button>submit</button>
        </form>
      </div>
      <button onClick={() => navigate("/signup")}>signup</button>
    </div>
  );
};

export default Login;
