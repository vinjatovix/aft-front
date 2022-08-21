import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../../ui/buttons/ActionButton";
export const ConfirmModal = ({
  auth,
  data,
  modalActions,
  callback,
  message,
}) => {
  return (
    <div className="detail">
      <p>{message}</p>
      <ActionButton
        text="SI"
        type="btn-big bg-red"
        action={callback}
        args={[auth.token, data._id]}
      />

      <ActionButton
        text="NO"
        type="btn-big bg-green"
        action={modalActions.close}
      />
    </div>
  );
};

ConfirmModal.propTypes = {
  auth: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  modalActions: PropTypes.shape({
    close: PropTypes.func.isRequired,
  }).isRequired,
  callback: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

ConfirmModal.defaultProps = {
  message: "¿Seguro que quieres continuar?",
};
