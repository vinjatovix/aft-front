import React, { useState } from "react";
import PropTypes from "prop-types";
import ChangePasswordForm from "./ChangePasswordForm";
import { NavLink } from "react-router-dom";
import Card from "../../Components/common/card/Card";
import { ActionButton } from "../ui/buttons/ActionButton";
import { NavigateButton } from "../ui/buttons/NavigateButton";

const UserPanel = ({ auth, handleLogOut }) => {
  const [modals, setModals] = useState({
    password: false,
    blur: false,
  });
  const isAdmin = auth.user.roles.includes("aft.admin");
  return (
    <>
      <div data-testid="user-panel" className={modals.password ? "blur" : ""}>
        <div className="user-dashboard">
          <Card type="user" data={auth.user} />

          <ActionButton
            text="Logout"
            type="btn-big bg-yellow"
            action={handleLogOut}
          />

          <ActionButton
            text="Cambiar contraseña"
            type="btn-big bg-red"
            action={() => setModals({ ...modals, password: true })}
          />
        </div>
        {isAdmin && (
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

export default UserPanel;
