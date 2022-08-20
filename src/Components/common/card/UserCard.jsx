import React from "react";
import PropTypes from "prop-types";

import { ListItem } from "../ListItem";
import { UserRole } from "../../ui/UserRole";

export const UserCard = ({ data }) => {
  return (
    <ul className="user-list">
      <ListItem name="Nombre" children={data.username} />
      <ListItem name="Role" children={UserRole(data.roles)} />
    </ul>
  );
};

UserCard.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
