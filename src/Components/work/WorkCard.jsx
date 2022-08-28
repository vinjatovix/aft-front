import React from "react";
import PropTypes from "prop-types";

import { ListItem } from "../common/ListItem";

export const WorkCard = ({ data }) => {
  return (
    <ul className="work-list">
      <ListItem
        name="interprete"
        children={<>by: {data.metadata.createdBy}</>}
        liKey={data.metadata.createdBy}
      />
      <ListItem
        name="obra"
        children={<>Obra: {data.character.book.name}</>}
        liKey={data.character.book._id}
      />
      <ListItem
        name="personaje"
        children={<>Personaje: {data.character.name}</>}
        liKey={data.character._id}
      />
      <ListItem
        name="escena"
        children={<>Escena: {data.scene.name}</>}
        liKey={data.scene._id}
      />
      <ListItem
        name="descripcion"
        children={<>Descripción: {data.description}</>}
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
