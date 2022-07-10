const { api } = require("./api");

const fetcher = async (path, method, { body, token, version = "v1" }) =>
  fetch(`${api.host}${version}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: _pack(body) } : {}),
  });

const _pack = (body) =>
  typeof body === "string" ? body : JSON.stringify(body);

const fetchLogin = async (body) =>
  fetcher(api.authentication.login.path, api.authentication.login.method, {
    body,
  });

const fetchUpdatePassword = async (token, body) =>
  fetcher(
    api.authentication.updatePassword.path,
    api.authentication.updatePassword.method,
    {
      token,
      body,
    }
  );

module.exports = {
  fetchLogin,
  fetchUpdatePassword,
};
