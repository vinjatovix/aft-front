import React, { useState } from "react";
import PropTypes from "prop-types";
import ChangePasswordForm from "./ChangePasswordForm";
import { NavLink } from "react-router-dom";
import Card from "../../Components/common/card/Card";

const UserPanel = ({ user, handleLogOut }) => {
  const [modals, setModals] = useState({
    password: false,
    blur: false,
  });
  const isAdmin = user.user.roles.includes("aft.admin");
  return (
    <>
      <div data-testid="user-panel" className={modals.password ? "blur" : ""}>
        <div className="user-dashboard">
          <Card type="user" data={user.user} />

          <button className="action-button bg-yellow" onClick={handleLogOut}>
            Logout
          </button>

          <button
            className="action-button bg-red"
            onClick={() =>
              setModals({
                password: true,
              })
            }
          >
            Cambiar contraseña
          </button>
        </div>
        {isAdmin && (
          <div className="panel">
            <h1>ADMIN PANEL</h1>
            <div>
              <NavLink to="/users">
                <button className="action-button bg-green">
                  <i className="fas fa-users"> </i> Usuarios
                </button>
              </NavLink>
              <button className="action-button bg-green">
                <i className="fas fa-book"> </i> Obras
              </button>
            </div>
          </div>
        )}
      </div>

      {modals.password && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span
                className="close bg-red"
                onClick={() => setModals({ password: false, blur: false })}
              >
                &times;
              </span>
            </div>
            <div className="modal-body">
              <ChangePasswordForm user={user} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

UserPanel.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogOut: PropTypes.func.isRequired,
};

export default UserPanel;
