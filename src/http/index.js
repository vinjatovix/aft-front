import { api } from "./api";

export const fetcher = async (path, method, { body, token, version = "v1" }) =>
  fetch(`${api.host}${version}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: _pack(body) } : {}),
  });

export const _pack = (body) =>
  typeof body === "string" ? body : JSON.stringify(body);

export const fetchLogin = async (body) =>
  fetcher(api.authentication.login.path, api.authentication.login.method, {
    body,
  });

export const fetchUpdatePassword = async (token, body) =>
  fetcher(
    api.authentication.updatePassword.path,
    api.authentication.updatePassword.method,
    {
      token,
      body,
    }
  );

export const fetchWorks = async (token) =>
  fetcher(api.work.getAll.path, api.work.getAll.method, { token });

export const fetchWorkById = async (token, id) =>
  fetcher(api.work.getById.path.replace(":id", id), api.work.getById.method, {
    token,
  });

export const fetchAddWork = async (token, body) =>
  fetcher(api.work.addWork.path, api.work.addWork.method, {
    token,
    body,
  });

export const fetchBooks = async (token) =>
  fetcher(api.book.getAll.path, api.book.getAll.method, { token });

export const fetchBookById = async (token, id) =>
  fetcher(api.book.getById.path.replace(":id", id), api.book.getById.method, {
    token,
  });

export const fetchAddBook = async (token, body) =>
  fetcher(api.book.addBook.path, api.book.addBook.method, {
    token,
    body,
  });

export const fetchDeleteBook = async (token, id) =>
  fetcher(
    api.book.deleteBook.path.replace(":id", id),
    api.book.deleteBook.method,
    {
      token,
    }
  );

export const fetchUpdateBook = async (token, id, body) =>
  fetcher(
    api.book.updateBook.path.replace(":id", id),
    api.book.updateBook.method,
    {
      token,
      body,
    }
  );

export const fetchCharactersByBookId = async (token, id) =>
  fetcher(
    api.character.getByBookId.path.replace(":id", id),
    api.character.getByBookId.method,
    {
      token,
    }
  );

export const fetchAddCharacter = async (token, body) =>
  fetcher(api.character.addCharacter.path, api.character.addCharacter.method, {
    token,
    body,
  });

export const fetchUpdateCharacter = async (token, id, body) =>
  fetcher(
    api.character.updateCharacter.path.replace(":id", id),
    api.character.updateCharacter.method,
    {
      token,
      body,
    }
  );

export const fetchDeleteCharacter = async (token, id) =>
  fetcher(
    api.character.deleteCharacter.path.replace(":id", id),
    api.character.deleteCharacter.method,
    {
      token,
    }
  );

export const fetchUsers = async (token) =>
  fetcher(api.user.getAll.path, api.user.getAll.method, { token });

export const fetchAddScene = async (token, body) =>
  fetcher(api.scene.addScene.path, api.scene.addScene.method, {
    token,
    body,
  });

export const fetchUpdateScene = async (token, id, body) =>
  fetcher(
    api.scene.updateScene.path.replace(":id", id),
    api.scene.updateScene.method,
    {
      token,
      body,
    }
  );

export const fetchDeleteScene = async (token, id) =>
  fetcher(
    api.scene.deleteScene.path.replace(":id", id),
    api.scene.deleteScene.method,
    {
      token,
    }
  );

export const fetchScenesByBookId = async (token, id) =>
  fetcher(
    api.scene.getByBookId.path.replace(":id", id),
    api.scene.getByBookId.method,
    {
      token,
    }
  );

export const fetchScenes = async (token) =>
  fetcher(api.scene.getAll.path, api.scene.getAll.method, {
    token,
  });

export const fetchSceneById = async (token, id) =>
  fetcher(api.scene.getById.path.replace(":id", id), api.scene.getById.method, {
    token,
  });
