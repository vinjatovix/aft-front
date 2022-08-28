import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { BooksScreen } from "../books/BooksScreen";
import { ScreenFetch } from "./ScreenFetch";
import { UsersScreen } from "../users/UsersScreen";
import { WorksScreen } from "../works/WorksScreen";

import { useModals } from "../../hooks/useModals";

import { checkRole } from "../../helpers/checkRole";

export const Screen = ({ type }) => {
  const { token, user } = useSelector((state) => state.auth);

  const params = useParams();
  const [modals, actions] = useModals();

  const isEditor = checkRole(user, "editor");

  const props = {
    auth: { token, user },
    params,
    isEditor,
    modals,
    actions,
    type,
  };

  return (
    <>
      {type === "user" && <UsersScreen {...props} />}
      {type === "book" && <BooksScreen {...props} />}
      {["character", "scene"].includes(type) && <ScreenFetch {...props} />}
      {type === "work" && <WorksScreen {...props} isOpen={true} />}
    </>
  );
};

Screen.propTypes = {
  type: PropTypes.string.isRequired,
};
