import React from "react";
import PropTypes from "prop-types";

export const BookForm = ({
  handleSubmit,
  handleChange,
  formState,
  message,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          data-testid="name"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Título"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          data-testid="author"
          id="author"
          name="author"
          value={formState.author}
          onChange={handleChange}
          placeholder="Autor"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          data-testid="img"
          id="img"
          name="img"
          value={formState.img}
          onChange={handleChange}
          placeholder="Url imagen"
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          data-testid="description"
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          placeholder="Descripción"
        />
      </div>
      <button type="submit" className="bg-green">
        Enviar
      </button>
      {message && (
        <p data-testid="message" className={message.type}>
          {message.text}
        </p>
      )}
    </form>
  );
};

BookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  message: PropTypes.shape({
    text: PropTypes.string,
    type: PropTypes.string,
  }),
};

BookForm.defaultProps = {
  message: null,
};
