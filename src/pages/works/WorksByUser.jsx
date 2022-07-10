import React from "react";
import PropTypes from "prop-types";
import { getWorksByStudent } from "../../selectors/getWorksByStudent.js";
import Card from "../../Components/common/card/Card.jsx";

export const WorksByUser = ({ data, username }) => {
  const works = getWorksByStudent(data, username);

  return (
    <div className="card-grid">
      {works.map((item) => (
        <Card type="work" key={item._id} {...item} />
      ))}
    </div>
  );
};

WorksByUser.propTypes = {
  data: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};
