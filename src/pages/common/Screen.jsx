import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import { BooksScreen } from "../books/BooksScreen";
import { HomeScreen } from "../home/HomeScreen";
import { LoginScreen } from "../login/LoginScreen";
import { ScreenFetch } from "./ScreenFetch";
import { UsersScreen } from "../users/UsersScreen";
import { WorksScreen } from "../works/WorksScreen";

import { useModals } from "../../hooks/useModals";

import { checkRole } from "../../helpers/checkRole";

export const Screen = ({ type }) => {
  const { auth } = useContext(UserContext);
  const params = useParams();
  const [modals, actions] = useModals();

  const isEditor = checkRole(auth, "editor");

  const props = {
    params,
    auth,
    isEditor,
    modals,
    actions,
    type,
  };

  return (
    <>
      {type === "home" && <HomeScreen />}
      {type === "login" && <LoginScreen />}

      {auth.token &&
        ((
          <>
            {type === "user" && <UsersScreen {...props} />}
            {type === "book" && <BooksScreen {...props} />}
            {["character", "scene"].includes(type) && (
              <ScreenFetch {...props} />
            )}
            {type === "work" && <WorksScreen {...props} isOpen={true} />}
          </>
        ) || <LoginScreen />)}
    </>
  );
};

Screen.propTypes = {
  type: PropTypes.string.isRequired,
};
