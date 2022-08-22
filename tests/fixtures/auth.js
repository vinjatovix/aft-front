export const mockAuthAdmin = {
  token: "token",
  user: {
    _id: "5e9f8f8f8f8f8f8f8f8f8f0",
    username: "admin",
    roles: ["aft.admin", "aft.user", "aft.editor"],
  },
};

export const mockAuthEditor = {
  token: "token",
  user: {
    _id: "5e9f8f8f8f8f8f8f8f8f8f2",
    username: "editor",
    roles: ["aft.editor", "aft.user"],
  },
};

export const mockAuthUser = {
  token: "token",
  user: {
    _id: "5e9f8f8f8f8f8f8f8f8f8f1",
    username: "user",
    roles: ["aft.user"],
  },
};
