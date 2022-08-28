import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserPanel } from "../../Components/ui/UserPanel";
import { logout } from "../../helpers/logout";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return <UserPanel user={user} handleLogOut={handleLogout} />;
};
