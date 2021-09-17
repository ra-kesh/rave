import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import {
  Login,
  SignUp,
  People,
  Home,
  Feed,
  PostDetail,
  UserProfile,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/people" element={<People />} />
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/feed" element={<Feed />} />
        <PrivateRoute path="/post/:postId" element={<PostDetail />} />
        <PrivateRoute path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
