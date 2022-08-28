import { ACTION_TYPES } from "../types/types";

const initialState = {
  loading: false,
  renewLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.AUTH_LOGIN_SUCCESS:
    case ACTION_TYPES.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case ACTION_TYPES.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
