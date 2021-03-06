import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { checkToken } from "./checkToken";
import "./navBar.css";

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
          ๐  Inicio
        </NavLink>
        {user?.username && (
          <>
            <NavLink to="/books" className={activeLink}>
              ๐ Obras
            </NavLink>
            <NavLink to="/works" className={activeLink}>
              ๐Trabajos
            </NavLink>
          </>
        )}
        <NavLink to="/login" className={activeLink}>
          ๐ Login
        </NavLink>
      </div>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
