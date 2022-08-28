import { ACTION_TYPES } from "../types/types";

export const loginRequestAction = () => ({
  type: ACTION_TYPES.AUTH_LOGIN_REQUEST,
});

export const loginSuccessAction = (auth) => ({
  type: ACTION_TYPES.AUTH_LOGIN_SUCCESS,
  payload: auth,
});

export const loginFailureAction = (error) => ({
  type: ACTION_TYPES.AUTH_LOGIN_FAILURE,
  payload: error,
});

export const logoutAction = () => ({
  type: ACTION_TYPES.AUTH_LOGOUT,
});
