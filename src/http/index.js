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

const fetchBooks = async (token) =>
  fetcher(api.book.getAll.path, api.book.getAll.method, { token });

const fetchBookById = async (token, id) =>
  fetcher(api.book.getById.path.replace(":id", id), api.book.getById.method, {
    token,
  });

const fetchAddBook = async (token, body) =>
  fetcher(api.book.addBook.path, api.book.addBook.method, {
    token,
    body,
  });

const fetchDeleteBook = async (token, id) =>
  fetcher(
    api.book.deleteBook.path.replace(":id", id),
    api.book.deleteBook.method,
    {
      token,
    }
  );

const fetchUpdateBook = async (token, id, body) =>
  fetcher(
    api.book.updateBook.path.replace(":id", id),
    api.book.updateBook.method,
    {
      token,
      body,
    }
  );

const fetchCharactersByBookId = async (token, id) =>
  fetcher(
    api.character.getByBookId.path.replace(":id", id),
    api.character.getByBookId.method,
    {
      token,
    }
  );

const fetchWorks = async (token) =>
  fetcher(api.work.getAll.path, api.work.getAll.method, { token });

const fetchWorkById = async (token, id) =>
  fetcher(api.work.getById.path.replace(":id", id), api.work.getById.method, {
    token,
  });

const fetchAddWork = async (token, body) =>
  fetcher(api.work.addWork.path, api.work.addWork.method, {
    token,
    body,
  });

module.exports = {
  fetchLogin,
  fetchUpdatePassword,
  fetchBooks,
  fetchBookById,
  fetchAddBook,
  fetchDeleteBook,
  fetchUpdateBook,
  fetchCharactersByBookId,
  fetchWorks,
  fetchWorkById,
  fetchAddWork,
};
