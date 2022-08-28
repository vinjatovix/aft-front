import { decodeToken, isExpired } from "react-jwt";

export const checkToken = (
  token,
  dispatch,
  loginSuccessAction,
  logoutAction
) => {
  if (token) {
    const isMyTokenExpired = isExpired(token);
    if (!isMyTokenExpired) {
      const jwt = decodeToken(token);
      dispatch(
        loginSuccessAction({
          token,
          user: { username: jwt.username, roles: jwt.roles },
        })
      );
    }
  } else {
    dispatch(logoutAction());
  }
};
