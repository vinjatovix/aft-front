import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "../../hooks/useForm";
import { fetchUpdatePassword } from "../../http";
import { resetMessage } from "../../helpers/resetMessage";

const ChangePasswordForm = ({
  user: {
    user: { username },
  },
}) => {
  const initMessage = { type: null, text: null };
  const [message, setMessage] = useState(initMessage);
  const [formState, handleChange, resetForm] = useForm({
    username,
    password: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const _changePassword = async () => {
    const token = localStorage.getItem("token");
    const res = await fetchUpdatePassword(token, formState);

    if (res.ok) {
      setMessage({
        type: "success",
        text: "Contraseña cambiada correctamente",
      });
      resetMessage(setMessage, initMessage, resetForm);
    } else {
      setMessage({ type: "error", text: await res.json().message });
      resetMessage(setMessage, initMessage, resetForm);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    _changePassword();
  };

  return (
    <form className="change-password_form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Contraseña actual"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="password"
          id="newPassword"
          name="newPassword"
          value={formState.newPassword}
          onChange={handleChange}
          placeholder="Nueva contraseña"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="password"
          id="repeatNewPassword"
          name="repeatNewPassword"
          value={formState.repeatPassword}
          onChange={handleChange}
          placeholder="Confirmar nueva contraseña"
        />
      </div>
      <button type="submit" className="bg-green">
        Enviar
      </button>
      {message && <p className={message.type}>{message.text}</p>}
    </form>
  );
};

ChangePasswordForm.propTypes = {
  user: PropTypes.object,
};

export default ChangePasswordForm;
