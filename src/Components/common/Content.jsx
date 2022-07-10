import React from "react";
import PropTypes from "prop-types";

export const Content = ({ children, modals, modalActions, isAdmin }) => {
  return (
    <div className={modals.blur ? "content blur" : "content"}>
      <div className="content_header">
        {isAdmin && (
          <button className="bg-green" onClick={() => modalActions.add()}>
            Añadir
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  modals: PropTypes.object.isRequired,
  modalActions: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
};

Content.defaultProps = {
  isAdmin: false,
};
