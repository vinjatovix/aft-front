import React, { useContext, useEffect, useState } from "react";
import { ListItem } from "../../Components/common/ListItem";
import { Modal } from "../../Components/common/modals/Modal";
import { UserContext } from "../../contexts/UserContext";
import { fetchUsers } from "../../http";
import { UserListItem } from "./UserListItem";

export const UsersScreen = () => {
  const { auth = {} } = useContext(UserContext);
  const { roles = [] } = auth.user || [];

  const [users, setUsers] = useState([]);

  const resetAllModals = {
    add: false,
    detail: false,
    edit: false,
    blur: false,
  };
  const [modals, setModals] = useState(resetAllModals);
  const modalActions = {
    closeModal: () => setModals(resetAllModals),
    add: () => setModals({ add: true, blur: true }),
    detailModal: () => setModals({ detail: true, blur: true }),
    edit: () => setModals({ edit: true, blur: true }),
    delete: () => setModals({ delete: true, blur: true }),
  };

  const getUsers = async () => {
    const resp = await fetchUsers(auth.token);
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    auth.token && getUsers();
  }, [auth.token, modals]);

  return (
    <>
      {!auth.user && <h1>You must be logged in to view this page</h1>}

      {auth.user && (
        <div className={modals.blur ? "content blur" : "content"}>
          <div className="content_header">
            {roles.includes("aft.admin") && (
              <button className="bg-green" onClick={modalActions.add}>
                Añadir
              </button>
            )}
          </div>
          <h1>Usuarios: {users.length}</h1>
          <ul className="users-list">
            {users.map(({ _id, ...user }) => (
              <ListItem name="user" key={_id}>
                <UserListItem data={user} />
              </ListItem>
            ))}
          </ul>
        </div>
      )}

      {modals.add && (
        <Modal actions={{ close: modalActions.closeModal }}>
          <h1>Add User</h1>
        </Modal>
      )}

      {modals.detailModal && (
        <Modal actions={{ close: modalActions.closeModal }}>
          <h1>Detail User</h1>
        </Modal>
      )}
    </>
  );
};
