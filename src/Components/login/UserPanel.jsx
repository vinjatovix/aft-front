import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { ActionButton } from "../ui/buttons/ActionButton";
import { Card } from "../common/card/Card";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { NavigateButton } from "../ui/buttons/NavigateButton";

export const UserPanel = ({ auth, handleLogOut }) => {
  const [modals, setModals] = useState({
    password: false,
    blur: false,
  });
  const isEditor = auth.user.roles.includes("aft.admin");
  return (
    <>
      <div data-testid="user-panel" className={modals.password ? "blur" : ""}>
        <div className="grid">
          <div className="user-dashboard">
            <Card type="user" data={auth.user} />

            <ActionButton
              action={handleLogOut}
              text="Logout"
              type="btn-big bg-red"
            />

            <ActionButton
              action={() => setModals({ ...modals, password: true })}
              text="Cambiar contraseña"
              type="btn-big bg-yellow"
            />
          </div>
        </div>
        {isEditor && (
          <div className="panel">
            <h1>ADMIN PANEL</h1>
            <NavLink to="/users">
              <NavigateButton text="Usuarios" />
            </NavLink>
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
              <ChangePasswordForm user={auth.user} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

UserPanel.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      roles: PropTypes.arrayOf(PropTypes.string),
      username: PropTypes.string,
    }),
  }).isRequired,
  handleLogOut: PropTypes.func.isRequired,
};
