import React from "react";
import PropTypes from "prop-types";

export const AdminPanelRow = ({ actions, item, token }) => {
  return (
    <>
      <div className="control-panel-mini row">
        <button
          className="bg-yellow"
          onClick={() => {
            actions.setDataDetail(item);
            actions.edit();
          }}
        >
          📝
        </button>
        <button
          className="bg-red"
          onClick={() => {
            actions.setDataDetail(item);
            actions.delete(token, item._id);
          }}
        >
          🗑️
        </button>
      </div>
    </>
  );
};

AdminPanelRow.propTypes = {
  actions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};
