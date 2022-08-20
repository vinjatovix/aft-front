import React from "react";
import PropTypes from "prop-types";

export const UserRole = (roles) => {
  let result = {};

  if (roles.includes("aft.user")) {
    result = <strong className="green">USER</strong>;
  }
  if (roles.includes("aft.editor")) {
    result = <strong className="orange">EDITOR</strong>;
  }
  if (roles.includes("aft.admin")) {
    result = <strong className="red">ADMIN</strong>;
  }

  return result;
};

UserRole.propTypes = {
  roles: PropTypes.array.isRequired,
};
