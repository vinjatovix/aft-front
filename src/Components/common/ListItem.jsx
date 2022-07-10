import React from "react";
import PropTypes from "prop-types";

export const ListItem = ({ className, name, children }) => (
  <li className={className} key={name}>
    {children}
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ListItem.defaultProps = {
  className: "",
};
