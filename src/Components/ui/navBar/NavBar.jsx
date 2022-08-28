import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const { user } = useSelector((state) => state.auth);

  const activeLink = ({ isActive }) => (isActive ? "detail" : "");
  return (
    <nav className="nav-bar">
      <h1>AFT</h1>
      <ul className="nav-bar_list">
        {user?.username ? (
          <>
            <NavLink to="/" className={activeLink}>
              🏠 Inicio
            </NavLink>
            <NavLink to="/books" className={activeLink}>
              📚 Obras
            </NavLink>
            <NavLink to="/works" className={activeLink}>
              📝Trabajos
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" className={activeLink}>
            🔐 Login
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {};

export default NavBar;
