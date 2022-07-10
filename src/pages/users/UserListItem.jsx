import React from "react";
import { printUserRole } from "../../helpers/printUserRole";

export const UserListItem = ({ data: { username, roles, group } }) => (
  <div className="users-list_item">
    <p>{username}</p>
    {group && <p>{group}</p>}
    {printUserRole(roles)}
  </div>
);
