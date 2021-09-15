import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import People from "./pages/People";
import PostDetail from "./pages/PostDetail";
import Feed from "./pages/Feed";
import UserProfile from "./pages/UserProfile";

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
