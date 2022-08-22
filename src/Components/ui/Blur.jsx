import React from "react";
import PropTypes from "prop-types";
import { modalsStateType } from "../../PropTypes";

import { Modal } from "../common/modals/Modal";

export const Blur = ({ modals, detail, actions, edit, confirmDelete }) => {
  return (
    <Modal actions={{ close: actions.close, refresh: actions.refresh }}>
      {modals.detail && detail}

      {(modals.edit || modals.add) && edit}

      {modals.delete && confirmDelete}
    </Modal>
  );
};

Blur.propTypes = {
  actions: PropTypes.shape({
    close: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired,
  confirmDelete: PropTypes.element,
  detail: PropTypes.element,
  edit: PropTypes.element,
  modals: modalsStateType,
};
