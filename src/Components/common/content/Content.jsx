import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../../ui/buttons/ActionButton";

export const Content = ({ children, modals, modalActions, isAdmin }) => {
  return (
    <div className={modals.blur ? "content blur" : "content"}>
      <div className="content_header">
        {isAdmin && (
          <ActionButton
            text="Añadir"
            type="bg-green"
            action={modalActions.add}
          />
        )}
      </div>
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  modals: PropTypes.object.isRequired,
  modalActions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired,
  isAdmin: PropTypes.bool,
};

Content.defaultProps = {
  isAdmin: false,
};
