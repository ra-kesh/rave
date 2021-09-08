import { useDispatch } from "react-redux";
import HomeFeed from "../components/Feed/HomeFeed";
import Layout from "../components/Layout";
import { userLogout } from "../features/auth/authSlice";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <button onClick={() => dispatch(userLogout())}>logout</button>
      <HomeFeed />
    </Layout>
  );
};
