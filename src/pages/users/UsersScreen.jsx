import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import { Content } from "../../Components/common/content/Content";
import { ListItem } from "../../Components/common/ListItem";
import { Modal } from "../../Components/common/modals/Modal";
import { getUsers } from "../../helpers/getUsers";
import { UserListItem } from "./UserListItem";

export const UsersScreen = ({
  auth,
  modals,
  modalActions,
  isAdmin,
  Entity,
  dispatchEntity,
}) => {
  const { data: users } = Entity;
  const _getUsers = getUsers(auth, dispatchEntity.setCanvas);

  useEffect(() => {
    auth.token && _getUsers();
  }, [auth.token, _getUsers]);

  return (
    <>
      {auth.user ? (
        <Content modals={modals} modalActions={modalActions} isAdmin={isAdmin}>
          <h1>Usuarios: {Entity.data.length}</h1>
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

      {modals.add && (
        <Modal actions={{ close: modalActions.close }}>
          <h1>Add User</h1>
        </Modal>
      )}

      {modals.detailModal && (
        <Modal actions={{ close: modalActions.close }}>
          <h1>Detail User</h1>
        </Modal>
      )}
    </>
  );
};

UsersScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  Entity: PropTypes.object.isRequired,
  dispatchEntity: PropTypes.object.isRequired,
};

UsersScreen.defaultProps = {
  isAdmin: false,
};
