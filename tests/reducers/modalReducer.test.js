import { wait } from "@testing-library/user-event/dist/utils";
import { modalReducer } from "../../src/reducers/modalReducer";

describe("Modal reducer", () => {
  // initial state
  it("returns the initial state", () => {
    const lastRefresh = +new Date();
    const state = {
      add: false,
      blur: false,
      delete: false,
      detail: false,
      edit: false,
      data: {},
      lastRefresh,
    };

    expect(modalReducer(state, {})).toEqual({
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
      data: {},
      lastRefresh,
    });
  });

  it("should return the state with al properties at false", async () => {
    const state = {
      add: true,
      detail: true,
      edit: true,
      delete: true,
      blur: true,
    };

    const action = {
      type: "CLOSE_MODAL",
    };

    const result = modalReducer(state, action);

    expect(result).toEqual({
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    });
  });

  it("should add data to the state", async () => {
    const state = {
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    };
    const action = {
      type: "SET_DATA",
      payload: {
        name: "Obra",
      },
    };

    const result = modalReducer(state, action);

    expect(result).toEqual({
      ...state,
      data: {
        name: "Obra",
      },
    });
  });

  it("should activate add modal", async () => {
    const state = {
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    };
    const action = {
      type: "ADD_MODAL",
    };

    const result = modalReducer(state, action);

    expect(result).toEqual({
      ...state,
      add: true,
      blur: true,
    });
  });

  it("should activate detail modal", async () => {
    const state = {
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    };
    const action = {
      type: "DETAIL_MODAL",
    };

    const result = modalReducer(state, action);

    expect(result).toEqual({
      ...state,
      detail: true,
      blur: true,
    });
  });

  it("should activate edit modal", async () => {
    const state = {
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    };
    const action = {
      type: "EDIT_MODAL",
    };

    const result = modalReducer(state, action);

    expect(result).toEqual({
      ...state,
      edit: true,
      blur: true,
    });
  });

  it("should activate delete modal", async () => {
    const state = {
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    };
    const action = {
      type: "DELETE_MODAL",
    };

    const result = modalReducer(state, action);

    expect(result).toEqual({
      ...state,
      delete: true,
      blur: true,
    });
  });

  // refresh modal
  it("should refresh modal", async () => {
    const state = {
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    };
    const action = {
      type: "REFRESH",
    };

    const date = +new Date();
    await wait(2000);

    const result = modalReducer(state, action);

    expect(result.lastRefresh).toBeGreaterThan(date);
    expect(result).toMatchObject({
      ...state,
      add: false,
      detail: false,
      edit: false,
      delete: false,
      blur: false,
    });
  });
});
