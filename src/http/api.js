const api = {
  host: "https://aft-back.herokuapp.com/api/",
  authentication: {
    login: {
      path: "/authentication/login",
      method: "POST",
    },
    updatePassword: {
      path: "/authentication/updatepassword",
      method: "PATCH",
    },
  },
  work: {
    getAll: {
      path: "/work",
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
  },
  book: {
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
  },
  character: {
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
  },
  user: {
    getAll: {
      path: "/user",
      method: "GET",
    },
    getById: {
      path: "/user/:id",
      method: "GET",
    },
  },
};

exports.api = api;
