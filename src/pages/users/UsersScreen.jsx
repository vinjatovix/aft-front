import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { modalActionsType, modalsStateType } from "../../PropTypes";

import { Blur } from "../../Components/ui/Blur";
import { Content } from "../../Components/common/content/Content";
import { ListItem } from "../../Components/common/ListItem";
import { UserListItem } from "./UserListItem";
import { ContentHeader } from "../../Components/common/content/ContentHeader";

import { useFetch } from "../../hooks/useFetch";

import { api } from "../../http/api";

export const UsersScreen = ({
  auth: { token, user },
  modals,
  actions,
  isEditor,
}) => {
  const [{ data: users, loading, error }, reFetch] = useFetch(
    api.user.getAll.path,
    api.user.getAll.method,
    { token }
  );

  useEffect(() => {
    token && reFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const edit = modals.blur && <h1>Add User</h1>;

  return (
    <>
      {user && isEditor ? (
        <Content modals={modals} actions={actions} isEditor={isEditor}>
          <ContentHeader title="Usuarios:" count={users?.length || 0} />
          {error && <div>{error}</div>}

          {loading && <div>Cargando...</div>}

          {users && (
            <ul className="users-list">
              {users.map(({ _id, ...data }) => (
                <ListItem name="user" key={_id}>
                  <UserListItem data={data} />
                </ListItem>
              ))}
            </ul>
          )}
        </Content>
      ) : (
        <Navigate to="/login" />
      )}

      {modals.blur && <Blur edit={edit} modals={modals} actions={actions} />}
    </>
  );
};

UsersScreen.propTypes = {
  modals: modalsStateType,
  actions: modalActionsType,
  isEditor: PropTypes.bool.isRequired,
};

UsersScreen.defaultProps = {
  isEditor: false,
};
