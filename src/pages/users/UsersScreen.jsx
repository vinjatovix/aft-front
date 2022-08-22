import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { authType, modalActionsType, modalsStateType } from "../../PropTypes";

import { Blur } from "../../Components/ui/Blur";
import { Content } from "../../Components/common/content/Content";
import { ListItem } from "../../Components/common/ListItem";
import { UserListItem } from "./UserListItem";

import { useCanvas } from "../../hooks/useCanvas";

import { getUsers } from "../../helpers/getUsers";
import { ContentHeader } from "../../Components/common/content/ContentHeader";

export const UsersScreen = ({ auth, modals, actions, isEditor }) => {
  const [{ data: users }, canvas] = useCanvas();

  const _getUsers = getUsers(auth, canvas.setCanvas);

  useEffect(() => {
    auth.token && _getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  const edit = modals.blur && <h1>Add User</h1>;

  return (
    <>
      {auth.user && isEditor ? (
        <Content modals={modals} actions={actions} isEditor={isEditor}>
          <ContentHeader title="Usuarios:" count={users.length} />

          <ul className="users-list">
            {users.map(({ _id, ...user }) => (
              <ListItem name="user" key={_id}>
                <UserListItem data={user} />
              </ListItem>
            ))}
          </ul>
        </Content>
      ) : (
        <Navigate to="/login" />
      )}

      {modals.blur && <Blur edit={edit} modals={modals} actions={actions} />}
    </>
  );
};

UsersScreen.propTypes = {
  auth: authType,
  modals: modalsStateType,
  actions: modalActionsType,
  isEditor: PropTypes.bool.isRequired,
};

UsersScreen.defaultProps = {
  isEditor: false,
};
