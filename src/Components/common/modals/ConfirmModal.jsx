import React from "react";
import PropTypes from "prop-types";
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
      <button
        className="action-button bg-red"
        onClick={() => {
          callback(auth.token, data._id);
        }}
      >
        SI
      </button>
      <button className="action-button bg-green" onClick={modalActions.close}>
        No
      </button>
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
