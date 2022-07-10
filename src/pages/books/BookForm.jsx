import React from "react";

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
          id="img"
          name="img"
          value={formState.img}
          onChange={handleChange}
          placeholder="Url imagen"
        />
      </div>
      <button type="submit" className="bg-green">
        Enviar
      </button>
      {message && <p className={message.type}>{message.text}</p>}
    </form>
  );
};
