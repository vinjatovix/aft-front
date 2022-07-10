import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchCharactersByBookId } from "../../http";

export const BookDetail = ({ auth, data }) => {
  const defaultCoverBook =
    "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg";
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const res = await fetchCharactersByBookId(auth.token, data._id);
    const bookChars = await res.json();

    setCharacters(bookChars);
  };

  useEffect(() => {
    getCharacters();
  }, [data]);

  return (
    <div className="detail">
      {data.name && <p>{data.name}</p>}
      {data.author && <p className="small">{data.author}</p>}
      {<img src={data.img || defaultCoverBook} alt="book" />}
      {data.description && <p>{data.description}</p>}
      {characters.length > 0 && (
        <NavLink to={`/characters/book/${data._id}`}>
          <p>Ver Personajes</p>
        </NavLink>
      )}
    </div>
  );
};

BookDetail.propTypes = {
  auth: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};
