import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../../ui/buttons/ActionButton";
import { modalsStateType } from "../../../PropTypes";

export const Content = ({ children, modals, actions, isEditor, isOpen }) => {
  return (
    <div className={modals.blur ? "content blur" : "content"}>
      <div className="content_header">
        {(isEditor || isOpen) && (
          <ActionButton text="Añadir" type="bg-green" action={actions.add} />
        )}
      </div>
      {children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  modals: modalsStateType,
  actions: PropTypes.shape({
    add: PropTypes.func.isRequired,
  }).isRequired,
  isEditor: PropTypes.bool,
};

Content.defaultProps = {
  isEditor: false,
};
