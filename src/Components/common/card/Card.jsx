import React from "react";
import PropTypes from "prop-types";
import { UserCard } from "./UserCard";
import { BookCard } from "./BookCard";

const Card = ({ data, type, actions, isAdmin, token }) => {
  return (
    <div className="card" onClick={() => actions.setDataDetail(data)}>
      {type === "user" && <UserCard data={data} />}

      {type === "book" && (
        <BookCard
          data={data}
          isAdmin={isAdmin}
          actions={actions}
          token={token}
        />
      )}
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
