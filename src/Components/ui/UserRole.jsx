import React from "react";
import PropTypes from "prop-types";

export const UserRole = ({ roles }) => {
  let result = <></>;

  if (roles.includes("aft.user")) {
    result = (
      <strong data-testid="user-role" className="green">
        USER
      </strong>
    );
  }
  if (roles.includes("aft.editor")) {
    result = (
      <strong data-testid="user-role" className="orange">
        EDITOR
      </strong>
    );
  }
  if (roles.includes("aft.admin")) {
    result = (
      <strong data-testid="user-role" className="red">
        ADMIN
      </strong>
    );
  }

  return result;
};

UserRole.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
