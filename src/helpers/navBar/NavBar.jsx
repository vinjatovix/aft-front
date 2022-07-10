import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { checkToken } from "./checkToken";

const NavBar = () => {
  const {
    auth: { user },
    setAuth,
  } = useContext(UserContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    checkToken(token, setAuth);
  }, [token, setAuth]);

  const activeLink = ({ isActive }) => (isActive ? "detail" : "");
  return (
    <nav className="nav-bar">
      <h1>AFT</h1>
      <div className="nav-bar_list">
        <NavLink to="/" className={activeLink}>
          🏠 Inicio
        </NavLink>
        {user?.username && (
          <>
            <NavLink to="/books" className={activeLink}>
              📚 Obras
            </NavLink>
            <NavLink to="/works" className={activeLink}>
              📝Trabajos
            </NavLink>
          </>
        )}
        <NavLink to="/login" className={activeLink}>
          🔐 Login
        </NavLink>
      </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
