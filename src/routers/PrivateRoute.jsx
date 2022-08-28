import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  if (Boolean(token)) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
