import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { PrivateRoute } from "./utils/PrivateRoute";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import People from "./pages/People";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/people" element={<People />} />
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/post/:postId" element={<PostDetail />} />
        {/* <Route path="/feed"> <PrivateRoute path="/feed" element={<Feed />}/> </Route>
            <Route path="/user"> <PrivateRoute path="/user" element={<Users />}/> </Route>
            <Route path="/user/:userId"> <PrivateRoute path="/user/:userId" element={<UserProfile />}/> </Route> */}
      </Routes>
    </div>
  );
}

export default App;
