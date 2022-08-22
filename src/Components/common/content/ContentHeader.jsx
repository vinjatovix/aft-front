import React from "react";
import PropTypes from "prop-types";

export const ContentHeader = ({ book, title, count }) => {
  return (
    <div className="content-header">
      <h1 data-testid={title}>
        {title} {count}
      </h1>
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
          <h2>
            {book.author} - {book.name}
          </h2>
          <h6>{book.description}</h6>
        </>
      )}
    </div>
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
