const roles = { admin: "aft-admin", user: "aft-user", editor: "aft-editor" };

const getUserContext = (role) => {
  if (role === "admin") {
    return {
      token: "mockToken",
      user: {
        username: "admin",
        roles: [roles.admin, roles.user, roles.editor],
      },
    };
  }
  if (role === "user") {
    return {
      token: "mockToken",
      user: {
        username: "student",
        roles: [roles.user],
      },
    };
  }
  if (role === "editor") {
    return {
      token: "mockToken",
      user: {
        username: "editor",
        roles: [roles.editor],
      },
    };
  }
  return {};
};

export default getUserContext;
