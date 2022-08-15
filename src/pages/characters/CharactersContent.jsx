import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "../../Components/common/ListItem";

export const CharactersContent = ({
  data: { book, charactersList },
  isAdmin,
  actions,
  token,
}) => {
  return (
    <>
      <h1>{book.name}</h1>
      <h3>{book.author}</h3>
      <img
        className="portrait"
        src={
          book.img
            ? book.img
            : "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg"
        }
        alt="book"
      />
      <p>{book.description}</p>
      <h2>Personajes</h2>
      <ul className="characters-list">
        {charactersList.map((character) => (
          <ListItem
            key={character._id}
            className="characters-list_item"
            {...character}
          >
            <>
              <p
                onClick={() => {
                  actions.setDataDetail(character);
                }}
              >
                {character.name}: {character.description}. {character.center}
              </p>
              {isAdmin && (
                <>
                  <div className="control-panel-mini row">
                    <button
                      className="bg-yellow"
                      onClick={() => {
                        actions.setDataDetail(character);
                        actions.edit();
                      }}
                    >
                      📝
                    </button>
                    <button
                      className="bg-red"
                      onClick={() => {
                        actions.setDataDetail(character);
                        actions.delete(token, character._id);
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                </>
              )}
            </>
          </ListItem>
        ))}
      </ul>
    </>
  );
};

CharactersContent.propTypes = {
  data: PropTypes.shape({
    book: PropTypes.shape({
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      img: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
    charactersList: PropTypes.array,
  }).isRequired,
};

CharactersContent.defaultProps = {
  charactersList: [],
};
