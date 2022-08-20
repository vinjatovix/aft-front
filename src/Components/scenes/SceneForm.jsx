import React from "react";
import PropTypes from "prop-types";

export const SceneForm = ({
  handleSubmit,
  _handleChange,
  _formState,
  _message,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>WIP</h1>
    </form>
  );
};

SceneForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  // handleChange: PropTypes.func.isRequired,
  // formState: PropTypes.object.isRequired,
  // message: PropTypes.shape({
  //   type: PropTypes.string,
  //   text: PropTypes.string,
  // }),
};
