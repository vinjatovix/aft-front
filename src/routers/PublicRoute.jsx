import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccessAction, logoutAction } from "../actions/auth";
import { checkToken } from "../helpers/checkToken";

const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  if (!token) {
    const localToken = localStorage.getItem("token");
    checkToken(localToken, dispatch, loginSuccessAction, logoutAction);
  }

  return Boolean(token) ? <Navigate to="/" /> : children;
};

export default PublicRoute;
