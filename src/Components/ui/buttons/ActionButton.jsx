import React from "react";
import PropTypes from "prop-types";

export const ActionButton = ({
  text,
  item,
  setDataDetail,
  action,
  type,
  args,
}) => {
  return (
    <button
      data-testid="action-button"
      className={type}
      onClick={() => {
        setDataDetail && setDataDetail(item);
        action(...args);
      }}
    >
      {text}
    </button>
  );
};

ActionButton.propTypes = {
  text: PropTypes.string,
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  setDataDetail: PropTypes.func,
  action: PropTypes.func.isRequired,
  color: PropTypes.string,
  args: PropTypes.arrayOf(PropTypes.any),
};

ActionButton.defaultProps = {
  text: "➡️ Go",
  type: "bg-blue",
  args: [],
};
