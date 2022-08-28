import React from "react";

const Button = ({ loading, children, type }) => {
  return (
    <button type={type} className="bg-green">
      {loading ? <p>loading...</p> : children}
    </button>
  );
};

export default Button;
