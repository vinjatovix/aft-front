import React from "react";
import PropTypes from "prop-types";

export const NavigateButton = ({ text }) => {
  return (
    <button data-testid="navigate-button" className="bg-blue">
      {text}
    </button>
  );
};

NavigateButton.propTypes = {
  text: PropTypes.string,
};

NavigateButton.defaultProps = {
  text: "➡️ Go",
};
