import React from "react";
import PropTypes from "prop-types";

export const ContentHeader = ({ book, title, count }) => {
  return (
    <>
      {book && (
        <>
          <img
            className="portrait"
            src={
              book.img
                ? book.img
                : "https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg"
            }
            alt="book"
          />
          <h1>
            {book.author}-{book.name}
          </h1>
          <h2>{book.description}</h2>
        </>
      )}

      <h3 data-testid={title}>
        {title} {count}
      </h3>
    </>
  );
};

ContentHeader.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
};

ContentHeader.defaultProps = {
  book: null,
  count: null,
};
