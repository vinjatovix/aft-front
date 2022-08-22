import React from "react";
import PropTypes from "prop-types";

import { ListItem } from "../common/ListItem";
import { UserRole } from "../ui/UserRole";

export const UserCard = ({ data: { username, roles } }) => {
  return (
    <ul className="user-list">
      <ListItem name="username" children={username} />
      <ListItem name="role" children={UserRole({ roles })} />
    </ul>
  );
};

UserCard.propTypes = {
  data: PropTypes.shape({
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
