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
        <Route path="/people" element={<PrivateRoute Component={People} />} />
        <Route path="/" element={<PrivateRoute Component={Home} />} />
        <Route path="/feed" element={<PrivateRoute Component={Feed} />} />
        <Route
          path="/post/:postId"
          element={<PrivateRoute Component={PostDetail} />}
        />
        <Route
          path="/user/:userId"
          element={<PrivateRoute Component={UserProfile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
