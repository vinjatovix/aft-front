import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "../ListItem";

export const WorkCard = ({ data }) => {
  return (
    <ul className="work-list">
      <ListItem
        name="Intérprete"
        children={<p>by: {data.student.name}</p>}
        liKey={data.student._id}
      />
      <ListItem
        name="Obra"
        children={<p>Obra: {data.book.name}</p>}
        liKey={data.book._id}
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
  data: PropTypes.object.isRequired,
};
