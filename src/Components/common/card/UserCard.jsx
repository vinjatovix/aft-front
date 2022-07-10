import React from "react";
import PropTypes from "prop-types";

import { printUserRole } from "../../../helpers/printUserRole";
import { ListItem } from "../ListItem";

export const UserCard = ({ data }) => {
  return (
    <ul className="user-list">
      <ListItem name="Nombre" children={data.username} />
      <ListItem name="Role" children={printUserRole(data.roles)} />
    </ul>
  );
};

UserCard.propTypes = {
  data: PropTypes.object.isRequired,
};
