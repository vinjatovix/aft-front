import React from "react";
import PropTypes from "prop-types";

import { BookCard } from "../../books/BookCard";
import { UserCard } from "../../user/UserCard";
import { WorkCard } from "../../work/WorkCard";

export const Card = ({ type, ...props }) => {
  const { data, actions } = props;

  const _setDataDetail = () => actions.setDataDetail(data);

  return (
    <div className="card" onClick={_setDataDetail}>
      {type === "book" && <BookCard {...props} />}
      {type === "user" && <UserCard data={data} />}
      {type === "work" && <WorkCard {...props} />}
    </div>
  );
};

Card.propTypes = {
  actions: PropTypes.object,
  data: PropTypes.object.isRequired,
  isEditor: PropTypes.bool,
  token: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Card.defaultProps = {
  isEditor: false,
};
