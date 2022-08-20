import React from "react";
import PropTypes from "prop-types";

import { UserRole } from "../../Components/ui/UserRole";

export const UserListItem = ({ data: { username, roles, group } }) => (
  <div className="users-list_item">
    <p>{username}</p>
    {group && <p>{group}</p>}
    {UserRole(roles)}
  </div>
);

UserListItem.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    roles: PropTypes.array.isRequired,
    group: PropTypes.string,
  }).isRequired,
};
