import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../features/auth/authServices";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("something@gmail.com");
  const [name, setName] = useState("something");
  const [userName, setUserName] = useState("something");
  const [password, setPassword] = useState("something");
  const [confirmPassword, setConfirmPassword] = useState("something");

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandeller(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch(userSignup({ name, userName, email, password }));
    }
  }
  useEffect(() => {
    if (auth.userInfo) {
      navigate("/");
    }
  }, [auth, navigate]);
  return (
    <div>
      <h1>Signup</h1>
      <h3>{auth.error ? "something went wrong ...try again" : null}</h3>
      <form onSubmit={submitHandeller} className="login-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="m-bottom-two form-input"
        />
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="userName"
          className="m-bottom-two form-input"
        />
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="password"
          className="m-bottom-two form-input"
        />
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
