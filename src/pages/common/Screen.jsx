import React, { useContext } from "react";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";

import { CharactersScreen } from "../characters/CharactersScreen";
import { ScenesScreen } from "../scenes/ScenesScreen";

import { UserContext } from "../../contexts/UserContext";
import { useCanvas } from "../../hooks/useCanvas";
import { useModals } from "../../hooks/useModals";

import { checkAdminRole } from "../../helpers/checkAdminRole";
import { BooksScreen } from "../books/BooksScreen";
import { WorksScreen } from "../works/WorksScreen";
import { UsersScreen } from "../users/UsersScreen";
import { LoginScreen } from "../login/LoginScreen";
import { HomeScreen } from "../home/HomeScreen";

export const Screen = ({ type }) => {
  const [modals, modalActionsDispatch] = useModals();
  const [Entity, dispatchEntity] = useCanvas();
  const params = useParams();
  const { auth } = useContext(UserContext);

  const isAdmin = checkAdminRole(auth);

  const modalActions = {
    ...modalActionsDispatch,
    refresh: () => dispatchEntity.setUpdate(),
  };

  const props = {
    params,
    auth,
    isAdmin,
    Entity,
    dispatchEntity,
    modals,
    modalActions,
  };

  return (
    <>
      {type === "home" && <HomeScreen />}
      {type === "login" && <LoginScreen />}
      {type === "users" && <UsersScreen {...props} />}
      {type === "books" && <BooksScreen {...props} />}
      {type === "characters" && <CharactersScreen {...props} />}
      {type === "scenes" && <ScenesScreen {...props} />}
      {type === "works" && <WorksScreen {...props} />}
    </>
  );
};

Screen.propTypes = {
  type: PropTypes.string.isRequired,
};
