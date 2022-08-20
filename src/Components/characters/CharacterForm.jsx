import React from "react";
import PropTypes from "prop-types";

export const CharacterForm = ({
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
          placeholder="Nombre"
          autoFocus
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          type="select"
          data-testid="gender"
          id="gender"
          name="gender"
          value={formState.gender}
          onChange={handleChange}
          placeholder="Género"
        >
          <option name="gender" onChange={handleChange} value="male">
            Masculino
          </option>
          <option name="gender" onChange={handleChange} value="female">
            Femenino
          </option>
        </select>
      </div>
      <div className="form-group">
        <select
          className="form-control"
          type="text"
          data-testid="center"
          id="center"
          name="center"
          value={formState.center}
          onChange={handleChange}
          placeholder="Centro"
        >
          <option name="center" onChange={handleChange} value="instintive">
            Instintivo
          </option>
          <option name="center" onChange={handleChange} value="mental">
            Mental
          </option>
          <option name="center" onChange={handleChange} value="emotional">
            Emocional
          </option>
        </select>
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

CharacterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    center: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
  message: PropTypes.object,
};
