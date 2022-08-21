import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../buttons/ActionButton";

export const AdminButtons = ({ item, actions, token, type }) => {
  return (
    <div className={`control-panel-mini ${type}`}>
      <ActionButton
        text={type === "row" ? "📝" : "📝 Editar"}
        type="btn-big bg-yellow"
        item={item}
        setDataDetail={actions.setDataDetail}
        action={actions.edit}
      />

      <ActionButton
        text={type === "row" ? "🗑️" : "🗑️ Eliminar"}
        type="btn-big bg-red"
        item={item}
        setDataDetail={actions.setDataDetail}
        action={actions.delete}
        args={[token, item._id]}
      />
    </div>
  );
};

AdminButtons.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  type: PropTypes.string,
};

AdminButtons.defaultProps = {
  type: "",
};
