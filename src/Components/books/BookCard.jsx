import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { ListItem } from "../common/ListItem";
import { NavigateButton } from "../ui/buttons/NavigateButton";
import { AdminButtons } from "../ui/admin/AdminButtons";

const DEFAULT_COVER_BOOK =
  "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg";

export const BookCard = ({ data, isEditor, actions, token }) => (
  <div className="flex-wrapper column">
    <ul
      data-testid="book-detail"
      className="book"
      onClick={() => {
        actions.detail();
      }}
    >
      {<img src={data?.img || DEFAULT_COVER_BOOK} alt={data.name} />}
      <ListItem name="Obra" children={data.name} />
      <ListItem name="Autor" className="small" children={data.author} />
    </ul>

    <NavLink to={`/book/${data._id}/characters`}>
      <NavigateButton text="🎭 Personajes" />
    </NavLink>

    <NavLink to={`/book/${data._id}/scenes`}>
      <NavigateButton text="🎬 Escenas" />
    </NavLink>

    {isEditor && <AdminButtons token={token} item={data} actions={actions} />}
  </div>
);

BookCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isEditor: PropTypes.bool,
  actions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

BookCard.defaultProps = {
  isEditor: false,
};
