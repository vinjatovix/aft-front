import React from "react";
import PropTypes from "prop-types";

export const LoginForm = ({
  handleChange,
  handleSubmit,
  formState,
  message,
}) => {
  return (
    <div className="card-grid">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter user"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formState.password}
          onChange={handleChange}
        />

        <button type="submit" className="bg-green">
          Login
        </button>
        {message && <p className={message.type}>{message.text}</p>}
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired,
  message: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }),
};
