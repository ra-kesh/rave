import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Component, path }) => {
  const auth = useSelector((state) => state.auth);

  return auth.userInfo ? (
    <>
      <Component />
    </>
  ) : (
    <Navigate to="/login" replace state={{ from: path }} />
  );
};
