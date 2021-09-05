import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadConnections } from "../features/connection/connectionService";

const People = () => {
  const dispatch = useDispatch();
  const connection = useSelector((state) => state.connection);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      loadConnections({
        token: auth.userInfo.token,
      })
    );

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div>
        <h2>following</h2>
        {connection?.following?.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <h2>followers</h2>
        {connection?.followers?.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <h2>suggestions</h2>
        {connection?.suggestions?.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
