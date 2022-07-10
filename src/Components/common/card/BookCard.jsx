import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ListItem } from "../ListItem";

export const BookCard = ({ data, isAdmin, actions, token }) => {
  const defaultCoverBook =
    "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg";
  return (
    <div className="flex-wrapper column">
      <ul
        className="book"
        onClick={() => {
          actions.detail();
        }}
      >
        {<img src={data.img ? data.img : defaultCoverBook} alt={data.name} />}
        <ListItem name="Obra" children={data.name} />
        <ListItem name="Autor" className="small" children={data.author} />
      </ul>
      <NavLink to={`/characters/book/${data._id}`}>
        <button data-testid="char-button" className="bg-blue">
          🎭 Personajes
        </button>
      </NavLink>
      {isAdmin && (
        <div className="control-panel-mini">
          <button
            className="bg-yellow"
            data-testid="edit-button"
            onClick={() => {
              actions.edit();
            }}
          >
            📝 editar
          </button>
          <button
            data-testid="delete-button"
            className="bg-red"
            onClick={() => {
              actions.delete(token, data._id);
            }}
          >
            🗑️ eliminar
          </button>
        </div>
      )}
    </div>
  );
};

BookCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
  isAdmin: PropTypes.bool,
  actions: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
};

BookCard.defaultProps = {
  isAdmin: false,
};
