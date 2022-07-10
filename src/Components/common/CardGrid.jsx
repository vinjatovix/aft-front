import React from "react";
import PropTypes from "prop-types";
import Card from "./card/Card";

export const CardGrid = ({ data, actions, isAdmin, type, token }) => {
  return (
    <div className="card-grid">
      {data.map((item) => (
        <Card
          type={type}
          key={item._id}
          data={item}
          isAdmin={isAdmin}
          actions={actions}
          token={token}
        />
      ))}
    </div>
  );
};

CardGrid.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool,
  token: PropTypes.string,
};

CardGrid.defaultProps = {
  isAdmin: false,
};
