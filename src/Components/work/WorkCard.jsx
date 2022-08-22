import React from "react";
import PropTypes from "prop-types";

import { ListItem } from "../common/ListItem";

export const WorkCard = ({ data }) => {
  return (
    <ul className="work-list">
      <ListItem
        name="Intérprete"
        children={<p>by: {data.metadata.createdBy}</p>}
        liKey={data.metadata.createdBy}
      />
      <ListItem
        name="Obra"
        children={<p>Obra: {data.character.book.name}</p>}
        liKey={data.character.book._id}
      />
      <ListItem
        name="Personaje"
        children={<p>Personaje: {data.character.name}</p>}
        liKey={data.character._id}
      />
      <ListItem
        name="Escena"
        children={<p>Escena: {data.scene.name}</p>}
        liKey={data.scene._id}
      />
      <ListItem
        name="Descripción"
        children={<p>Descripción: {data.description}</p>}
      />
    </ul>
  );
};

WorkCard.propTypes = {
  data: PropTypes.shape({
    character: PropTypes.shape({
      book: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string,
    metadata: PropTypes.shape({
      createdBy: PropTypes.string.isRequired,
    }).isRequired,
    scene: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
