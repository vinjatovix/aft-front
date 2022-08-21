const { getWorksByStudent } = require("../../src/selectors/getWorksByStudent");

describe("getWorksByStudent", () => {
  it("returns works for the given student", () => {
    const data = [
      {
        student: {
          name: "John Doe",
        },
      },
      {
        student: {
          name: "Jane Doe",
        },
      },
      {
        student: {
          name: "John Doe",
        },
      },
    ];
    const username = "John Doe";

    expect(getWorksByStudent({ data, username })).toEqual([data[0], data[2]]);
  });

  it("returns an empty array if the student has no works", () => {
    const data = [
      {
        student: {
          name: "Jane Doe",
        },
      },
      {
        student: {
          name: "Jane Doe",
        },
      },
    ];
    const username = "John Doe";

    expect(getWorksByStudent({ data, username })).toEqual([]);
  });
  it("returns an empty array if the data is empty", () => {
    const data = [];
    const username = "John Doe";

    expect(getWorksByStudent({ data, username })).toEqual([]);
  });
  it("returns an empty array if the data is undefined", () => {
    const data = undefined;
    const username = "John Doe";

    expect(getWorksByStudent({ data, username })).toEqual([]);
  });

  it("returns an empty array if the username is undefined", () => {
    const data = [
      {
        student: {
          name: "John Doe",
        },
      },
      {
        student: {
          name: "Jane Doe",
        },
      },
    ];
    const username = undefined;

    expect(getWorksByStudent({ data, username })).toEqual([]);
  });

  it("returns an empty array if the username is empty", () => {
    const data = [
      {
        student: {
          name: "John Doe",
        },
      },
      {
        student: {
          name: "Jane Doe",
        },
      },
    ];
    const username = "";

    expect(getWorksByStudent({ data, username })).toEqual([]);
  });
});
