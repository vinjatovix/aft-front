import React from "react";
import PropTypes from "prop-types";
import { UserCard } from "./UserCard";

const Card = ({ data, type, actions, isAdmin, token }) => {
  return (
    <div className="card" onClick={() => actions.setDataDetail(data)}>
      {type === "user" && <UserCard data={data} />}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  actions: PropTypes.object,
  isAdmin: PropTypes.bool,
  token: PropTypes.string,
};

Card.defaultProps = {
  isAdmin: false,
};

export default Card;
