import React, { useState } from "react";
import { UserContext } from "../contexts/UserContext";
export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};
