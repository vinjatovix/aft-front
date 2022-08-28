import authReducer from "../../src/reducers/authReducer";
import { ACTION_TYPES } from "../../src/types/types";

const initialState = {
  loading: false,
  renewLoading: true,
};

describe("Auth reducer", () => {
  // initial state
  it("returns the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  // login request
  it("returns the loading state", () => {
    expect(
      authReducer(initialState, {
        type: ACTION_TYPES.AUTH_LOGIN_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  // login success
  it("returns the success state", () => {
    expect(
      authReducer(initialState, {
        type: ACTION_TYPES.AUTH_LOGIN_SUCCESS,
        payload: {
          token: "token",
          user: {
            username: "username",
            roles: ["aft.admin"],
          },
        },
      })
    ).toEqual({
      ...initialState,
      token: "token",
      user: {
        username: "username",
        roles: ["aft.admin"],
      },
    });
  });

  // login failure
  it("returns the failure state", () => {
    expect(
      authReducer(initialState, {
        type: ACTION_TYPES.AUTH_LOGIN_FAILURE,
        payload: {
          error: "error",
          loginValues: {
            username: "username",
            password: "password",
          },
        },
      })
    ).toEqual({
      ...initialState,
      error: "error",
      loginValues: {
        username: "username",
        password: "password",
      },
    });
  });

  // logout
  it("returns the initial state after logout", () => {
    expect(
      authReducer(initialState, {
        type: ACTION_TYPES.AUTH_LOGOUT,
      })
    ).toEqual(initialState);
  });
});
