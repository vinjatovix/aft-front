import React from "react";
import PropTypes from "prop-types";
import { AdminButtons } from "../../ui/admin/AdminButtons";

export const ContentListDetail = ({ actions, item, token, isAdmin, type }) => {
  const scene = (
    <p>
      {item.name}-{item.location} {item.time}: {item.description}.
    </p>
  );
  const character = (
    <p>
      {item.name}: {item.description}. {item.center}
    </p>
  );

  return (
    <>
      <div
        onClick={() => {
          actions.setDataDetail(item);
        }}
      >
        {type === "scene" && scene}
        {type === "character" && character}
      </div>
      {isAdmin && (
        <AdminButtons type="row" actions={actions} item={item} token={token} />
      )}
    </>
  );
};

ContentListDetail.propTypes = {
  type: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    setDataDetail: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    detail: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired,
  }).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

ContentListDetail.defaultProps = {
  isAdmin: false,
};
