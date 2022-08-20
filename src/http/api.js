import { getApiHost } from "../helpers/getApiHost";

const authentication = {
  login: {
    path: "/authentication/login",
    method: "POST",
  },
  updatePassword: {
    path: "/authentication/updatepassword",
    method: "PATCH",
  },
};

const book = {
  getAll: {
    path: "/book",
    method: "GET",
  },
  getById: {
    path: "/book/:id",
    method: "GET",
  },
  addBook: {
    path: "/book",
    method: "POST",
  },
  deleteBook: {
    path: "/book/:id",
    method: "DELETE",
  },
  updateBook: {
    path: "/book/:id",
    method: "PATCH",
  },
};

const character = {
  getAll: {
    path: "/character",
    method: "GET",
  },
  getById: {
    path: "/character/:id",
    method: "GET",
  },
  addCharacter: {
    path: "/character",
    method: "POST",
  },
  deleteCharacter: {
    path: "/character/:id",
    method: "DELETE",
  },
  updateCharacter: {
    path: "/character/:id",
    method: "PATCH",
  },
  getByBookId: {
    path: "/character?filter[book]=:id",
    method: "GET",
  },
};

const scene = {
  addScene: {
    path: "/scene?include=characters.book",
    method: "POST",
  },
  getAll: {
    path: "/scene?include=characters.book",
    method: "GET",
  },
  getById: {
    path: "/scene/:id?include=characters.book",
    method: "GET",
  },
  getByBookId: {
    path: "/scene?filter[book]=:id&include=characters",
    method: "GET",
  },
  updateScene: {
    path: "/scene/:id?include=characters",
    method: "PATCH",
  },
  deleteScene: {
    path: "/scene/:id",
    method: "DELETE",
  },
};

const user = {
  getAll: {
    path: "/user",
    method: "GET",
  },
  getById: {
    path: "/user/:id",
    method: "GET",
  },
};

const work = {
  getAll: {
    path: "/work?include=character,scene",
    method: "GET",
  },
  getById: {
    path: "/work/:id",
    method: "GET",
  },
  addWork: {
    path: "/work",
    method: "POST",
  },
};

export const api = {
  host: getApiHost(),
  authentication,
  book,
  character,
  scene,
  user,
  work,
};
