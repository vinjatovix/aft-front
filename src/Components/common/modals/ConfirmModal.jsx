import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../../ui/buttons/ActionButton";
export const ConfirmModal = ({
  auth,
  data,
  actions,
  confirmationQuestion,
  feedbackMessage,
  callback,
}) => {
  return (
    <div className="detail">
      <p>{confirmationQuestion}</p>
      <ActionButton
        text="SI"
        type="btn-big bg-red"
        action={callback}
        args={[auth.token, data._id]}
      />

      <ActionButton text="NO" type="btn-big bg-green" action={actions.close} />

      <p className={feedbackMessage.type}>{feedbackMessage.text}</p>
    </div>
  );
};

ConfirmModal.propTypes = {
  auth: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    close: PropTypes.func.isRequired,
  }).isRequired,
  callback: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

ConfirmModal.defaultProps = {
  message: "¿Seguro que quieres continuar?",
};
