import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ actions, children, addedStyles }) => {
  const style = addedStyles ? `modal-body ${addedStyles}` : "modal-body";
  return (
    <div data-testid="modal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close bg-red" onClick={actions.close}>
            &times;
          </span>
        </div>
        <div className={style}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  actions: PropTypes.shape({
    close: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  addedStyles: PropTypes.string,
};
