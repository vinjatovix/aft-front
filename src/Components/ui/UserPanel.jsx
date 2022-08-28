import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ActionButton } from "./buttons/ActionButton";
import { Card } from "../common/card/Card";
import { ChangePasswordForm } from "../login/ChangePasswordForm";
import { NavigateButton } from "./buttons/NavigateButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../helpers/logout";

export const UserPanel = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [modals, setModals] = useState({
    password: false,
    blur: false,
  });
  const isEditor = user.roles.includes("aft.admin");

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div data-testid="user-panel" className={modals.password ? "blur" : ""}>
        <div className="grid">
          <div className="user-dashboard">
            <Card type="user" data={user} />

            <ActionButton
              action={handleLogout}
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
              <ChangePasswordForm user={user} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
