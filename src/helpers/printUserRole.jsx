import React from "react";

export const printUserRole = (roles) => {
  let result = {};

  if (roles.includes("aft.admin")) {
    result = <strong className="red">ADMIN</strong>;
  } else if (roles.includes("aft.editor")) {
    result = <strong className="orange">EDITOR</strong>;
  } else if (roles.includes("aft.user")) {
    result = <strong className="green">USER</strong>;
  }

  return result;
};
