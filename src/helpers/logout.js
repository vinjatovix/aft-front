import { logoutAction } from "../actions/auth";

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logoutAction());
  };
};
